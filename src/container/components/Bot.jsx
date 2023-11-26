import React from "react";

export default function Bot() {
   return (
      <div className="bot bg-neutral-950 py-32">
         <div className="container">
            <div className="heading mb-12">
               <span className="text-4xl md:text-6xl text-white font-bold">
                  <span className="text-cyan-300">Solution</span> Rendering.
               </span>
            </div>
            {/* Wrap 1 */}
            <div className="grid md:grid-cols-2 gap-4 my-16">
               <div className="wrap p-2">
                  <img
                     src="/bot1.png"
                     className="w-[180px] mx-auto"
                     alt="Bot"
                  />
               </div>
               <div className="text-wrap flex items-center ">
                  <div className="wrap border-l bg-neutral-900 py-4 border-cyan-300 px-3">
                     <div className="heading mb-3 flex gap-2 items-center">
                        <span className="p-3 font-bold py-2 bg-cyan-300 rounded-full">
                           1
                        </span>
                        <span className="text-white text-2xl font-bold">
                           Precision Trading
                        </span>
                     </div>
                     <span className="text-gray-300 ">
                        Experience precision in every trade with our advanced
                        sniper bot. Our cutting-edge algorithm ensures accurate
                        market analysis and execution, allowing you to navigate
                        the complexities of trading with confidence. Brock -
                        your ally in achieving precision trading.
                     </span>
                  </div>
               </div>
            </div>

            {/* Wrap 2 */}
            <div className="hidden md:grid md:grid-cols-2 gap-4 my-16">
               <div className="text-wrap flex items-center ">
                  <div className="wrap border-r  border-cyan-300 bg-neutral-900 py-4 px-3">
                     <div className="heading mb-3 flex gap-2 items-center  flex-row-reverse">
                        <span className="p-3 font-bold py-2 bg-cyan-300 rounded-full">
                           2
                        </span>
                        <span className="text-white text-2xl font-bold">
                           {" "}
                           Automated Profit Maximization
                        </span>
                     </div>
                     <div className="text-right">
                        <span className="text-gray-300 ">
                           Unlock the power of automation with Brock, your
                           ultimate trading sniper bot. Seamlessly execute
                           trades, capitalize on market opportunities, and watch
                           your profits soar. Let Brock handle the precision,
                           while you enjoy the rewards of automated profit
                           maximization.
                        </span>
                     </div>
                  </div>
               </div>
               <div className="wrap p-2">
                  <img
                     src="/bot2.png"
                     className="w-[180px] mx-auto"
                     alt="Bot"
                  />
               </div>
            </div>

            <div className="md:hidden grid md:grid-cols-2 gap-4 my-16 ">
               <div className="wrap p-2">
                  <img
                     src="/bot2.png"
                     className="w-[180px] mx-auto"
                     alt="Bot"
                  />
               </div>
               <div className="text-wrap flex items-center ">
                  <div className="wrap border-r  border-cyan-300 bg-neutral-900 py-4 px-3">
                     <div className="heading mb-3 flex gap-2 items-center  flex-row-reverse">
                        <span className="p-3 font-bold py-2 bg-cyan-300 rounded-full">
                           2
                        </span>
                        <span className="text-white text-2xl font-bold">
                           {" "}
                           Automated Profit Maximization
                        </span>
                     </div>
                     <div className="text-right">
                        <span className="text-gray-300 ">
                           Unlock the power of automation with Brock, your
                           ultimate trading sniper bot. Seamlessly execute
                           trades, capitalize on market opportunities, and watch
                           your profits soar. Let Brock handle the precision,
                           while you enjoy the rewards of automated profit
                           maximization.
                        </span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Wrap 3 */}
            <div className="grid md:grid-cols-2 gap-4 my-16">
               <div className="wrap p-2">
                  <img
                     src="/bot3.png"
                     className="w-[180px] mx-auto"
                     alt="Bot"
                  />
               </div>
               <div className="text-wrap flex items-center ">
                  <div className="wrap border-l border-cyan-300 bg-neutral-900 py-4 px-3">
                     <div className="heading mb-3 flex gap-2 items-center">
                        <span className="p-3 font-bold py-2 bg-cyan-300 rounded-full">
                           3
                        </span>
                        <span className="text-white text-2xl font-bold">
                           {" "}
                           Strategic Risk Management
                        </span>
                     </div>
                     <span className="text-gray-300 ">
                        Trade smarter with Brock - the trading sniper bot
                        designed for strategic risk management. Our bot
                        evaluates market conditions, identifies optimal entry
                        and exit points, and executes trades with calculated
                        precision.
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
