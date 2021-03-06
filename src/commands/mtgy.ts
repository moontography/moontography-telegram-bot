import Bot from "node-telegram-bot-api";

export default function Mtgy(bot: Bot) {
  return {
    command: /\/mtgy/,
    async handler(msg: Bot.Message) {
      // 'msg' is the received Message from Telegram

      const chatId = msg.chat.id;

      const text = `
šØ *Welcome to Moontography\\!* šØ
\nš Visit our Website: [https://moontography\\.com](https://moontography.com)
š± Check out our Platform: [https://app\\.moontography\\.com](https://app.moontography.com)
š Follow our Blog: [https://blog\\.moontography\\.com](https://blog.moontography.com)
š£ Join our Announcements Channel: [https://t\\.me/moontographyann](https://t.me/moontographyann)
\n/chart
/contract
/mtgy
    `;

      // send back info text to the chat
      bot.sendMessage(chatId, text, { parse_mode: "MarkdownV2" });
    },
  };
}
