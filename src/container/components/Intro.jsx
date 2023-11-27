import React from "react";
import { FaRocket } from "react-icons/fa";
import About from "./About";
import Banner from "./Banner";

export default function Intro() {
   const navi = (link) => {
      window.location.href = link;
   };
   return (
      <div className="intro ">
         <div className="backdrop-blur-lg bg-black bg-opacity-10  py-32">
            {/* Hero */}
            <div className="container ">
               <div className="wrap">
                  <div className="text-wrap leading-10 mb-5">
                     <span className="text-3xl md:text-6xl font-bold text-white ">
                        Ultimate Sniping Bot
                     </span>{" "}
                     <br />
                     <span className="text-3xl md:text-6xl font-bold text-white ">
                        Brock. <span className="text-cyan-300">Trade.</span>{" "}
                        <br /> Earn.
                     </span>
                     <br />
                  </div>
                  <div className="text-wrap">
                     <span className="text-lg text-neutral-400">
                        Ultimate Sniping Bot: Brock. Trade. Earn. Seize
                        Opportunities, <br /> Maximize Profits!
                     </span>
                  </div>
               </div>
               <div className="btn-wrap mt-5 flex gap-3">
                  <button
                     className="btn bg-white md:w-[40%] flex gap-3  items-center justify-center text-neutral-950 p-3 rounded-pill font-medium"
                     onClick={() => navi("https://t.me/Brocktradebott_bot")}
                  >
                     <FaRocket /> Launch Bot
                  </button>
                  <button
                     className="btn border-white text-white p-3 rounded-pill font-medium"
                     onClick={() =>
                        navi(
                           "https://rock-swap.io/#/swap?outputCurrency=0x7358244e8905c083a479dc353c7da52e473d53b6"
                        )
                     }
                  >
                     Buy $BTrade
                  </button>
               </div>
            </div>
         </div>
         <div className="wrap">
            <Banner />
         </div>
         {/* About */}
         <div className="mt-16">
            <About />
         </div>
      </div>
   );
}
