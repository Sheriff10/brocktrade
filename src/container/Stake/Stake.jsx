import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Stake() {
   const wrapFunc = (title, text) => {
      return { title, text };
   };
   const wrapArr = [
      wrapFunc("Claimable rewards:", "-- $BTRADE"),
      wrapFunc("Your Staked Tokens:", "-- $BTRADE"),
      wrapFunc("Unlock's on :", "-- $BTRADE"),
   ];
   return (
      <div className="bg-wrap bg-neutral-950">
        <Header />
         <div className="container py-16">
            {/* Staking Detail */}
            <div className="col-lg-6 col-md-8 mb-10 mx-auto">
               <div className="img-wrap flex items-center justify-center">
                  <img src="/brock.png" alt="BrockTrade" />
               </div>
               <div className="heading text-2xl text-white font-bold text-center py-8">
                  <span>Total Stakes: -- $BTRADE</span>
               </div>

               {wrapArr.map((i, index) => (
                  <div className="wrap flex justify-between items-center mb-4 text-gray-300" key={index}>
                     <span className="font-bold text-cyan-300 text-lg">
                        {i.title}
                     </span>
                     <span>{i.text} </span>
                  </div>
               ))}
            </div>

            {/* Staking box */}
            <div className="wrap col-lg-6 col-md-8 mb-10 mx-auto bg-cyan-600 rounded-xl p-4">
               <div className="form-group row mb-16">
                  <div className="col-8">
                     <input
                        type="text"
                        className="form-control "
                        placeholder="Enter Token Amount"
                     />
                  </div>

                  <button className=" col-4 p-2 rounded-lg bg-neutral-900 text-white">
                     Approve
                  </button>
               </div>

               <div className="btn-wrap flex gap-3">
                  <button className="col p-2 rounded-lg bg-neutral-900 text-white">
                     Withdraw Token
                  </button>
                  <button className="col p-2 rounded-lg border-1 border-neutral-900 text-neutral-900">
                     Withdraw Token
                  </button>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
}
