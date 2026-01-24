import React from "react";

const ServiceCard = ({ image, header, text }) => {
  return (
    <div data-aos="zoom-in" className="xs:py-2  md:py-[12px] w-full">
      <div className="rounded-[30px] shadow-custom-lg flex flex-col p-[15px]">
        <div className="w-[150px] h-[150px] mb-[20px] mx-auto">
          <img src={image} alt="img" className="w-full h-full" />
        </div>{" "}
        <h4 className="font-[400] h-[40px] text-[16px] mb-[5px]">{header}</h4>
        <div className="h-[100px] ">
          <p className="w-[90%] font-[400] text-[14px] text-gray mb-2">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
