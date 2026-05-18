
from __future__ import annotations

import os
import logging

from telegram import InlineKeyboardButton, InlineKeyboardMarkup, MenuButtonWebApp, WebAppInfo, Update
from telegram.ext import Application, CommandHandler, ContextTypes

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("pump-arena-bot")

BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN", "")
WEBAPP_URL = os.getenv("PUMP_ARENA_WEBAPP_URL", os.getenv("FRONTEND_URL", ""))


def webapp_keyboard() -> InlineKeyboardMarkup:
    if not WEBAPP_URL:
        return InlineKeyboardMarkup([[InlineKeyboardButton("⚠️ WebApp URL не задан", callback_data="no_webapp_url")]])

    return InlineKeyboardMarkup(
        [[InlineKeyboardButton("🎮 Играть в Pump Arena", web_app=WebAppInfo(url=WEBAPP_URL))]]
    )


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    text = (
        "🔥 Добро пожаловать в Pump Arena!\n\n"
        "Crypto PvP арена внутри Telegram.\n"
        "Играй Solo, заходи в 3v3, создавай клан, открывай кейсы, прокачивай VIP и поднимайся в рейтинге.\n\n"
        "Нажми кнопку ниже и заходи в арену."
    )
    await update.message.reply_text(text, reply_markup=webapp_keyboard())


async def play(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text("🎮 Открыть Pump Arena:", reply_markup=webapp_keyboard())


async def profile(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    user = update.effective_user
    text = (
        "👤 Профиль Telegram\n\n"
        f"ID: {user.id}\n"
        f"Username: @{user.username}" if user.username else f"ID: {user.id}\nUsername: не указан"
    )
    await update.message.reply_text(text, reply_markup=webapp_keyboard())


async def clan(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text("🛡 Клан доступен внутри игры.", reply_markup=webapp_keyboard())


async def leaderboard(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text("🏆 Рейтинги доступны внутри Pump Arena.", reply_markup=webapp_keyboard())


async def help_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text(
        "/start — открыть игру\n"
        "/play — играть\n"
        "/profile — профиль\n"
        "/clan — клан\n"
        "/leaderboard — рейтинг\n"
        "/help — помощь",
        reply_markup=webapp_keyboard(),
    )


async def set_menu_button(app: Application) -> None:
    if WEBAPP_URL:
        await app.bot.set_chat_menu_button(
            menu_button=MenuButtonWebApp(
                text="🎮 Play Pump Arena",
                web_app=WebAppInfo(url=WEBAPP_URL),
            )
        )
        logger.info("Menu button configured: %s", WEBAPP_URL)
    else:
        logger.warning("PUMP_ARENA_WEBAPP_URL / FRONTEND_URL is not set; menu button skipped.")


def main() -> None:
    if not BOT_TOKEN:
        raise RuntimeError("TELEGRAM_BOT_TOKEN is not set")

    app = Application.builder().token(BOT_TOKEN).post_init(set_menu_button).build()

    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("play", play))
    app.add_handler(CommandHandler("profile", profile))
    app.add_handler(CommandHandler("clan", clan))
    app.add_handler(CommandHandler("leaderboard", leaderboard))
    app.add_handler(CommandHandler("help", help_cmd))

    logger.info("Pump Arena bot started")
    app.run_polling(allowed_updates=Update.ALL_TYPES)


if __name__ == "__main__":
    main()
