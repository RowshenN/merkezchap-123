import { useContext, useState } from "react";
import headerLogo from "./../images/logo.png";
import phoneIcon from "./../images/navigation_phone.svg";
import img31 from "./../images/black-arrow.svg";
import globe from "./../images/globe.svg";
import { Link } from "react-router-dom";
import { SebedimContext } from "../context/Context";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { dil, ChangeDil } = useContext(SebedimContext);

  const [lang, setLang] = useState(false);

  return (
    <div className="w-full shadow-lg sticky top-0 z-[100] py-[15px] bg-white rounded-br-lg rounded-bl-lg ">
      <div className="w-[90%] mx-auto flex flex-col min-[731px]:flex-row min-[731px]:justify-between min-[731px]:items-center gap-4">
        <div className="flex items-center justify-between ">
          <Link to="/">
            <div className="flex cursor-pointer items-center justify-start gap-[15px]">
              <img
                src={headerLogo}
                alt="logo"
                className="xs:w-[50px] md:w-[70px] xs:h-[50px] md:h-[70px]"
              />
              <h1 className="xs:text-[25px] md:text-[32px] font-[500]">
                {dil === "tm"
                  ? "Merkez Hojalyk Jemgyýeti"
                  : dil === "ru"
                    ? "Хозяйственное общество Merkez"
                    : "Merkez Econimic Society"}
              </h1>
            </div>
          </Link>

          <div
            onClick={() => setLang(!lang)}
            className=" relative cursor-pointe md:hidden xs:flex py-[10px] px-5 gap-2 rounded-[29px] cursor-pointer items-center justify-center"
          >
            <img src={globe} alt="globe" />
            <p>{dil === "tm" ? "TM" : dil === "ru" ? "RU" : "EN"} </p>

            <div
              onMouseLeave={() => setLang(false)}
              className={
                (lang === true ? "flex " : " hidden ") +
                "absolute top-11 flex flex-col py-1 items-center justify-end gap-2 rounded-[20px] w-fit px-8 bg-[#F9F9F9] z-50 "
              }
            >
              <div onClick={() => ChangeDil("tm")} className="hover:text-black">
                TM
              </div>
              <div onClick={() => ChangeDil("ru")} className="hover:text-black">
                RU
              </div>
              <div onClick={() => ChangeDil("en")} className="hover:text-black">
                EN
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between px-4 items-center gap-[20px] font-[500]">
          <div className="flex items-center xs:gap-2 md:gap-[13px]">
            <img
              src={phoneIcon}
              alt=""
              srcset=""
              className="xs:w-[20px] md:w-[25px] xs:h-[20px] md:h-[25px]"
            />
            <div className="flex flex-col items-baseline gap-1 ">
              <p className="md:text-[19px] xs:text-[17px] ">+99361755535</p>
              <p className="md:text-[19px] xs:text-[17px] ">+99312922062</p>
            </div>
          </div>
          <div className="relative">
            {/* DESKTOP (931px-den uly) */}
            <div className="hidden min-[931px]:flex gap-6">
              <Link to="/about">
                <h1 className="underline text-[20px] cursor-pointer">
                  {dil === "tm"
                    ? "Biz barada"
                    : dil === "ru"
                      ? "О нас"
                      : "About us"}
                </h1>
              </Link>
              <Link to="/contact">
                <h1 className="underline text-[20px] cursor-pointer">
                  {dil === "tm"
                    ? "Biz bilen habarlaşmak"
                    : dil === "ru"
                      ? "Свяжитесь с нами"
                      : "Contact us"}
                </h1>
              </Link>
              <div
                onClick={() => setLang(!lang)}
                className=" relative cursor-pointer py-[10px] px-5 gap-2 rounded-[29px] flex items-center justify-center"
              >
                <img src={globe} alt="globe" />
                <p>{dil === "tm" ? "TM" : dil === "ru" ? "RU" : "EN"} </p>

                <div
                  onMouseLeave={() => setLang(false)}
                  className={
                    (lang === true ? "flex " : " hidden ") +
                    "absolute top-11 flex flex-col py-1 items-center justify-end gap-2 rounded-[20px] w-fit px-8 bg-[#F9F9F9] z-50 "
                  }
                >
                  <div
                    onClick={() => ChangeDil("tm")}
                    className="hover:text-black"
                  >
                    TM
                  </div>
                  <div
                    onClick={() => ChangeDil("ru")}
                    className="hover:text-black"
                  >
                    RU
                  </div>
                  <div
                    onClick={() => ChangeDil("en")}
                    className="hover:text-black"
                  >
                    EN
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE (931px-den kiçi) */}
            <div className="flex items-center justify-center gap-2 ">
              <div className="block min-[931px]:hidden">
                <div
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Link to="/about">
                    <h1
                      onClick={(e) => e.stopPropagation()}
                      className="underline text-[17px]"
                    >
                      {dil === "tm"
                        ? "Biz barada"
                        : dil === "ru"
                          ? "О нас"
                          : "About us"}
                    </h1>
                  </Link>

                  <img
                    src={img31}
                    alt=""
                    className={`w-4 h-4 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {open && (
                  <div className="absolute mt-3 flex flex-col gap-2 bg-white p-3 shadow-lg rounded-md left-0">
                    <Link to="/contact">
                      <h1 className="underline text-[17px] cursor-pointer">
                        {dil === "tm"
                          ? "Biz bilen habarlaşmak"
                          : dil === "ru"
                            ? "Свяжитесь с нами"
                            : "Contact us"}
                      </h1>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
