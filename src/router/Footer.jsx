import React from "react";
import tiktokIcon from "./../images/tiktok.svg";
import instagramIcon from "./../images/instagaram.svg";
import phoneIcon from "./../images/Phone-white.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-primary pb-[10px] xs:pt-[30px] md:pt-[40px] ">
      <div className="w-[90%] mx-auto ">
        <h1 className=" md:text-[32px] xs:text-[25px] xs:text-center md:text-left font-[500] text-white mb-[24px]">
          Biz bilen Habarlaş
        </h1>
        <div className="flex  flex-col min-[528px]:flex-row justify-between md:flex-row items-start font-[500] text-[16px] text-white">
          {/* --------------- */}
          <div className="xs:mr-0 md:mr-40 md:mb-0 xs:mb-5 flex flex-col gap-3 md:w-fit xs:w-full items-center justify-center">
            <div className="flex items-center justify-start gap-2 w-full">
              <img
                src={phoneIcon}
                alt=""
                className="xs:w-[20px] md:w-[30px] xs:h-[20px] md:h-[30px]"
              />
              <div className="flex flex-col items-baseline gap-1 ">
                <p className="md:text-[19px] xs:text-[17px] ">+99361755535</p>
                <p className="md:text-[19px] xs:text-[17px] ">+99312922062</p>
              </div>
            </div>

            <div className="flex items-center justify-start gap-2 w-full">
              <img
                src={instagramIcon}
                alt=""
                className="xs:w-[20px] md:w-[30px] xs:h-[20px] md:h-[30px]"
              />
              <h3 className="">merkez_chaphana</h3>
            </div>

            <div className="flex items-center justify-start gap-2 w-full">
              <img
                src={tiktokIcon}
                alt=""
                className="xs:w-[20px] md:w-[30px] xs:h-[20px] md:h-[30px]"
              />
              <h3 className="">merkez_chaphana</h3>
            </div>
          </div>

          {/* ---------------------- */}
          <div className="flex md:gap-0 xs:gap-4 xs:mt-3 md:mt-0 items-start justify-between xs:w-full md:w-[60%]">
            <div className="flex flex-col justify-start items-baseline gap-3 ">
              <Link to="/service">
                <h3 className="">Hyzmatlar</h3>
              </Link>
              <Link to="/about">
                <h3 className=" cursor-pointer">Biz barada</h3>
              </Link>
              <a href="/contact/#fq">
                <h3 className="">Sorag-jogap</h3>
              </a>
            </div>

            <div className="flex flex-col justify-start items-baseline gap-3 ">
              <a href="#categories">
                <h3 className=" cursor-pointer">Kategoriýalar</h3>
              </a>
              <a href="#ourWork">
                <h3 className="">Eden işlerimiz</h3>
              </a>
              {/* <h3 className="">Suratlar</h3> */}
            </div>

            <div className="flex flex-col justify-start items-baseline gap-3 ">
              <h3 className="">Hyzmatdaşlyk</h3>
              {/* <h3 className="">Düzgünnamalar</h3> */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex mt-[140px] items-center justify-center">
        <h1 className="font-[500] text-[16px] text-white te">
          Merkez Hojalyk jemgyyeti
        </h1>
      </div>
    </div>
  );
};

export default Footer;
