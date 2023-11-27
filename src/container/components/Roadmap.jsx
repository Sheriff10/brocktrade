import React from "react";
import { FaCircle } from "react-icons/fa";

export default function Roadmap() {
   const dum = [1, 2, 3, 4];
   const cardFunc = (title, text) => {
      return { title, text };
   };
   const cardArr = [
      cardFunc(
         "Snipe New Tokens with Tips/Bribes",
         "Stay ahead of the curve with our cutting-edge sniper bot, empowering you to snipe new tokens effortlessly. Maximize your gains by accessing exclusive tips and bribes"
      ),
      cardFunc(
         "Copy Trade Profitable Snipers",
         "Amplify your success by seamlessly copying trades from the most profitable snipers in the market."
      ),
      cardFunc(
         "Easy-to-Use Interface",
         "Simplify your trading journey with an easy-to-use interface designed for both beginners and seasoned traders."
      ),
      cardFunc(
         "Honeypot Protection",
         "Trade with confidence knowing that our bot comes equipped with honeypot protection. "
      ),
      cardFunc(
         "Regular Token Swaps",
         "Keep your portfolio dynamic with regular token swaps facilitated by our bot. Stay on top of market trends and opportunities, ensuring your assets are always strategically positioned for maximum returns"
      ),
      cardFunc(
         "Advanced TP/SL",
         "Take control of your trades with advanced take-profit (TP) and stop-loss (SL) features. Our sniper bot empowers you to set precise parameters,"
      ),
      cardFunc(
         "Anti-MEV Protection",
         "Guard against the menace of front-running with our bot's advanced anti-MEV protection, ensuring a fair and transparent trading environment."
      ),
   ];
   return (
      <div className="roadmap" id="choose">
         <div className="  py-32 bg-neutral-950">
            <div className="container">
               <div className="heading mb-16">
                  <span className="text-4xl md:text-6xl text-white font-bold">
                     <span className="text-cyan-300">BrockTrade - </span> Why
                     choose us.
                  </span>
               </div>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cardArr.map((i, index) => (
                     <div
                        className="wrap backdrop-blur-xl bg-neutral-900  p-4 rounded-xl"
                        key={index}
                     >
                        <div className="heading mb-3 flex gap-3 items-center">
                           <span className=" bg-cyan-300 bg-opacity-30 text-cyan-300 rounded-full p-2">
                              <FaCircle />
                           </span>
                           <span className="text-xl font-bold text-cyan-300">
                              {i.title}
                           </span>
                        </div>
                        <span className="text-gray-400">
                           {i.text}
                        </span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
