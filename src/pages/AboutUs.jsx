import img26 from "./../images/our work.png";
import img27 from "./../images/about us.png";

const AboutUs = () => {
  return (
    <div>
      <div className="my-[70px] ">
        <div className="mb-[100px]">
          <h1 className="font-[500] text-[36px] mb-[24px] w-full text-center text-black">
            Biz barada
          </h1>
          <p className="font-[400] text-[16px] text-center">
            {" "}
            Çap işleri islendik dizaýnda, ölçegde we islendik materialda ýerine
            ýetirilýär. Häzirki zaman enjamlarymyz we tejribeli hünärmenlerimiz
            arkaly sargytlaryňyzy wagtynda, takyk we ýokary hilli görnüşde
            taýýarlaýarys. Kiçi sargytlardan başlap, uly möçberli çap işlerine
            çenli ähli zerurlyklaryňyz üçin amatly we ygtybarly çözgüt
            hödürleýäris.
          </p>
        </div>
        <div className="block md:hidden h-full w-full mb-5">
          <img src={img27} alt="" className="h-full w-full" />
        </div>
        <div className="flex h-[350px] justify-between">
          <div className="flex flex-col justify-start md:justify-between">
            <h1 className="font-[500] text-[24px] mb-[50px] text-black">
              Näme üçin Merkez Çaphana?
            </h1>
            <div className="px-[17px]">
              <ul className="mb-12">
                <li className="font-[400] text-[16px] list-disc">
                  Şahsy islegiňize görä çap
                </li>
                <li className="font-[400] text-[16px]  list-disc">
                  Islendik materialda çap mümkinçilikleri
                </li>
                <li className="font-[400] text-[16px]  list-disc">
                  Ýokary hilli we arassa iş
                </li>
                <li className="font-[400] text-[16px]  list-disc">
                  Tiz hyzmat we amatly bahalar
                </li>
              </ul>
            </div>
            <p>Merkez Çaphana bilen pikirleriňizi hakyky görnüşe öwüriň.</p>
          </div>
          <div className="hidden md:block h-full w-[60%]">
            <img src={img27} alt="" className="h-full w-full" />
          </div>
        </div>
      </div>

      <div className=" mb-[70px]">
        <h1 className="font-[500] text-[36px]  mb-[70px] w-full text-center">
          Biziň işlerimiz
        </h1>
        <div>
          <img src={img26} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
