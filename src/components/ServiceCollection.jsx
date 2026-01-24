import React, { useContext } from "react";
import ServiceCard from "./ServiceCard";

import wizitkalar from "../images/services/wizitkalar.png";
import magnit from "../images/services/magnit.png";
import kalendar_kici from "../images/services/kalendar kici.png";
import kalendar_uly from "../images/services/kalendar uly.png";
import hormat_haty from "../images/services/hormat haty.png";
import blaknot from "../images/services/blaknot.png";
import rucka from "../images/services/rucka.png";
import esiklere_cap from "../images/services/esiklere cap.png";
import gaplar from "../images/services/gaplar.png";
import bannerler from "../images/services/bannerler.png";
import { SebedimContext } from "../context/Context";

const ServiceCollection = () => {
  const { dil } = useContext(SebedimContext);
  const text =
    dil === "tm"
      ? "Çap işleri islendik dizaýnda, ölçegde we islendik materialdaýerine ýetirilýär"
      : dil === "ru"
        ? "Печатные работы выполняются в любом дизайне, размере и на любых материалах."
        : "Printing works are carried out in any design, size, and on any material.";

  return (
    <div
      data-aos="zoom-out"
      className="flex w-full flex-col items-center justify-center  mb-[70px]"
    >
      <h1 className="font-[500] text-[36px] mb-[24px]">
        {dil === "tm" ? "Hyzmatlar" : dil === "ru" ? "Услуги" : "Services"}
      </h1>
      <div className="w-full grid xs:grid-cols-2 md:grid-cols-almaz xs:gap-2 md:gap-5">
        <ServiceCard
          image={wizitkalar}
          header={
            dil === "tm"
              ? "Wizitkalar"
              : dil === "ru"
                ? "Визитки"
                : "Business cards"
          }
          text={text}
        />
        <ServiceCard
          image={magnit}
          header={dil === "tm" ? "Magnit" : dil === "ru" ? "Магнит" : "Magnet"}
          text={text}
        />
        <ServiceCard
          image={kalendar_kici}
          header={
            dil === "tm"
              ? "Kalendar kiçi"
              : dil === "ru"
                ? "Малый календарь"
                : "Small calendar"
          }
          text={text}
        />
        <ServiceCard
          image={kalendar_uly}
          header={
            dil === "tm"
              ? "Kalendar uly"
              : dil === "ru"
                ? "Большой календарь"
                : "Large calendar"
          }
          text={text}
        />
        <ServiceCard
          image={hormat_haty}
          header={
            dil === "tm"
              ? "Hormat haty"
              : dil === "ru"
                ? "Благодарственное письмо"
                : "Certificate of Appreciation"
          }
          text={text}
        />
        <ServiceCard
          image={blaknot}
          header={
            dil === "tm" ? "Blaknot" : dil === "ru" ? "Блокнот" : "Notebook"
          }
          text={text}
        />
        <ServiceCard
          image={rucka}
          header={dil === "tm" ? "Ruçka" : dil === "ru" ? "Ручка" : "Pen"}
          text={text}
        />
        <ServiceCard
          image={esiklere_cap}
          header={
            dil === "tm"
              ? "Eşiklere çap"
              : dil === "ru"
                ? "Печать на одежде"
                : "Printing on clothes"
          }
          text={text}
        />
        <ServiceCard
          image={gaplar}
          header={
            dil === "tm"
              ? "Gaplaryň üsdüne çap"
              : dil === "ru"
                ? "Печать на упаковке"
                : "Printing on packaging"
          }
          text={text}
        />
        <ServiceCard
          image={bannerler}
          header={
            dil === "tm"
              ? "Ramkalar"
              : dil === "ru"
                ? "Рамки"
                : "Frames"
          }
          text={text}
        />
      </div>
    </div>
  );
};

export default ServiceCollection;
