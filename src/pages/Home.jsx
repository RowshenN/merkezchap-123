import img1 from "./../images/carousel/carousel 1.png";
import img2 from "./../images/carousel/carousel 2.png";
import img3 from "./../images/carousel/carousel 3.png";
import img4 from "./../images/carousel/carousel 4.png";
import img5 from "./../images/carousel/carousel 5.png";
import img6 from "./../images/carousel/carousel 6.png";
import img7 from "./../images/carousel/carousel 7.png";
import img8 from "./../images/carousel/carousel 8.png";
import { Link } from "react-router-dom";
import OurWork from "../components/OurWork";
import ServiceCollection from "../components/ServiceCollection";
import Categories from "../components/Categories";
import { SebedimContext } from "../context/Context";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { dil } = useContext(SebedimContext);
  return (
    <div>
      <Helmet>
        <title>
          {dil === "tm"
            ? "Merkez Çaphana – Çap hyzmatlary"
            : dil === "ru"
            ? "Типография Merkez"
            : "Merkez Printing House"}
        </title>

        <meta
          name="description"
          content={
            dil === "tm"
              ? "Merkez Çaphana Türkmenistanda ýokary hilli çap hyzmatlaryny hödürleýär."
              : dil === "ru"
              ? "Типография Merkez предлагает профессиональные полиграфические услуги."
              : "Merkez Printing House offers professional printing services."
          }
        />
      </Helmet>
      {/* =====================================================blue part======================================================== */}
      <div
        data-aos="fade-down"
        className="w-full bg-primary xs:p-5 md:p-[45px] mt-[60px] xs:mb-[30px] md:mb-[60px]"
      >
        <h1 className="font-[600] xs:text-[27px] md:text-[32px] text-white mb-[20px]">
          {dil === "tm"
            ? "Merkez Çaphana – Çapda ynamly hyzmatdaş"
            : dil === "ru"
              ? "Типография Merkez — надёжный партнёр в печати"
              : "Merkez Printing House – A reliable partner in printing"}
        </h1>
        <p className="font-[400] text-[16px] text-white mb-[35px]">
          {dil === "tm"
            ? "Merkez Çaphana ýokary hilli çap hyzmatlaryny hödürleýär. Biz wizit kartalary, bukletleri, kataloglary, plakatlary, kitaplary, gaplama materiallaryny we uly formatly mahabat önümlerini professional derejede taýýarlaýarys."
            : dil === "ru"
              ? "Типография Merkez предлагает высококачественные полиграфические услуги. Мы профессионально изготавливаем визитные карточки, буклеты, каталоги, плакаты, книги, упаковочные материалы и крупноформатную рекламную продукцию."
              : "Merkez Printing House offers high-quality printing services. We professionally produce business cards, booklets, catalogs, posters, books, packaging materials, and large-format advertising products."}
        </p>
        <div className="flex items-center xs:justify-between md:justify-end xs:gap-4 md:gap-[30px] text-[16px]">
          <Link to={"/contact"}>
            <button className="bg-[white] xs:p-2 md:p-[10px] rounded-lg font-[500]">
              {dil === "tm"
                ? "Habarlaşmak"
                : dil === "ru"
                  ? "Связаться"
                  : "Contact"}
            </button>
          </Link>
          <Link to={"/service"}>
            <button className="bg-blue xs:p-2 md:p-[10px] rounded-lg text-[16px] font-[500] text-[white]">
              {dil === "tm"
                ? "Hyzmatlar gormek"
                : dil === "ru"
                  ? "Просмотр услуг"
                  : "View services"}
            </button>
          </Link>
        </div>
      </div>
      {/* =====================================================first carousel======================================================== */}
      <div data-aos="fade-up" className="overflow-hidden mb-[30px] w-full">
        <h1 className="font-[500] w-full xs:text-[27px] md:text-[36px] mb-[10px]">
          {dil === "tm"
            ? "Işleşýän edaralarymyz"
            : dil === "ru"
              ? "Наши партнёры"
              : "Our partners"}
        </h1>
        <div className="flex animate-marquee w-max">
          {/* FIRST SET */}
          <div className="flex items-center justify-between xs:p-3 md:p-[20px] xs:gap-[40px] md:gap-[65px]">
            <div className="xs:h-[40px] md:h-[58px]">
              <img
                src={img1}
                alt="Merkez Çaphana printing partner logo"
                className="w-auto h-full"
              />
            </div>
            <div className="xs:h-[40px] md:h-[58px]">
              <img alt='Merkez chaphana img' src={img2} className="w-auto h-full" />
            </div>
            <div className="xs:h-[40px] md:h-[58px]">
              <img alt='Merkez chaphana img' src={img3} className="w-auto h-full" />
            </div>
            <div className="xs:h-[40px] md:h-[58px]">
              <img alt='Merkez chaphana img' src={img4} className="w-auto h-full" />
            </div>
            <div className="xs:h-[40px] md:h-[58px]">
              <img alt='Merkez chaphana img' src={img5} className="w-auto h-full" />
            </div>
            <div className="xs:h-[40px] md:h-[58px]">
              <img alt='Merkez chaphana img' src={img6} className="w-auto h-full" />
            </div>
            <div className="xs:h-[40px] md:h-[58px]">
              <img alt='Merkez chaphana img' src={img7} className="w-auto h-full" />
            </div>
            <div className="xs:h-[40px] md:h-[58px]">
              <img alt='Merkez chaphana img' src={img8} className="w-auto h-full" />
            </div>
          </div>

          {/* DUPLICATE SET (important for no gap) */}
          <div className="flex items-center justify-between p-[20px] gap-[65px]">
            <div className="xs:h-[40px] md:h-[58px]">
              <img alt='Merkez chaphana img' src={img1} className="w-auto h-full" />
            </div>
            <div className="xs:h-[40px] md:h-[58px]">
              <img alt='Merkez chaphana img' src={img2} className="w-auto h-full" />
            </div>
            <div className="xs:h-[40px] md:h-[58px]">
              <img alt='Merkez chaphana img' src={img3} className="w-auto h-full" />
            </div>
            <div className="xs:h-[40px] md:h-[58px]">
              <img alt='Merkez chaphana img' src={img4} className="w-auto h-full" />
            </div>
            <div className="xs:h-[40px] md:h-[58px]">
              <img alt='Merkez chaphana img' src={img5} className="w-auto h-full" />
            </div>
            <div className="xs:h-[40px] md:h-[58px]">
              <img alt='Merkez chaphana img' src={img6} className="w-auto h-full" />
            </div>
            <div className="xs:h-[40px] md:h-[58px]">
              <img alt='Merkez chaphana img' src={img7} className="w-auto h-full" />
            </div>
            <div className="xs:h-[40px] md:h-[58px]">
              <img alt='Merkez chaphana img' src={img8} className="w-auto h-full" />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================second carousel======================================================== */}
      <Categories />
      {/* =====================================================hyzmatlar======================================================== */}
      <div className="flex flex-col items-center justify-center xs:mb-[30px] md:mb-[70px]">
        <ServiceCollection />
      </div>
      <OurWork />
    </div>
  );
};

export default Home;
