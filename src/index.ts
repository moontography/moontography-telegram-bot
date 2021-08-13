import assert from "assert";
import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";
import Commands from "./commands";

dotenv.config();

// Telegram token received from @BotFather
const token = process.env.TELEGRAM_BOT_TOKEN;
assert(token, "TELEGRAM_BOT_TOKEN is a required environment variable");

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

Commands.forEach((Comm) => {
  const { command, handler } = Comm(bot);
  bot.onText(command, handler);
});

// Listen for polling errors and log
bot.on("polling_error", (error) => {
  console.error(`polling error`, error); // => 'EFATAL'
});
