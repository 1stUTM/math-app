from aiogram import Bot, Dispatcher, types
from aiogram.filters import Command
import asyncio

# Замени на свой токен от @BotFather
BOT_TOKEN = "8488962226:AAFSAy3pTAoNItb7ZvF732FWg_YnPhKW-xo"

# URL от GitHub Pages
WEB_APP_URL = "https://1stUTM.github.io/math-app/"

bot = Bot(token=BOT_TOKEN)
dp = Dispatcher()

@dp.message(Command("start"))
async def start(message: types.Message):
    keyboard = types.InlineKeyboardMarkup(inline_keyboard=[
        [types.InlineKeyboardButton(
            text="📐 Открыть калькулятор",
            web_app=types.WebAppInfo(url=WEB_APP_URL)
        )]
    ])
    
    await message.answer(
        "👋 Привет! Я — математический калькулятор.\n\n"
        "📐 Геометрия - площади, объёмы\n"
        "📊 Алгебра - уравнения, степени\n"
        "📈 Тригонометрия - sin, cos, tan\n"
        "🧮 Калькулятор - любые выражения\n\n"
        "Нажми на кнопку ниже:",
        reply_markup=keyboard
    )

async def main():
    print("✅ Бот запущен!")
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())
