import { useContext } from "react";
import OurWork from "../components/OurWork";
import { SebedimContext } from "../context/Context";

import img27 from "./../images/about us.png";
import Parnik from "./../images/Parnik.png";
import Kafe from "./../images/Kafe.png";
import Karopga from "./../images/_karopka onimcilik.jpg";
import Gurlusyk from "./../images/Ak merkez gurlusyk.jpg";
import Caphana from "./../images/Caphana.png";

const AboutUs = () => {
  const { dil } = useContext(SebedimContext);
  console.log("dil:  ", dil);
  
  return (
    <div>
      <div data-aos="fade-up" className="xs:my-8 md:my-[70px] ">
        <div className="xs:mb-[50px] md:mb-[100px]">
          <h1 className="font-[500] xs:text-[27px] md:text-[36px] mb-[24px] w-full text-center text-black">
            {dil === "tm" ? "Biz barada" : dil === "ru" ? "О нас" : "About Us"}
          </h1>
          <p className="font-[400] text-[16px] text-center">
            {" "}
            {dil === "tm"
              ? "Çap işleri islendik dizaýnda, ölçegde we islendik materialda ýerine ýetirilýär. Häzirki zaman enjamlarymyz we tejribeli hünärmenlerimiz arkaly sargytlaryňyzy wagtynda, takyk we ýokary hilli görnüşde taýýarlaýarys. Kiçi sargytlardan başlap, uly möçberli çap işlerine çenli ähli zerurlyklaryňyz üçin amatly we ygtybarly çözgüt hödürleýäris."
              : dil === "ru"
                ? "Печатные работы выполняются в любом дизайне, размере и на любых материалах. С помощью нашего современного оборудования и опытных специалистов мы готовим ваши заказы вовремя, точно и высокого качества. От небольших заказов до крупномасштабных печатных проектов мы предлагаем удобные и надежные решения для всех ваших потребностей."
                : "Printing is carried out in any design, size, and on any material. Using our modern equipment and experienced specialists, we prepare your orders on time, accurately, and with high quality. From small orders to large-scale printing projects, we offer convenient and reliable solutions for all your needs."}
          </p>
        </div>
        <div className="block md:hidden h-full w-full mb-5">
          <img src={img27} alt="" className="h-full w-full" />
        </div>
        <div
          data-aos="fade-in"
          className="flex xs:h-[300px] md:h-[350px] justify-between"
        >
          <div className="flex flex-col justify-start md:justify-between">
            <h1 className="font-[500] text-[24px]  text-black">
              {dil === "tm"
                ? "Näme üçin Merkez Çaphana?"
                : dil === "ru"
                  ? "Почему стоит выбрать типографию Merkez?"
                  : "Why choose Merkez Printing House?"}
            </h1>
            <p className="xs:mb-7 md:mb-[50px]">
              {dil === "tm"
                ? "Merkez Çaphana bilen pikirleriňizi hakyky görnüşe öwüriň."
                : dil === "ru"
                  ? "Превратите свои идеи в реальность с типографией Merkez."
                  : "Turn your ideas into reality with Merkez Printing House."}
            </p>
            <div className="px-[17px]">
              <ul className="xs:mb-4 flex flex-col justify-center gap-2 md:mb-12">
                <li className="font-[400] text-[18px] list-disc">
                  {dil === "tm"
                    ? "Şahsy islegiňize görä çap"
                    : dil === "ru"
                      ? "Печать по индивидуальному заказу"
                      : "Custom printing"}
                </li>
                <li className="font-[400] text-[18px]  list-disc">
                  {dil === "tm"
                    ? "Islendik materialda çap mümkinçilikleri"
                    : dil === "ru"
                      ? "Возможности печати на любых материалах"
                      : "Printing capabilities on any material"}
                </li>
                <li className="font-[400] text-[18px]  list-disc">
                  {dil === "tm"
                    ? "Ýokary hilli we arassa iş"
                    : dil === "ru"
                      ? "Высокое качество и аккуратная работа"
                      : "High-quality and precise work"}
                </li>
                <li className="font-[400] text-[18px]  list-disc">
                  {dil === "tm"
                    ? "Tiz hyzmat we amatly bahalar"
                    : dil === "ru"
                      ? "Быстрое обслуживание и доступные цены"
                      : "Fast service and affordable prices"}
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:block h-full w-[50%]">
            <img src={img27} alt="" className="h-full w-full" />
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="w-full xs:mt-0 md:mt-[50px] md:flex-row xs:flex-col flex items-center justify-center xs:gap-6 md:gap-[80px] "
        >
          <div className="xs:w-full h-[300px] md:w-[50%] ">
            <img
              src={Parnik}
              alt="parniuk"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="xs:w-full md:w-[50%] ">
            <h1 className="xs:text-[22px] md:text-[32px] mb-2 font-[600] ">
              Merkez Agro
            </h1>
            <p>
              {dil === "tm"
                ? "Merkez Agro dürli oba hojalyk önümçilik taslamalaryny ýerine ýetirýär. Biz täze tehnikalar we kämil agronomlar bilen oba hojalygynda ýokary hilli önüm öndürmegi üpjün edýäris. Harytlarymyz dogry we wagtynda öndürilýär, müşderilerimiz üçin ygtybarly we netijeli çözgütler hödürleýäris. Kiçi fermalardan uly desgalara çenli ähli taslamalarymyz üçin hyzmat berýäris."
                : dil === "ru"
                  ? "Merkez Agro реализует различные проекты в области сельского хозяйства. Используя современные технологии и опытных агрономов, мы обеспечиваем производство высококачественной продукции. Наша продукция производится точно и вовремя, предоставляя надежные и эффективные решения для клиентов. Мы обслуживаем все проекты — от небольших ферм до крупных агропредприятий."
                  : "Merkez Agro carries out various agricultural production projects. Using modern techniques and experienced agronomists, we ensure high-quality crop production. Our products are produced accurately and on time, providing reliable and effective solutions for our clients. We offer services for all projects, from small farms to large agricultural facilities."}
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="w-full mt-[50px] md:flex-row xs:flex-col-reverse flex items-center justify-center xs:gap-6 md:gap-[80px] "
        >
          <div className="xs:w-full md:w-[50%] ">
            <h1 className="xs:text-[22px] md:text-[32px] mb-2 font-[600] ">
              {dil === "tm"
                ? "Merkez Kafe"
                : dil === "ru"
                  ? "Merkez Кафе"
                  : "Merkez Café  "}
            </h1>
            <p>
              {dil === "tm"
                ? "Merkez Kafe müşderilere rahat we owadan kafe hyzmatlaryny hödürleýär. Biz ýokary hilli naharlar, täsirli içgiler we el işleriniň owadan bezegi bilen sazlaşykly atmosferany döredýäris. Her bir müşderi üçin aýratyn tagam we hyzmat çemeleşmesi bilen aýratynlyk döredýäris. Biz hemişe siziň rahatlygyňyza we lezzetli tejribäňize üns berýäris."
                : dil === "ru"
                  ? "Merkez Kafe предлагает удобный и стильный опыт посещения кафе для наших клиентов. Мы предоставляем качественные блюда, вкусные напитки и уютный интерьер. Каждый клиент получает персонализированное обслуживание, чтобы обеспечить уникальный и приятный опыт. Мы всегда уделяем внимание вашему комфорту и вкусовым предпочтениям."
                  : "Merkez Kafe offers a comfortable and stylish café experience for our customers. We provide high-quality meals, delicious beverages, and an inviting interior design. Each customer receives personalized service and attention to ensure a unique and enjoyable experience. We always focus on your comfort and taste satisfaction."}
            </p>
          </div>

          <div className="xs:w-full h-[300px] md:w-[50%] ">
            <img
              src={Kafe}
              alt="parniuk"
              className="w-full h-full object-cover "
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="w-full mt-[50px] md:flex-row xs:flex-col-reverse flex items-center justify-center xs:gap-6 md:gap-[80px] "
        >
          <div className="xs:w-full md:w-[50%] ">
            <h1 className="xs:text-[22px] md:text-[32px] mb-2 font-[600] ">
              {dil === "tm"
                ? "Merkez Kagyz we Karton önümçiligi"
                : dil === "ru"
                  ? "Merkez Производство бумаги"
                  : "Merkez Paper Production  "}
            </h1>
            <p>
              {dil === "tm"
                ? "Merkez Kagyz önümçiligi ýokary hilli kagyz önümlerini öndürýär. Önümlerimiz dürli ölçeglerde we görnüşlerde bolup, islegleriňize laýyk gelýär. Biz döwrebap tehnologiýalary we hünärmenlerimizi ulanyp, kagyz önümlerini takyk we wagtly taýýarlayarys. Kiçi sargytlardan uly möçberli taslamalara çenli ähli müşderilerimize ygtybarly hyzmat berýäris."
                : dil === "ru"
                  ? "Merkez Производство бумаги выпускает высококачественные бумажные изделия. Продукция доступна в различных размерах и дизайнах, чтобы соответствовать вашим потребностям. Используя современные технологии и опытных специалистов, мы подготавливаем бумажные изделия точно и вовремя. От небольших заказов до крупных проектов — мы предоставляем надежное обслуживание всем клиентам."
                  : "Merkez Paper Production produces high-quality paper products. Our products are available in various sizes and designs to meet your needs. Using modern technologies and skilled specialists, we prepare paper products accurately and on time. From small orders to large-scale projects, we provide reliable service for all clients."}
            </p>
          </div>

          <div className="xs:w-full h-[300px] md:w-[50%] ">
            <img
              src={Karopga}
              alt="parniuk"
              className="w-full h-full object-cover "
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="w-full mt-[50px] md:flex-row xs:flex-col flex items-center justify-center xs:gap-6 md:gap-[80px] "
        >
          <div className="xs:w-full h-[300px] md:w-[50%] ">
            <img
              src={Gurlusyk}
              alt="parniuk"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="xs:w-full md:w-[50%] ">
            <h1 className="xs:text-[22px] md:text-[32px] mb-2 font-[600] ">
              {dil === "tm"
                ? "Merkez Gurluşyk"
                : dil === "ru"
                  ? "Merkez Строительство"
                  : "Merkez Construction  "}
            </h1>
            <p>
              {dil === "tm"
                ? "Merkez Gurluşyk dürli gurluşyk we abatlaýyş işleri bilen meşgullanýar. Biz ýokary hünär derejesindäki hünärmenler we döwrebap enjamlar bilen taslamalary wagtynda we ýokary hilli ýerine ýetirýäris. Her bir taslama üçin aýratyn çözgütler we innowasion çemeleşme bilen müşderilerimiziň isleglerini kanagatlandyrýarys."
                : dil === "ru"
                  ? "Merkez Строительство занимается различными строительными и ремонтными проектами. С высококвалифицированными специалистами и современным оборудованием мы выполняем проекты вовремя и с высоким качеством. Каждый проект получает индивидуальное решение и инновационный подход для удовлетворения потребностей клиентов."
                  : "Merkez Construction handles various construction and renovation projects. With highly skilled specialists and modern equipment, we execute projects on time and with high quality. Each project receives a tailored solution and innovative approach to meet the specific needs of our clients."}
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="w-full mt-[50px] md:flex-row xs:flex-col-reverse flex items-center justify-center xs:gap-6 md:gap-[80px] "
        >
          <div className="xs:w-full md:w-[50%] ">
            <h1 className="xs:text-[22px] md:text-[32px] mb-2 font-[600] ">
              {dil === "tm"
                ? "Merkez Çaphana"
                : dil === "ru"
                  ? "Merkez Типография"
                  : "Merkez Printing House  "}
            </h1>
            <p>
              {dil === "tm"
                ? "Merkez Çaphana ýokary hilli çap hyzmatlaryny hödürleýär. Biz dürli dizaýn, ölçeg we materiallarda ýokary hilli çap işleri edýäris. Häzirki zaman enjamlarymyz we tejribeli hünärmenlerimiz bilen sargytlaryňyzy takyk we wagtynda taýýarlayarys. Her bir müşderi üçin aýratyn çözgütler we ýokary hilli hyzmat üpjün edýäris."
                : dil === "ru"
                  ? "Merkez Типография предоставляет профессиональные услуги печати. Мы выполняем высококачественную печать в различных дизайнах, размерах и материалах. С современным оборудованием и опытными специалистами мы готовим заказы точно и вовремя. Каждый клиент получает индивидуальные решения и услуги высокого качества."
                  : "Merkez Printing House provides professional printing services. We perform high-quality printing in various designs, sizes, and materials. With modern equipment and experienced specialists, we prepare orders accurately and on time. Each client receives personalized solutions and top-quality service."}
            </p>
          </div>

          <div className="xs:w-full h-[300px] md:w-[50%] ">
            <img
              src={Caphana}
              alt="parniuk"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>

      <OurWork center={true} />
    </div>
  );
};

export default AboutUs;
