import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import img9 from "../images/categories/bussiness_card.png";
import img10 from "../images/categories/cakylyklar.png";
import img11 from "../images/categories/esikler.png";
import img12 from "../images/categories/flayerler.png";
import img13 from "../images/categories/stikerler.png";
import img14 from "../images/CaretLeft.svg";
import img15 from "../images/CaretRight.svg";
import { SebedimContext } from "../context/Context";

const Categories = ({ center = false }) => {
  const { dil } = useContext(SebedimContext);
  return (
    <div id="categories" data-aos="zoom-in" className="mb-[70px]">
      <h1
        className={`font-[500] w-full ${center ? "text-center" : "text-left"} xs:text-[27px] md:text-[36px] mb-[10px]`}
      >
        {dil === "tm" ? "Kategoriýalar" : dil === "ru" ? "Категории" : "Categories"}
      </h1>

      <div className="relative">
        {/* SWIPER */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={28}
          navigation={{
            prevEl: ".categories-prev",
            nextEl: ".categories-next",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <div className="py-[12px]">
              <div className="rounded-[30px] shadow-lg flex flex-col items-center justify-center">
                <div className="w-[150px] h-[150px] mb-[20px]">
                  <img src={img9} className="w-full h-full" />
                </div>
                <h4 className="font-[400] text-[16px] mb-[30px]">
                  {dil === "tm" ? "Bussiness kartlar" : dil === "ru" ? "Визитные карточки" : "Business cards"}
                </h4>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="py-[12px]">
              <div className="rounded-[30px] shadow-lg flex flex-col items-center justify-center">
                <div className="w-[150px] h-[150px] mb-[20px]">
                  <img src={img13} className="w-full h-full" />
                </div>
                <h4 className="font-[400] text-[16px] mb-[30px]">
                  {dil === "tm" ? "Stikerler & Etiketkalar" : dil === "ru" ? "Стикеры и этикетки" : "Stickers & Labels"}
                </h4>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="py-[12px]">
              <div className="rounded-[30px] shadow-lg flex flex-col items-center justify-center">
                <div className="w-[150px] h-[150px] mb-[20px]">
                  <img src={img11} className="w-full h-full" />
                </div>
                <h4 className="font-[400] text-[16px] mb-[30px]">
                  {dil === "tm" ? "Eşikler & Torbalar" : dil === "ru" ? "Упаковка и пакеты" : "Packaging & Bags"}
                </h4>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="py-[12px]">
              <div className="rounded-[30px] shadow-lg flex flex-col items-center justify-center">
                <div className="w-[150px] h-[150px] mb-[20px]">
                  <img src={img12} className="w-full h-full" />
                </div>
                <h4 className="font-[400] text-[16px] mb-[30px]">
                  {dil === "tm" ? "Flaýerler & Posterler" : dil === "ru" ? "Флаеры и постеры" : "Flyers & Posters"}
                </h4>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="py-[12px]">
              <div className="rounded-[30px] shadow-lg flex flex-col items-center justify-center">
                <div className="w-[150px] h-[150px] mb-[20px]">
                  <img src={img10} className="w-full h-full" />
                </div>
                <h4 className="font-[400] text-[16px] mb-[30px]">
                  {dil === "tm" ? "Çakylyklar & Hormat hatlary" : dil === "ru" ? "Приглашения и благодарственные письма" : "Invitations & Certificates of Appreciation"}
                </h4>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="py-[12px]">
              <div className="rounded-[30px] shadow-lg flex flex-col items-center justify-center">
                <div className="w-[150px] h-[150px] mb-[20px]">
                  <img src={img10} className="w-full h-full" />
                </div>
                <h4 className="font-[400] text-[16px] mb-[30px]">
                  Çakylyklar & Hormat hatlary
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-[12px]">
              <div className="rounded-[30px] shadow-lg flex flex-col items-center justify-center">
                <div className="w-[150px] h-[150px] mb-[20px]">
                  <img src={img10} className="w-full h-full" />
                </div>
                <h4 className="font-[400] text-[16px] mb-[30px]">
                  Çakylyklar & Hormat hatlary
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-[12px]">
              <div className="rounded-[30px] shadow-lg flex flex-col items-center justify-center">
                <div className="w-[150px] h-[150px] mb-[20px]">
                  <img src={img10} className="w-full h-full" />
                </div>
                <h4 className="font-[400] text-[16px] mb-[30px]">
                  Çakylyklar & Hormat hatlary
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-[12px]">
              <div className="rounded-[30px] shadow-lg flex flex-col items-center justify-center">
                <div className="w-[150px] h-[150px] mb-[20px]">
                  <img src={img10} className="w-full h-full" />
                </div>
                <h4 className="font-[400] text-[16px] mb-[30px]">
                  Çakylyklar & Hormat hatlary
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-[12px]">
              <div className="rounded-[30px] shadow-lg flex flex-col items-center justify-center">
                <div className="w-[150px] h-[150px] mb-[20px]">
                  <img src={img10} className="w-full h-full" />
                </div>
                <h4 className="font-[400] text-[16px] mb-[30px]">
                  Çakylyklar & Hormat hatlary
                </h4>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>

        {/* CUSTOM ARROWS */}
        <div className="flex justify-between absolute top-[35%] w-full pointer-events-none">
          <button className="categories-prev z-[50] pointer-events-auto p-[16px] rounded-lg border border-black/10 bg-white -left-[15px] relative">
            <img src={img14} className="w-[20px]" />
          </button>

          <button className="categories-next z-[50] pointer-events-auto p-[16px] rounded-lg border border-black/10 bg-white -right-[15px] relative">
            <img src={img15} className="w-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
