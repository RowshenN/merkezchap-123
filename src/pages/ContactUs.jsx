import img27 from "./../images/Vector.svg";
import img28 from "./../images/black-inst.svg";
import img29 from "./../images/black-tiktok.svg";
import img30 from "./../images/black-loc.svg";
import img31 from "./../images/black-arrow.svg";
import { useContext, useState } from "react";
import { SebedimContext } from "../context/Context";

const ContactUs = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const { dil } = useContext(SebedimContext);

  return (
    <div data-aos="fade-up">
      <h1 className="pt-[40px] font-[500] xs:text-[28px] md:text-[36px] text-center">
        {dil === "tm"
          ? "Biz bilen Habarlaş"
          : dil === "ru"
            ? "Свяжитесь с нами"
            : "Contact us"}
      </h1>
      <div className="block md:hidden w-full mb-5">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d576.0848500102034!2d58.37342205187681!3d37.94129367889172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6fff745993b2df%3A0x76ede1b5a2b975a9!2z0KLQuNC_0L7Qs9GA0LDRhNC40Y8gIk1lcmtleiI!5e1!3m2!1sen!2skr!4v1768501634853!5m2!1sen!2skr"
          width="600"
          height="450"
          // style="border:0;"
          style={{ border: 0, width: "100%", marginTop: "40px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="flex items-center justify-between mb-[70px]">
        <div className="flex flex-col gap-[40px]">
          <div className="flex items-center gap-[10px]">
            <img
              src={img27}
              alt=""
              className="xs:w-[17px] md:w-[20px] xs:h-[17px] md:h-[20px]"
            />
            <span className="font-[500] xs:text-[17px] md:text-[20px]">
              +99363030303
            </span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img
              src={img28}
              alt=""
              className="xs:w-[17px] md:w-[20px] xs:h-[17px] md:h-[20px]"
            />
            <span className="font-[500] xs:text-[17px] md:text-[20px]">
              merkez_chaphana
            </span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img
              src={img29}
              alt=""
              className="xs:w-[17px] md:w-[20px] xs:h-[17px] md:h-[20px]"
            />
            <span className="font-[500] xs:text-[17px] md:text-[20px]">
              merkez_chaphana
            </span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img
              src={img30}
              alt=""
              className="xs:w-[17px] md:w-[20px] xs:h-[17px] md:h-[20px]"
            />
            <span className="font-[500] xs:text-[17px] md:text-[20px]">
              Görogly k. 25 j.
            </span>
          </div>
        </div>
        <div className="hidden md:block w-[70%]">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d576.0848500102034!2d58.37342205187681!3d37.94129367889172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6fff745993b2df%3A0x76ede1b5a2b975a9!2z0KLQuNC_0L7Qs9GA0LDRhNC40Y8gIk1lcmtleiI!5e1!3m2!1sen!2skr!4v1768501634853!5m2!1sen!2skr"
            width="600"
            height="450"
            // style="border:0;"
            style={{ border: 0, width: "100%", marginTop: "40px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div id="fq">
        <h1 className="font-[500] xs:text-[28px] md:text-[36px] text-center xs:mb-[30px] md:mb-[40px]">
          {dil === "tm"
            ? "Köp berilýän soraglar"
            : dil === "ru"
              ? "Часто задаваемые вопросы"
              : "Frequently Asked Questions"}
        </h1>
        <div className="flex flex-col gap-[25px] xs:mb-[100px] md:mb-[150px]">
          <div className=" pb-4">
            <div
              onClick={() => toggle(1)}
              className="flex items-center justify-between cursor-pointer transition-all duration-200 hover:bg-white py-1 px-2"
            >
              <p className="font-[400] xs:text-[18px] md:text-[20px]">
                {dil === "tm"
                  ? "Welýatlara eltip bermek hyzmatlarynyz barmy?"
                  : dil === "ru"
                    ? "Оказываете ли вы услуги доставки в регионы?"
                    : "Do you provide delivery services to the regions?"}
              </p>
              <img
                src={img31}
                alt=""
                className={`w-[16px] h-[16px] transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            </div>

            {open === 1 && (
              <p className="mt-4 text-gray-600 text-[16px] px-2">
                {dil === "tm"
                  ? "Hawa, ähli welýatlara eltip bermek hyzmatymyz bar."
                  : dil === "ru"
                    ? "Да, мы предоставляем услуги доставки во все регионы."
                    : "Yes, we provide delivery services to all regions."}
              </p>
            )}
          </div>

          <div className=" pb-4">
            <div
              onClick={() => toggle(2)}
              className="flex items-center justify-between cursor-pointer transition-all duration-200 hover:bg-white py-1 px-2"
            >
              <p className="font-[400] xs:text-[18px] md:text-[20px]">
                {dil === "tm"
                  ? "Online sargyt berip bolýarmy?"
                  : dil === "ru"
                    ? "Можно ли оформить заказ онлайн?"
                    : "Is it possible to place an order online?"}
              </p>
              <img
                src={img31}
                alt=""
                className={`w-[16px] h-[16px] transition-transform ${
                  open === 2 ? "rotate-180" : ""
                }`}
              />
            </div>

            {open === 2 && (
              <p className="mt-4 text-gray-600 text-[16px] px-2">
                {dil === "tm"
                  ? "Hawa, online sagyt edip bolýar."
                  : dil === "ru"
                    ? "Да, можно оформить заказ онлайн."
                    : "Yes, you can place an order online."}
              </p>
            )}
          </div>

          <div className=" pb-4">
            <div
              onClick={() => toggle(3)}
              className="flex items-center justify-between cursor-pointer transition-all duration-200 hover:bg-white py-1 px-2"
            >
              <p className="font-[400] xs:text-[18px] md:text-[20px]">
                {dil === "tm"
                  ? "Dizaýn edip bermek hyzmatlarynyz barmy?"
                  : dil === "ru"
                  ? "Предоставляете ли вы услуги дизайна?"
                    : "Do you provide design services?"}
              </p>
              <img
                src={img31}
                alt=""
                className={`w-[16px] h-[16px] transition-transform ${
                  open === 3 ? "rotate-180" : ""
                }`}
              />
            </div>

            {open === 3 && (
              <p className="mt-4 text-gray-600 text-[16px] px-2">
                {dil === "tm"
                  ? "Howa, dizaýn edip bermek hyzmatymyz bar."
                  : dil === "ru"
                    ? " Да, мы предоставляем услуги дизайна. "
                    : "Yes, we provide design services."}
              </p>
            )}
          </div>

          <div className=" pb-4">
            <div
              onClick={() => toggle(4)}
              className="flex items-center justify-between cursor-pointer transition-all duration-200 hover:bg-white py-1 px-2"
            >
              <p className="font-[400] xs:text-[18px] md:text-[20px]">
                {dil === "tm"
                  ? "Hepdaniň haýsy günleri işleýärsiňiz?"
                  : dil === "ru"
                    ? " В какие дни недели вы работаете? "
                    : "Which days of the week do you work?"}
              </p>
              <img
                src={img31}
                alt=""
                className={`w-[16px] h-[16px] transition-transform ${
                  open === 4 ? "rotate-180" : ""
                }`}
              />
            </div>

            {open === 4 && (
              <p className="mt-4 text-gray-600 text-[16px] px-2">
                {dil === "tm"
                  ? "Hepdäniň 1 - 6 - njy günleri işleýäris."
                  : dil === "ru"
                    ? "Мы работаем с понедельника по субботу."
                    : "We work from Monday to Saturday."}
              </p>
            )}
          </div>

          <div className=" pb-4">
            <div
              onClick={() => toggle(5)}
              className="flex items-center justify-between cursor-pointer transition-all duration-200 hover:bg-white py-1 px-2"
            >
              <p className="font-[400] xs:text-[18px] md:text-[20px]">
                {dil === "tm"
                  ? "Gyssagly ýagdaýda sargytlary kabul edýärsiňizmi?"
                  : dil === "ru"
                    ? "Принимаете ли вы срочные заказы?"
                    : "Do you accept urgent orders?"}
              </p>
              <img
                src={img31}
                alt=""
                className={`w-[16px] h-[16px] transition-transform ${
                  open === 5 ? "rotate-180" : ""
                }`}
              />
            </div>

            {open === 5 && (
              <p className="mt-4 text-gray-600 text-[16px] px-2">
                {dil === "tm"
                  ? "Howa, gyssagly ýagdaýda hem sargytlary kabul etýäris."
                  : dil === "ru"
                    ? "Да, мы также принимаем срочные заказы."
                    : "Yes, we also accept urgent orders."}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
