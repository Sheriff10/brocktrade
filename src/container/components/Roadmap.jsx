import React from "react";
import { FaCircle } from "react-icons/fa";

export default function Roadmap() {
   const dum = [1, 2, 3, 4];
   const cardFunc = (title, text) => {
      return { title, text };
   };
   const cardArr = [
      cardFunc(
         "Safety Comes First",
         "BrockTrade that every user feels safe. All wallet details are fully encrypted and code is audited."
      ),
      cardFunc(
         "Easy Deposit & Withdrawals",
         "Easily Access and Withdraw your funds with zero fees."
      ),
      cardFunc(
         "Low Charges",
         "Swift gives back to its community by offering very low charges. Swift charges 1% of every transaction."
      ),
      cardFunc(
         "Affiliate Program",
         "Affiliate program allows influencers and users to make money off Swift and turn our application into their own income model."
      ),
      cardFunc(
         "Fast Transactions",
         "Utilizing the fastest nodes on the blockchain, Swift offers maximum speed for it's users."
      ),
      cardFunc(
         "24/7 Support",
         "When using Swift, we offer 24/7 support for Free and Pro Users."
      ),
   ];
   return (
      <div className="roadmap">
         <div className="  py-32 bg-neutral-950">
            <div className="container">
               <div className="heading mb-16">
                  <span className="text-4xl md:text-6xl text-white font-bold">
                     <span className="text-cyan-300">BrockTrade - </span> Why
                     choose us.
                  </span>
               </div>
               <div className="grid lg:grid-cols-3 gap-4">
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
