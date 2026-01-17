import img27 from "./../images/Vector.svg";
import img28 from "./../images/black-inst.svg";
import img29 from "./../images/black-tiktok.svg";
import img30 from "./../images/black-loc.svg";
import img31 from "./../images/black-arrow.svg";
import { useState } from "react";

const BizbilenHawarlasmak = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div>
      <h1 className="pt-[40px] font-[500] text-[36px] text-center">
        Biz bilen Habarlaş
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
            <img src={img27} alt="" className="w-[32px] h-[32px]" />
            <span className="font-[500] text-[20px]">+99363030303</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img src={img28} alt="" className="w-[32px] h-[32px]" />
            <span className="font-[500] text-[20px]">merkez_chaphana</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img src={img29} alt="" className="w-[32px] h-[32px]" />
            <span className="font-[500] text-[20px]">merkez_chaphana</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img src={img30} alt="" className="w-[32px] h-[32px]" />
            <span className="font-[500] text-[20px]">Görogly k. 25 j.</span>
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
      <div>
        <h1 className="font-[500] text-[36px] text-center mb-[40px]">
          Köp berilýän soraglar
        </h1>
        <div className="flex flex-col gap-[40px] mb-[200px]">
          <div className=" pb-4">
            <div
              onClick={() => toggle(1)}
              className="flex items-center justify-between cursor-pointer"
            >
              <p className="font-[400] text-[20px]">
                Welýatlara eltip bermek hyzmatlarynyz barmy?
              </p>
              <img
                src={img31}
                alt=""
                className={`w-[32px] h-[32px] transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            </div>

            {open === 1 && (
              <p className="mt-4 text-gray-600 text-[16px]">
                Hawa, ähli welýatlara eltip bermek hyzmatymyz bar.
              </p>
            )}
          </div>

          <div className=" pb-4">
            <div
              onClick={() => toggle(2)}
              className="flex items-center justify-between cursor-pointer"
            >
              <p className="font-[400] text-[20px]">
                Online sargyt berip bolýarmy?
              </p>
              <img
                src={img31}
                alt=""
                className={`w-[32px] h-[32px] transition-transform ${
                  open === 2 ? "rotate-180" : ""
                }`}
              />
            </div>

            {open === 2 && (
              <p className="mt-4 text-gray-600 text-[16px]">
                Yok, ähli welýatlara eltip bermek hyzmatymyz yok.
              </p>
            )}
          </div>

          <div className=" pb-4">
            <div
              onClick={() => toggle(3)}
              className="flex items-center justify-between cursor-pointer"
            >
              <p className="font-[400] text-[20px]">
                Deign edip bermek hyzmatlarynyz barmy?
              </p>
              <img
                src={img31}
                alt=""
                className={`w-[32px] h-[32px] transition-transform ${
                  open === 3 ? "rotate-180" : ""
                }`}
              />
            </div>

            {open === 3 && (
              <p className="mt-4 text-gray-600 text-[16px]">
                Howa, ähli welýatlara eltip bermek hyzmatymyz bar.
              </p>
            )}
          </div>

          <div className=" pb-4">
            <div
              onClick={() => toggle(4)}
              className="flex items-center justify-between cursor-pointer"
            >
              <p className="font-[400] text-[20px]">
                Hepdaniň haýsy günleri işleýärsiňiz?
              </p>
              <img
                src={img31}
                alt=""
                className={`w-[32px] h-[32px] transition-transform ${
                  open === 4 ? "rotate-180" : ""
                }`}
              />
            </div>

            {open === 4 && (
              <p className="mt-4 text-gray-600 text-[16px]">
                Howa, ähli welýatlara eltip bermek hyzmatymyz bar.
              </p>
            )}
          </div>

          <div className=" pb-4">
            <div
              onClick={() => toggle(5)}
              className="flex items-center justify-between cursor-pointer"
            >
              <p className="font-[400] text-[20px]">
                Gyssagly ýagdaýda sargytlary kabul edýärsiňizmi?
              </p>
              <img
                src={img31}
                alt=""
                className={`w-[32px] h-[32px] transition-transform ${
                  open === 5 ? "rotate-180" : ""
                }`}
              />
            </div>

            {open === 5 && (
              <p className="mt-4 text-gray-600 text-[16px]">
                Howa, ähli welýatlara eltip bermek hyzmatymyz bar.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BizbilenHawarlasmak;
