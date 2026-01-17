import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import Hyzmatlar from "../pages/Hyzmatlar";
import AboutUs from "../pages/AboutUs";
import BizbilenHawarlasmak from "../pages/BizbilenHawarlasmak";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="w-[90%] mx-auto max-w-[1440px] ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hyzmatlar" element={<Hyzmatlar />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/hawarlasmak" element={<BizbilenHawarlasmak />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
