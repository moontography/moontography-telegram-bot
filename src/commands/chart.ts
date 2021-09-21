import Bot from "node-telegram-bot-api";

export default function Chart(bot: Bot) {
  return {
    command: /\/chart/,
    async handler(msg: Bot.Message) {
      // 'msg' is the received Message from Telegram

      const chatId = msg.chat.id;

      const charts = `
*MTGY on BSC*: [https://www\\.dextools\\.io/app/pancakeswap/pair\\-explorer/0xaabafd64feb2ec235b209a95d4dc9b08e225379c](https://www.dextools.io/app/pancakeswap/pair-explorer/0xaabafd64feb2ec235b209a95d4dc9b08e225379c)
*MTGY on ETH*: [https://www\\.dextools\\.io/app/ether/pair\\-explorer/0xc4b5b6f221d230be2f45baf5429b64803e0ab13d](https://www.dextools.io/app/ether/pair-explorer/0xc4b5b6f221d230be2f45baf5429b64803e0ab13d)
*MTGY on KCC*: [https://kcc\\.poocoin\\.app/tokens/0xee00ef5a7ec4fdbd04eee39d60fe11c0ded65e73](https://kcc.poocoin.app/tokens/0xee00ef5a7ec4fdbd04eee39d60fe11c0ded65e73)
  `;

      // send back MTGY chart links to the chat
      bot.sendMessage(chatId, charts, { parse_mode: "MarkdownV2" });
    },
  };
}
