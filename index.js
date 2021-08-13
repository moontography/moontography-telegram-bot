require("dotenv").config();

// https://github.com/yagop/node-telegram-bot-api
const TelegramBot = require("node-telegram-bot-api");

// Telegram token received from @BotFather
const token = process.env.TELEGRAM_BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/mtgy"
bot.onText(/\/mtgy/, (msg) => {
  // 'msg' is the received Message from Telegram

  const chatId = msg.chat.id;

  const text = `
🚨 *Welcome to Moontography\\!* 🚨
\n🌎 Visit our Website: [https://moontography\\.com](https://moontography.com)
📱 Check out our Platform: [https://app\\.moontography\\.com](https://app.moontography.com)
📚 Follow our Blog: [https://blog\\.moontography\\.com](https://blog.moontography.com)
📣 Join our Announcements Channel: [https://t\\.me/moontographyann](https://t.me/moontographyann)
\n/chart
/contract
/mtgy
  `;

  // send back info text to the chat
  bot.sendMessage(chatId, text, { parse_mode: "MarkdownV2" });
});

// Matches "/chart(s)"
bot.onText(/\/chart/, (msg) => {
  // 'msg' is the received Message from Telegram

  const chatId = msg.chat.id;

  const charts = `
*MTGY on BSC*: [https://www\\.dextools\\.io/app/pancakeswap/pair\\-explorer/0xaabafd64feb2ec235b209a95d4dc9b08e225379c](https://www.dextools.io/app/pancakeswap/pair-explorer/0xaabafd64feb2ec235b209a95d4dc9b08e225379c)
*MTGY on ETH*: [https://www\\.dextools\\.io/app/uniswap/pair\\-explorer/0x23273b9cbcdca2210135a1b00f93b48c045fa757](https://www.dextools.io/app/uniswap/pair-explorer/0x23273b9cbcdca2210135a1b00f93b48c045fa757)
*MTGY on KCC*: [https://kcc\\.poocoin\\.app/tokens/0xee00ef5a7ec4fdbd04eee39d60fe11c0ded65e73](https://kcc.poocoin.app/tokens/0xee00ef5a7ec4fdbd04eee39d60fe11c0ded65e73)
  `;

  // send back MTGY chart links to the chat
  bot.sendMessage(chatId, charts, { parse_mode: "MarkdownV2" });
});

// Matches "/contract(s)"
bot.onText(/\/contract/, (msg) => {
  // 'msg' is the received Message from Telegram

  const chatId = msg.chat.id;

  const contracts = `
*MTGY on BSC*: [https://bscscan\\.com/token/0x025c9f1146d4d94f8f369b9d98104300a3c8ca23](https://bscscan.com/token/0x025c9f1146d4d94f8f369b9d98104300a3c8ca23)
*MTGY on ETH*: [https://etherscan\\.io/token/0x025c9f1146d4d94F8F369B9d98104300A3c8ca23](https://etherscan.io/token/0x025c9f1146d4d94F8F369B9d98104300A3c8ca23)
*MTGY on KCC*: [https://explorer\\.kcc\\.io/en/address/0xee00ef5a7ec4fdbd04eee39d60fe11c0ded65e73](https://explorer.kcc.io/en/address/0xee00ef5a7ec4fdbd04eee39d60fe11c0ded65e73)
*MTGY on POLYGON*: [https://polygonscan\\.com/token/0x04113df9713e857ff25c8d46295637ef4cba7263](https://polygonscan.com/token/0x04113df9713e857ff25c8d46295637ef4cba7263)
  `;

  // send back MTGY contract links to the chat
  bot.sendMessage(chatId, contracts, { parse_mode: "MarkdownV2" });
});

// Listen for polling errors and log
bot.on("polling_error", (error) => {
  console.log(error); // => 'EFATAL'
});
