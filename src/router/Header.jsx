import { useState } from "react";
import headerLogo from "./../images/logo.png";
import phoneIcon from "./../images/navigation_phone.svg";
import img31 from "./../images/black-arrow.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full shadow-xl sticky top-0 z-50 py-[15px] bg-white/90 rounded-br-lg rounded-bl-lg ">
      <div className="w-[90%] mx-auto flex flex-col min-[731px]:flex-row min-[731px]:justify-between min-[731px]:items-center gap-4">
        <Link to="/">
          <div className="flex cursor-pointer items-center justify-center gap-[15px]">
            <img src={headerLogo} alt="logo" className="w-[70px] h-[70px]" />
            <h1 className="text-[32px] font-[500]">Merkez Çaphana</h1>
          </div>
        </Link>
        <div className="flex items-center gap-[20px] text-[20px] font-[500]">
          <div className="flex items-center gap-[13px]">
            <img
              src={phoneIcon}
              alt=""
              srcset=""
              className="w-[25px] h-[25px]"
            />
            <p className="">+99363030303</p>
          </div>
          <div className="relative">
            {/* DESKTOP (931px-den uly) */}
            <div className="hidden min-[931px]:flex gap-6">
              <Link to="/aboutUs">
                <h1 className="underline cursor-pointer">Biz barada</h1>
              </Link>
              <Link to="/hawarlasmak">
                <h1 className="underline cursor-pointer">
                  Biz bilen habarlaşmak
                </h1>
              </Link>
            </div>

            {/* MOBILE (931px-den kiçi) */}
            <div className="block min-[931px]:hidden">
              <div
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <h1 className="underline">Biz barada</h1>
                <img
                  src={img31}
                  alt=""
                  className={`w-4 h-4 transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </div>

              {open && (
                <div className="absolute mt-3 flex flex-col gap-2 bg-white p-4 shadow-lg rounded-md left-0">
                  <Link to="/hawarlasmak">
                    <h1 className="underline cursor-pointer">
                      Biz bilen habarlaşmak
                    </h1>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
