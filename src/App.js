import React, { useEffect } from "react";
import { StripeProvider } from "@stripe/react-stripe-js";
import AOS from "aos";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Subscriptions from "./Components/Subscriptions/Subscriptions";
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
{/*       <StripeProvider apiKey=""> */}
        <Home />
        <About />
        <Subscriptions />
        <Footer />
{/*       </StripeProvider> */}
    </div>
  );
}
