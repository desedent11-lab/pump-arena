
"""
Pump Arena bot webhook stub.

For MVP, bot.py polling is simpler.
Use this file later when deploying the bot as webhook.
"""

from __future__ import annotations

import os
from fastapi import FastAPI, Request
from telegram import Update
from telegram.ext import Application, CommandHandler, ContextTypes
from telegram import InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo

BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN", "")
WEBAPP_URL = os.getenv("PUMP_ARENA_WEBAPP_URL", os.getenv("FRONTEND_URL", ""))
WEBHOOK_SECRET = os.getenv("PUMP_ARENA_WEBHOOK_SECRET", "change-me")

app = FastAPI(title="Pump Arena Bot Webhook")
tg_app: Application | None = None


def keyboard() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup([[InlineKeyboardButton("🎮 Играть", web_app=WebAppInfo(url=WEBAPP_URL))]])


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text("🔥 Pump Arena готова. Жми кнопку и входи в арену.", reply_markup=keyboard())


@app.on_event("startup")
async def startup() -> None:
    global tg_app
    if not BOT_TOKEN:
        raise RuntimeError("TELEGRAM_BOT_TOKEN is not set")
    tg_app = Application.builder().token(BOT_TOKEN).build()
    tg_app.add_handler(CommandHandler("start", start))
    await tg_app.initialize()


@app.post("/telegram/webhook/{secret}")
async def telegram_webhook(secret: str, request: Request):
    if secret != WEBHOOK_SECRET:
        return {"ok": False, "error": "bad secret"}
    assert tg_app is not None
    data = await request.json()
    update = Update.de_json(data, tg_app.bot)
    await tg_app.process_update(update)
    return {"ok": True}


@app.get("/health")
def health():
    return {"ok": True, "service": "pump-arena-bot-webhook"}
