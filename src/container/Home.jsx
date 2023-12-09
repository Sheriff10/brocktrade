import React from "react";
import About from "./components/About";
import Bot from "./components/Bot";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Roadmap from "./components/Roadmap";
import Stake from "./Stake/Stake";

export default function Home() {
   return (
      <>
         <Header />
         <Intro />
         <Roadmap />
         <Bot />
         <Faqs />
         <Footer />
      </>
   );
}
