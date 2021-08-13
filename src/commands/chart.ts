import Bot from "node-telegram-bot-api";

export default function Chart(bot: Bot) {
  return {
    command: /\/chart/,
    async handler(msg: Bot.Message) {
      // 'msg' is the received Message from Telegram

      const chatId = msg.chat.id;

      const charts = `
*MTGY on BSC*: [https://www\\.dextools\\.io/app/pancakeswap/pair\\-explorer/0xaabafd64feb2ec235b209a95d4dc9b08e225379c](https://www.dextools.io/app/pancakeswap/pair-explorer/0xaabafd64feb2ec235b209a95d4dc9b08e225379c)
*MTGY on ETH*: [https://www\\.dextools\\.io/app/uniswap/pair\\-explorer/0x23273b9cbcdca2210135a1b00f93b48c045fa757](https://www.dextools.io/app/uniswap/pair-explorer/0x23273b9cbcdca2210135a1b00f93b48c045fa757)
*MTGY on KCC*: [https://kcc\\.poocoin\\.app/tokens/0xee00ef5a7ec4fdbd04eee39d60fe11c0ded65e73](https://kcc.poocoin.app/tokens/0xee00ef5a7ec4fdbd04eee39d60fe11c0ded65e73)
  `;

      // send back MTGY chart links to the chat
      bot.sendMessage(chatId, charts, { parse_mode: "MarkdownV2" });
    },
  };
}
