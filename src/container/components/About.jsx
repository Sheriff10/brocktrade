import React from "react";

export default function About() {
   return (
      <div className="about py-32" id="about">
         <div className="container">
            <div className="text-wrap text-neutral-300 bg-black px-4 py-32 bg-opacity-50 rounded-xl">
               <div className="heading mb-16">
                  <span className="text-4xl md:text-6xl font-bold text-white">
                     About
                     <span className="font-bold">
                        {" "}
                        Brock<span className="text-cyan-300">Trade</span>
                     </span>
                  </span>
               </div>
               Introducing BrockTrade, your premier Telegram (TG) sniper bot
               designed for efficient and swift contract trading on the
               blockchain platform called Brock. With cutting-edge technology
               and advanced algorithms, BrockTrade automates the process of
               purchasing and scanning contracts, ensuring timely and precise
               execution of trades. This sniper bot is your trusted companion in
               navigating the dynamic world of blockchain, providing users with
               a seamless and user-friendly experience. Stay ahead of the game
               with BrockTrade's real-time monitoring and instant response
               capabilities, making it the go-to solution for those seeking a
               competitive edge in the Brock blockchain market. Elevate your
               trading experience with BrockTrade, where precision meets
               performance in the exciting realm of decentralized finance.
            </div>
         </div>
      </div>
   );
}
