import logo from "./logo.svg";
import "./App.css";
import Home from "./container/Home";
import { Route, Routes } from "react-router-dom";
import Stake from "./container/Stake/Stake";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route index element={<Home />} />
            <Route path="/stake" element={<Stake />} />
         </Routes>
      </div>
   );
}

export default App;
