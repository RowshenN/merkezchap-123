import { useEffect } from "react";
import "./App.css";
import SebedimContextProvider from "./context/Context";
import Router from "./router/Router";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  Aos.init({
    duration: 750, // animation duration (ms)
    delay: 200,
    once: false, // animation happens only once
    easing: "ease-in-out",
  });
  return (
    <div className="">
      <SebedimContextProvider>
        <Router />
      </SebedimContextProvider>
    </div>
  );
}

export default App;
