
from __future__ import annotations

import json
import sqlite3
import hashlib
import hmac
import os
from urllib.parse import parse_qsl
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "pump_arena.db"
BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN", "")
ADMIN_KEY = os.getenv("PUMP_ARENA_ADMIN_KEY", "dev-admin-key")
PRODUCTION_MODE = os.getenv("PUMP_ARENA_MODE", "DEV").upper() == "PROD"
FRONTEND_URL = os.getenv("FRONTEND_URL", "*")

app = FastAPI(title="Pump Arena Backend", version="17.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"] if FRONTEND_URL == "*" else [FRONTEND_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class SaveRequest(BaseModel):
    telegram_id: str = Field(min_length=1)
    username: str = "Guest Player"
    init_data: str = ""
    state: dict[str, Any] = Field(default_factory=dict)


class VerifyTelegramRequest(BaseModel):
    init_data: str = ""


class AdminRewardRequest(BaseModel):
    admin_key: str
    telegram_id: str
    balance_delta: int = 0
    arena_delta: int = 0
    reason: str = "admin_reward"


class AdminEventRequest(BaseModel):
    admin_key: str
    event_name: str
    enabled: bool = True
    description: str = ""


def db() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db() -> None:
    with db() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS players (
                telegram_id TEXT PRIMARY KEY,
                username TEXT NOT NULL,
                state_json TEXT NOT NULL,
                balance INTEGER DEFAULT 0,
                player_level INTEGER DEFAULT 1,
                arena_rating INTEGER DEFAULT 0,
                solo_rating INTEGER DEFAULT 0,
                team3_rating INTEGER DEFAULT 0,
                clan_name TEXT DEFAULT '',
                clan_xp INTEGER DEFAULT 0,
                updated_at TEXT NOT NULL
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS admin_events (
                event_name TEXT PRIMARY KEY,
                enabled INTEGER NOT NULL,
                description TEXT DEFAULT '',
                updated_at TEXT NOT NULL
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS audit_log (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                action TEXT NOT NULL,
                telegram_id TEXT DEFAULT '',
                payload_json TEXT NOT NULL,
                created_at TEXT NOT NULL
            )
            """
        )
        # Lightweight migration for older local DBs.
        for col, ddl in [
            ("solo_rating", "ALTER TABLE players ADD COLUMN solo_rating INTEGER DEFAULT 0"),
            ("team3_rating", "ALTER TABLE players ADD COLUMN team3_rating INTEGER DEFAULT 0"),
            ("clan_xp", "ALTER TABLE players ADD COLUMN clan_xp INTEGER DEFAULT 0"),
        ]:
            try:
                conn.execute(ddl)
            except sqlite3.OperationalError:
                pass
        conn.commit()


def extract_stats(state: dict[str, Any]) -> dict[str, Any]:
    player = state.get("pump_player") or {}
    clan = state.get("pump_clan_v11") or {}
    arena = state.get("pump_arena_modes_v14") or {}

    if not isinstance(player, dict):
        player = {}
    if not isinstance(clan, dict):
        clan = {}
    if not isinstance(arena, dict):
        arena = {}

    balance = int(player.get("balance") or 0)
    player_level = int(player.get("level") or 1)
    solo_rating = int(arena.get("soloRating") or 0)
    team3_rating = int(arena.get("team3Rating") or 0)
    arena_rating = solo_rating + team3_rating
    clan_name = str(clan.get("name") or "")
    clan_xp = int(clan.get("xp") or 0)

    return {
        "balance": balance,
        "player_level": player_level,
        "arena_rating": arena_rating,
        "solo_rating": solo_rating,
        "team3_rating": team3_rating,
        "clan_name": clan_name,
        "clan_xp": clan_xp,
    }


def verify_telegram_init_data(init_data: str) -> dict[str, Any]:
    """
    Telegram Mini App initData verification.
    For browser/local testing, empty init_data is allowed, but marked unverified.
    Before public launch, set TELEGRAM_BOT_TOKEN and require verified=True.
    """
    if not init_data:
        return {"verified": False, "reason": "empty_init_data_allowed_for_local_mvp"}

    if not BOT_TOKEN:
        return {"verified": False, "reason": "bot_token_not_configured"}

    parsed = dict(parse_qsl(init_data, keep_blank_values=True))
    received_hash = parsed.pop("hash", None)
    if not received_hash:
        return {"verified": False, "reason": "missing_hash"}

    data_check_string = "\n".join(f"{k}={v}" for k, v in sorted(parsed.items()))
    secret_key = hmac.new(b"WebAppData", BOT_TOKEN.encode(), hashlib.sha256).digest()
    calculated_hash = hmac.new(secret_key, data_check_string.encode(), hashlib.sha256).hexdigest()

    return {
        "verified": hmac.compare_digest(calculated_hash, received_hash),
        "reason": "ok" if hmac.compare_digest(calculated_hash, received_hash) else "hash_mismatch",
    }


def anti_cheat_check(stats: dict[str, Any]) -> dict[str, Any]:
    warnings = []
    if stats["balance"] > 10_000_000:
        warnings.append("balance_too_high")
    if stats["arena_rating"] > 100_000:
        warnings.append("arena_rating_too_high")
    if stats["player_level"] > 500:
        warnings.append("player_level_too_high")
    return {"ok": len(warnings) == 0, "warnings": warnings}


def audit(action: str, telegram_id: str, payload: dict[str, Any]) -> None:
    with db() as conn:
        conn.execute(
            "INSERT INTO audit_log (action, telegram_id, payload_json, created_at) VALUES (?, ?, ?, ?)",
            (
                action,
                telegram_id,
                json.dumps(payload, ensure_ascii=False),
                datetime.now(timezone.utc).isoformat(),
            ),
        )
        conn.commit()


def require_admin(admin_key: str) -> None:
    if admin_key != ADMIN_KEY:
        raise HTTPException(status_code=403, detail="Invalid admin key")



@app.on_event("startup")
def startup() -> None:
    init_db()


@app.get("/health")
def health() -> dict[str, Any]:
    return {
        "ok": True,
        "service": "Pump Arena Backend",
        "version": "17.0.0",
        "db": str(DB_PATH.name),
        "time": datetime.now(timezone.utc).isoformat(),
    }


@app.post("/api/save")
def save_player(req: SaveRequest) -> dict[str, Any]:
    init_db()

    stats = extract_stats(req.state)
    verification = verify_telegram_init_data(req.init_data)
    anti_cheat = anti_cheat_check(stats)

    if PRODUCTION_MODE and not verification.get("verified"):
        raise HTTPException(status_code=403, detail="Telegram initData verification required in PROD")

    if PRODUCTION_MODE and not anti_cheat.get("ok"):
        raise HTTPException(status_code=400, detail={"message": "Anti-cheat warning", "warnings": anti_cheat.get("warnings", [])})

    now = datetime.now(timezone.utc).isoformat()
    state_json = json.dumps(req.state, ensure_ascii=False)

    with db() as conn:
        conn.execute(
            """
            INSERT INTO players (
                telegram_id, username, state_json, balance, player_level,
                arena_rating, solo_rating, team3_rating, clan_name, clan_xp, updated_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(telegram_id) DO UPDATE SET
                username=excluded.username,
                state_json=excluded.state_json,
                balance=excluded.balance,
                player_level=excluded.player_level,
                arena_rating=excluded.arena_rating,
                solo_rating=excluded.solo_rating,
                team3_rating=excluded.team3_rating,
                clan_name=excluded.clan_name,
                clan_xp=excluded.clan_xp,
                updated_at=excluded.updated_at
            """,
            (
                req.telegram_id,
                req.username,
                state_json,
                stats["balance"],
                stats["player_level"],
                stats["arena_rating"],
                stats["solo_rating"],
                stats["team3_rating"],
                stats["clan_name"],
                stats["clan_xp"],
                now,
            ),
        )
        conn.commit()

    audit("save_player", req.telegram_id, {"stats": stats, "verification": verification, "anti_cheat": anti_cheat})

    return {
        "ok": True,
        "telegram_id": req.telegram_id,
        "username": req.username,
        "stats": stats,
        "telegram_verification": verification,
        "anti_cheat": anti_cheat,
        "updated_at": now,
    }


@app.get("/api/load/{telegram_id}")
def load_player(telegram_id: str) -> dict[str, Any]:
    init_db()

    with db() as conn:
        row = conn.execute(
            "SELECT * FROM players WHERE telegram_id = ?",
            (telegram_id,),
        ).fetchone()

    if row is None:
        raise HTTPException(status_code=404, detail="Player save not found")

    return {
        "ok": True,
        "telegram_id": row["telegram_id"],
        "username": row["username"],
        "state": json.loads(row["state_json"]),
        "meta": {
            "balance": row["balance"],
            "player_level": row["player_level"],
            "arena_rating": row["arena_rating"],
            "solo_rating": row["solo_rating"],
            "team3_rating": row["team3_rating"],
            "clan_name": row["clan_name"],
            "clan_xp": row["clan_xp"],
            "updated_at": row["updated_at"],
        },
    }


@app.get("/api/leaderboard")
def leaderboard(kind: str = "overall") -> dict[str, Any]:
    init_db()

    allowed = {
        "overall": "arena_rating DESC, balance DESC",
        "solo": "solo_rating DESC, balance DESC",
        "team3": "team3_rating DESC, balance DESC",
        "clans": "clan_xp DESC, arena_rating DESC",
        "balance": "balance DESC, arena_rating DESC",
    }
    order_by = allowed.get(kind, allowed["overall"])

    with db() as conn:
        rows = conn.execute(
            f"""
            SELECT username, balance, player_level, arena_rating, solo_rating, team3_rating,
                   clan_name, clan_xp, updated_at
            FROM players
            ORDER BY {order_by}
            LIMIT 50
            """
        ).fetchall()

    return {
        "ok": True,
        "kind": kind,
        "players": [
            {
                "rank": i + 1,
                "username": row["username"],
                "balance": row["balance"],
                "player_level": row["player_level"],
                "arena_rating": row["arena_rating"],
                "solo_rating": row["solo_rating"],
                "team3_rating": row["team3_rating"],
                "clan_name": row["clan_name"],
                "clan_xp": row["clan_xp"],
                "updated_at": row["updated_at"],
            }
            for i, row in enumerate(rows)
        ],
    }


@app.post("/api/telegram/verify")
def verify_telegram(req: VerifyTelegramRequest) -> dict[str, Any]:
    return verify_telegram_init_data(req.init_data)


@app.post("/api/admin/event")
def admin_set_event(req: AdminEventRequest) -> dict[str, Any]:
    require_admin(req.admin_key)
    now = datetime.now(timezone.utc).isoformat()

    with db() as conn:
        conn.execute(
            """
            INSERT INTO admin_events (event_name, enabled, description, updated_at)
            VALUES (?, ?, ?, ?)
            ON CONFLICT(event_name) DO UPDATE SET
                enabled=excluded.enabled,
                description=excluded.description,
                updated_at=excluded.updated_at
            """,
            (req.event_name, 1 if req.enabled else 0, req.description, now),
        )
        conn.commit()

    audit("admin_event", "", req.model_dump())
    return {"ok": True, "event_name": req.event_name, "enabled": req.enabled, "updated_at": now}


@app.get("/api/events")
def list_events() -> dict[str, Any]:
    init_db()
    with db() as conn:
        rows = conn.execute("SELECT event_name, enabled, description, updated_at FROM admin_events ORDER BY event_name").fetchall()
    return {
        "ok": True,
        "events": [
            {
                "event_name": r["event_name"],
                "enabled": bool(r["enabled"]),
                "description": r["description"],
                "updated_at": r["updated_at"],
            }
            for r in rows
        ],
    }


@app.post("/api/admin/reward")
def admin_reward(req: AdminRewardRequest) -> dict[str, Any]:
    require_admin(req.admin_key)
    init_db()

    with db() as conn:
        row = conn.execute("SELECT * FROM players WHERE telegram_id = ?", (req.telegram_id,)).fetchone()
        if row is None:
            raise HTTPException(status_code=404, detail="Player not found")

        state = json.loads(row["state_json"])
        player = state.get("pump_player") or {}
        arena = state.get("pump_arena_modes_v14") or {}
        if not isinstance(player, dict):
            player = {}
        if not isinstance(arena, dict):
            arena = {}

        player["balance"] = int(player.get("balance") or 0) + req.balance_delta
        arena["soloRating"] = int(arena.get("soloRating") or 0) + req.arena_delta

        state["pump_player"] = player
        state["pump_arena_modes_v14"] = arena
        stats = extract_stats(state)

        conn.execute(
            """
            UPDATE players
            SET state_json=?, balance=?, player_level=?, arena_rating=?, solo_rating=?,
                team3_rating=?, clan_name=?, clan_xp=?, updated_at=?
            WHERE telegram_id=?
            """,
            (
                json.dumps(state, ensure_ascii=False),
                stats["balance"],
                stats["player_level"],
                stats["arena_rating"],
                stats["solo_rating"],
                stats["team3_rating"],
                stats["clan_name"],
                stats["clan_xp"],
                datetime.now(timezone.utc).isoformat(),
                req.telegram_id,
            ),
        )
        conn.commit()

    audit("admin_reward", req.telegram_id, req.model_dump())
    return {"ok": True, "telegram_id": req.telegram_id, "stats": stats}


@app.get("/api/admin/audit")
def admin_audit(admin_key: str) -> dict[str, Any]:
    require_admin(admin_key)
    init_db()
    with db() as conn:
        rows = conn.execute(
            "SELECT action, telegram_id, payload_json, created_at FROM audit_log ORDER BY id DESC LIMIT 100"
        ).fetchall()
    return {
        "ok": True,
        "audit": [
            {
                "action": r["action"],
                "telegram_id": r["telegram_id"],
                "payload": json.loads(r["payload_json"]),
                "created_at": r["created_at"],
            }
            for r in rows
        ],
    }


@app.get("/api/player/{telegram_id}/summary")
def player_summary(telegram_id: str) -> dict[str, Any]:
    init_db()

    with db() as conn:
        row = conn.execute(
            """
            SELECT username, balance, player_level, arena_rating, solo_rating, team3_rating, clan_name, clan_xp, updated_at
            FROM players
            WHERE telegram_id = ?
            """,
            (telegram_id,),
        ).fetchone()

    if row is None:
        raise HTTPException(status_code=404, detail="Player not found")

    return {
        "ok": True,
        "username": row["username"],
        "balance": row["balance"],
        "player_level": row["player_level"],
        "arena_rating": row["arena_rating"],
        "solo_rating": row["solo_rating"],
        "team3_rating": row["team3_rating"],
        "clan_name": row["clan_name"],
        "clan_xp": row["clan_xp"],
        "updated_at": row["updated_at"],
    }
