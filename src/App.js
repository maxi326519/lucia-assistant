import React, { useEffect } from "react";
import AOS from "aos";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Trust from "./Components/TrustSection/TrustSection";
import Tools from "./Components/ToolsSection/ToolsSection";
import Subscription from "./Components/SubscriptionSection/SubscriptionSection";
import Footer from "./Components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./App.css";

export default function App() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="App">
        <Home />
        <Trust/>
        <About />
        <Tools/>
        <Subscription/>
        <Footer />
    </div>
  );
}