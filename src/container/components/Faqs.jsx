import React from "react";
import Faq from "react-faq-component";

export default function Faqs() {
   const data = {
      title: "FAQ (How it works)",
      rows: [
         {
            title: "What is a Brock Trade bot?",
            content: `The Brock Trade bot is a new Telegram bot with an incredibly user-friendly and intuitive interface, allowing users to get their hands on upcoming tokens before anyone else. Just imagine buying Brock Trade coins at the lowest prices – that would be pretty cool, wouldn't it?

            The bot offers a variety of features, such as sniping, copy trading, cryptocurrency buying and selling, and cryptocurrency transfers. The bot is designed to be convenient for both beginners and professionals to utilize.`,
         },
         {
            title: "Can I use the bot for free?",
            content:
               "The Brock Trade bot charges a 1% fee for each sniping and copy trading transaction. However, a significant portion of this revenue is distributed through a revenue share program among $BTrade token holders.",
         },
         {
            title: "Where can I buy a token?",
            content: `You can buy Btrade Token on Rockswap using brock native Token on  bitrock blockchain.`},
         {
            title: "What's the utility of the $BTrade token?",
            content: `
            The primary purpose of the $BTrade token is to participate in the revenue share program. The more tokens you hold, the greater your share of profits will be. Additionally, BTrade tokens are required to increase your referral commission rate.`,
         },
      ],
   };

   const styles = {
      padding: "20px",
      bgColor: "#0a0a0a",
      titleTextColor: "#fff",
      rowTitleColor: "#67e8f9",
      rowContentColor: "lightgrey",
      rowContentPaddingTop: "20px",
      rowContentPaddingBottom: "20px",
      rowContentPaddingLeft: "20px",
      rowContentPaddingRight: "20px",
      arrowColor: "#67e8f9",

      rowTitlePaddingTop: "100px",
   };

   const config = {
      animate: true,
      // arrowIcon: "V",
      // tabFocus: true
   };
   return (
      <div className="py-16 px-3 bg-neutral-950" id="faqs">
         <Faq data={data} styles={styles} config={config} />
      </div>
   );
}
