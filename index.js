require("dotenv").config();

// https://github.com/yagop/node-telegram-bot-api
const TelegramBot = require("node-telegram-bot-api");

// Telegram token received from @BotFather
const token = process.env.TELEGRAM_BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/start"
bot.onText(/\/start/, (msg) => {
  // 'msg' is the received Message from Telegram

  const chatId = msg.chat.id;

  const text = `
    🚨 *Welcome to Moontography\\!* 🚨
    \n🌎 Visit our [Website](https://moontography.com)\\!
    \n📱 Check out our [Platform](https://app.moontography.com)\\!
    \n📚 Follow our [Blog](https://blog.moontography.com)\\!
    \n📣 Join our [Announcements Channel](https://t.me/moontographyann)\\!
    \n View /charts
    \n View /contracts
  `;

  // send back info text to the chat
  bot.sendMessage(chatId, text, { parse_mode: "MarkdownV2" });
});

// Matches "/chart(s)"
bot.onText(/\/chart/, (msg) => {
  // 'msg' is the received Message from Telegram

  const chatId = msg.chat.id;

  const charts = `
    *MTGY on BSC*:  [DEXTools](https://www.dextools.io/app/pancakeswap/pair-explorer/0xaabafd64feb2ec235b209a95d4dc9b08e225379c)
    \n*MTGY on ETH*:  [DEXTools](https://www.dextools.io/app/uniswap/pair-explorer/0x23273b9cbcdca2210135a1b00f93b48c045fa757)
    \n*MTGY on KCC*:  [PooCoin](https://kcc.poocoin.app/tokens/0xee00ef5a7ec4fdbd04eee39d60fe11c0ded65e73)
  `;

  // send back MTGY chart links to the chat
  bot.sendMessage(chatId, charts, { parse_mode: "MarkdownV2" });
});

// Matches "/contract(s)"
bot.onText(/\/contract/, (msg) => {
  // 'msg' is the received Message from Telegram

  const chatId = msg.chat.id;

  const contracts = `
    *MTGY on BSC*:  [BscSan](https://bscscan.com/token/0x025c9f1146d4d94f8f369b9d98104300a3c8ca23)
    \n*MTGY on ETH*:  [EtherScan](https://etherscan.io/token/0x025c9f1146d4d94F8F369B9d98104300A3c8ca23)
    \n*MTGY on KCC*:  [KccScan](https://explorer.kcc.io/en/address/0xee00ef5a7ec4fdbd04eee39d60fe11c0ded65e73)
    \n*MTGY on POLYGON*:  [PolygonScan](https://polygonscan.com/token/0x04113df9713e857ff25c8d46295637ef4cba7263)
  `;

  // send back MTGY contract links to the chat
  bot.sendMessage(chatId, contracts, { parse_mode: "MarkdownV2" });
});

// Listen for polling errors and log
bot.on("polling_error", (error) => {
  console.log(error); // => 'EFATAL'
});
