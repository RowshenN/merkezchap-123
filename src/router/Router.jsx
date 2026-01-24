import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "../pages/Home";
import Services from "../pages/Services";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import { useEffect } from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <ScrollTop>
        <div className="w-[90%] mx-auto max-w-[1440px] ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </ScrollTop>
    </BrowserRouter>
  );
};

const ScrollTop = (props) => {
  const { children } = props;

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <main className="welcome">{children}</main>;
};

export default Router;
