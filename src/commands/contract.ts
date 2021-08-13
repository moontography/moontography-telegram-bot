import Bot from "node-telegram-bot-api";

export default function Chart(bot: Bot) {
  return {
    command: /\/contract/,
    async handler(msg: Bot.Message) {
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
    },
  };
}
