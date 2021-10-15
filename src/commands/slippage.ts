import Bot from "node-telegram-bot-api";

export default function Chart(bot: Bot) {
  return {
    command: /\/slippage/,
    async handler(msg: Bot.Message) {
      const chatId = msg.chat.id;
      bot.sendMessage(chatId, `Buy/Sell Slippage: *<\=0.5%*`, {
        parse_mode: "MarkdownV2",
      });
    },
  };
}
