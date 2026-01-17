import React from "react";
import tiktokIcon from "./../images/tiktok.svg";
import instagramIcon from "./../images/instagaram.svg";
import phoneIcon from "./../images/Phone-white.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-primary pb-[10px] pt-[40px] ">
      <div className="w-[90%] mx-auto flex flex-col min-[605px]:flex-row gap-[40px]">
        <h1 className="text-[32px] font-[500] text-white mb-[24px]">
          Biz bilen Habarlaş
        </h1>
        <div>
          <div className="flex flex-col min-[528px]:flex-row md:flex-row items-start font-[500] text-[16px] text-white">
            <div className="mr-40">
              <div className="flex items-center mb-[24px]">
                <img
                  src={phoneIcon}
                  alt=""
                  className="w-[30px] h-[30px] mr-[13px]"
                />
                <h3 className="">+99363030303</h3>
              </div>
              <div className="flex items-center mb-[24px]">
                <img
                  src={instagramIcon}
                  alt=""
                  className="w-[30px] h-[30px] mr-[13px]"
                />
                <h3 className="">merkez_chaphana</h3>
              </div>
              <div className="flex items-center mb-[24px]">
                <img
                  src={tiktokIcon}
                  alt=""
                  className="w-[30px] h-[30px] mr-[13px]"
                />
                <h3 className="">merkez_chaphana</h3>
              </div>
            </div>
            <div className="flex flex-wrap justify-evenly w-full">
              <div>
                <h3 className="mb-[24px]">Hyzmatlar</h3>
                <Link to="/aboutUs">
                  <h3 className="mb-[24px] cursor-pointer">Biz barada</h3>
                </Link>
                <h3 className="mb-[24px]">Sorag-jogap</h3>
              </div>
              <div>
                <Link to="/hyzmatlar">
                  <h3 className="mb-[24px] cursor-pointer">Kategoriýalar</h3>
                </Link>
                <h3 className="mb-[24px]">Eden işlerimiz</h3>
                <h3 className="mb-[24px]">Suratlar</h3>
              </div>
              <div>
                <h3 className="mb-[24px]">Hyzmatdaşlyk</h3>
                <h3 className="mb-[24px]">Düzgünnamalar</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex mt-[140px] items-center justify-center">
          <h1 className="font-[500] text-[16px] text-white te">
            Merkez Çaphana 2025
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
