import Bot from "node-telegram-bot-api";
import BigNumber from "bignumber.js";
import axios from "axios";

export default function Chart(bot: Bot) {
  return {
    command: /\/price/,
    async handler(msg: Bot.Message) {
      const chatId = msg.chat.id;
      const {
        data: { price },
      } = await axios.get(`https://bsc.api.0x.org/swap/v1/quote`, {
        params: {
          buyToken: "BUSD",
          sellToken: "0x025c9f1146d4d94F8F369B9d98104300A3c8ca23",
          sellAmount: new BigNumber(10).pow(18).toString(),
          excludedSources:
            "BakerySwap,Belt,DODO,DODO_V2,Ellipsis,Mooniswap,MultiHop,Nerve,SushiSwap,Smoothy,ApeSwap,CafeSwap,CheeseSwap,JulSwap,LiquidityProvider",
          slippagePercentage: 0,
          gasPrice: 0,
        },
      });
      bot.sendMessage(
        chatId,
        `$MTGY Price: *$${price.replace(/\./g, "\\.")}*`,
        {
          parse_mode: "MarkdownV2",
        }
      );
    },
  };
}
