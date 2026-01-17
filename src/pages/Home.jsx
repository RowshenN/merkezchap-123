import img1 from "./../images/carousel/carousel 1.png";
import img2 from "./../images/carousel/carousel 2.png";
import img3 from "./../images/carousel/carousel 3.png";
import img4 from "./../images/carousel/carousel 4.png";
import img5 from "./../images/carousel/carousel 5.png";
import img6 from "./../images/carousel/carousel 6.png";
import img7 from "./../images/carousel/carousel 7.png";
import img8 from "./../images/carousel/carousel 8.png";
import img9 from "./../images/categories/bussiness_card.png";
import img10 from "./../images/categories/cakylyklar.png";
import img11 from "./../images/categories/esikler.png";
import img12 from "./../images/categories/flayerler.png";
import img13 from "./../images/categories/stikerler.png";
import img14 from "./../images/CaretLeft.svg";
import img15 from "./../images/CaretRight.svg";
import img16 from "./../images/services/bannerler.png";
import img17 from "./../images/services/blaknot.png";
import img18 from "./../images/services/esiklere cap.png";
import img19 from "./../images/services/gaplar.png";
import img20 from "./../images/services/hormat haty.png";
import img21 from "./../images/services/kalendar kici.png";
import img22 from "./../images/services/kalendar uly.png";
import img23 from "./../images/services/magnit.png";
import img24 from "./../images/services/rucka.png";
import img25 from "./../images/services/wizitkalar.png";
import img26 from "./../images/our work.png";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* =====================================================blue part======================================================== */}
      <div className="w-full bg-primary p-[45px] mb-[60px]">
        <h1 className="font-[600] text-[32px] text-white mb-[20px]">
          Merkez Çaphana – Çapda ynamly hyzmatdaş
        </h1>
        <p className="font-[400] text-[16px] text-white mb-[35px]">
          Merkez Çaphana ýokary hilli çap hyzmatlaryny hödürleýär. Biz wizit
          kartalary, bukletleri, kataloglary, plakatlary, kitaplary, gaplama
          materiallaryny we uly formatly mahabat önümlerini professional
          derejede taýýarlaýarys.
        </p>
        <div className="flex items-center justify-end gap-[30px] text-[16px]">
          <button className="bg-[white] p-[10px] rounded-lg font-[500]">
            Habarlaşmak
          </button>
          <Link to={"/hyzmatlar"}>
            <button className="bg-blue p-[10px] rounded-lg text-[16px] font-[500] text-[white]">
              Hyzmatlar gormek
            </button>
          </Link>
        </div>
      </div>
      {/* =====================================================first carousel======================================================== */}
      {/* <div className="flex items-center justify-between p-[20px] gap-[65px] mb-[70px]">
        <div className="h-[58px]">
          <img src={img1} alt="" className="w-auto h-full" />
        </div>
        <div className="h-[58px]">
          <img src={img2} alt="" className="w-auto h-full" />
        </div>
        <div className="h-[58px]">
          <img src={img3} alt="" className="w-auto h-full" />
        </div>
        <div className="h-[58px]">
          <img src={img4} alt="" className="w-auto h-full" />
        </div>
        <div className="h-[58px]">
          <img src={img5} alt="" className="w-auto h-full" />
        </div>
        <div className="h-[58px]">
          <img src={img6} alt="" className="w-auto h-full" />
        </div>
        <div className="h-[58px]">
          <img src={img7} alt="" className="w-auto h-full" />
        </div>
        <div className="h-[58px]">
          <img src={img8} alt="" className="w-auto h-full" />
        </div>
      </div> */}
      {/* =====================================================second carousel======================================================== */}
      {/* <div className="mb-[70px]">
        <h1 className="font-[500] text-[36px] mb-[10px]">Katagoriýalar</h1>
        <div className="relative">
          <div className="flex gap-[28px]">
            <div className="py-[12px] w-[19%]">
              <div className="rounded-[30px] shadow-2xl   flex flex-col items-center justify-center">
                <div className="w-[150px] h-[150px] mb-[20px]">
                  <img src={img9} alt="img" className="w-full h-full" />
                </div>{" "}
                <h4 className="font-[400] text-[16px] mb-[30px]">
                  Bussiness kartla
                </h4>
              </div>
            </div>

            <div className="py-[12px] w-[19%]">
              <div className="rounded-[30px] shadow-2xl   flex flex-col items-center justify-center">
                <div className="w-[150px] h-[150px] mb-[20px]">
                  <img src={img13} alt="img" className="w-full h-full" />
                </div>{" "}
                <h4 className="font-[400] text-[16px] mb-[30px]">
                  Stikerler & Etiketkalar
                </h4>
              </div>
            </div>

            <div className="py-[12px] w-[19%]">
              <div className="rounded-[30px] shadow-2xl   flex flex-col items-center justify-center">
                <div className="w-[150px] h-[150px] mb-[20px]">
                  <img src={img11} alt="img" className="w-full h-full" />
                </div>{" "}
                <h4 className="font-[400] text-[16px] mb-[30px]">
                  Eşikler & Torbalar
                </h4>
              </div>
            </div>

            <div className="py-[12px] w-[19%]">
              <div className="rounded-[30px] shadow-2xl   flex flex-col items-center justify-center">
                <div className="w-[150px] h-[150px] mb-[20px]">
                  <img src={img12} alt="img" className="w-full h-full" />
                </div>{" "}
                <h4 className="font-[400] text-[16px] mb-[30px]">
                  Flaýerler & Posterler
                </h4>
              </div>
            </div>

            <div className="py-[12px] w-[19%]">
              <div className="rounded-[30px] shadow-2xl   flex flex-col items-center justify-center">
                <div className="w-[150px] h-[150px] mb-[20px]">
                  <img src={img10} alt="img" className="w-full h-full" />
                </div>{" "}
                <h4 className="font-[400] text-[16px] mb-[30px]">
                  Çakylyklar & Hormat hatlary
                </h4>
              </div>
            </div>
          </div>
          <div className="flex justify-between absolute top-[35%] w-full">
            <div className="flex p-[16px] rounded-xl border-[1px] border-gray w-fit relative -left-[55px]">
              <img src={img14} alt="" className="w-[32px]" />
            </div>
            <div className="flex p-[16px] rounded-xl border-[1px] border-gray w-fit relative -right-[55px]">
              <img src={img15} alt="" className="w-[32px]" />
            </div>
          </div>
        </div>
      </div> */}
      {/* =====================================================hyzmatlar======================================================== */}
      <div className="flex flex-col items-center justify-center  mb-[70px]">
        <h1 className="font-[500] text-[36px] mb-[24px]">Hyzmatlar</h1>
        <div className="w-full flex  flex-wrap justify-between gap-[10px]">
          <div className="py-[12px] w-[19%]  min-w-[187px]">
            <div className="rounded-[30px] shadow-2xl flex flex-col p-[15px]">
              <div className="w-[150px] h-[150px] mb-[20px]  m-auto">
                <img src={img17} alt="img" className="w-full h-full" />
              </div>{" "}
              <h4 className="font-[400] text-[16px] mb-[5px]">Wisitka</h4>
              <p className="w-[90%] font-[400] text-[14px] text-gray mb-2">
                Çap işleri islendik dizaýnda, ölçegde we islendik materialda
                ýerine ýetirilýär
              </p>
            </div>
          </div>

          <div className="py-[12px] w-[19%]  min-w-[187px]">
            <div className="rounded-[30px] shadow-2xl flex flex-col p-[15px]">
              <div className="w-[150px] h-[150px] mb-[20px]  m-auto">
                <img src={img18} alt="img" className="w-full h-full" />
              </div>{" "}
              <h4 className="font-[400] text-[16px] mb-[5px]">Wisitka</h4>
              <p className="w-[90%] font-[400] text-[14px] text-gray mb-2">
                Çap işleri islendik dizaýnda, ölçegde we islendik materialda
                ýerine ýetirilýär
              </p>
            </div>
          </div>

          <div className="py-[12px] w-[19%]  min-w-[187px]">
            <div className="rounded-[30px] shadow-2xl flex flex-col p-[15px]">
              <div className="w-[150px] h-[150px] mb-[20px]  m-auto">
                <img src={img19} alt="img" className="w-full h-full" />
              </div>{" "}
              <h4 className="font-[400] text-[16px] mb-[5px]">Wisitka</h4>
              <p className="w-[90%] font-[400] text-[14px] text-gray mb-2">
                Çap işleri islendik dizaýnda, ölçegde we islendik materialda
                ýerine ýetirilýär
              </p>
            </div>
          </div>

          <div className="py-[12px] w-[19%]  min-w-[187px]">
            <div className="rounded-[30px] shadow-2xl flex flex-col p-[15px]">
              <div className="w-[150px] h-[150px] mb-[20px]  m-auto">
                <img src={img20} alt="img" className="w-full h-full" />
              </div>{" "}
              <h4 className="font-[400] text-[16px] mb-[5px]">Wisitka</h4>
              <p className="w-[90%] font-[400] text-[14px] text-gray mb-2">
                Çap işleri islendik dizaýnda, ölçegde we islendik materialda
                ýerine ýetirilýär
              </p>
            </div>
          </div>

          <div className="py-[12px] w-[19%]  min-w-[187px]">
            <div className="rounded-[30px] shadow-2xl flex flex-col p-[15px]">
              <div className="w-[150px] h-[150px] mb-[20px]  m-auto">
                <img src={img21} alt="img" className="w-full h-full" />
              </div>{" "}
              <h4 className="font-[400] text-[16px] mb-[5px]">Wisitka</h4>
              <p className="w-[90%] font-[400] text-[14px] text-gray mb-2">
                Çap işleri islendik dizaýnda, ölçegde we islendik materialda
                ýerine ýetirilýär
              </p>
            </div>
          </div>
        </div>
        {/* <div className="w-full flex justify-between gap-[28px]">
          <div className="py-[12px] w-[19%]">
            <div className="rounded-[30px] shadow-2xl flex flex-col p-[15px]">
              <div className="w-[150px] h-[150px] mb-[20px]  m-auto">
                <img src={img16} alt="img" className="w-full h-full" />
              </div>{" "}
              <h4 className="font-[400] text-[16px] mb-[5px]">Wisitka</h4>
              <p className="w-[90%] font-[400] text-[14px] text-gray mb-2">
                Çap işleri islendik dizaýnda, ölçegde we islendik materialda
                ýerine ýetirilýär
              </p>
            </div>
          </div>

          <div className="py-[12px] w-[19%]">
            <div className="rounded-[30px] shadow-2xl flex flex-col p-[15px]">
              <div className="w-[150px] h-[150px] mb-[20px]  m-auto">
                <img src={img22} alt="img" className="w-full h-full" />
              </div>{" "}
              <h4 className="font-[400] text-[16px] mb-[5px]">Wisitka</h4>
              <p className="w-[90%] font-[400] text-[14px] text-gray mb-2">
                Çap işleri islendik dizaýnda, ölçegde we islendik materialda
                ýerine ýetirilýär
              </p>
            </div>
          </div>

          <div className="py-[12px] w-[19%]">
            <div className="rounded-[30px] shadow-2xl flex flex-col p-[15px]">
              <div className="w-[150px] h-[150px] mb-[20px]  m-auto">
                <img src={img23} alt="img" className="w-full h-full" />
              </div>{" "}
              <h4 className="font-[400] text-[16px] mb-[5px]">Wisitka</h4>
              <p className="w-[90%] font-[400] text-[14px] text-gray mb-2">
                Çap işleri islendik dizaýnda, ölçegde we islendik materialda
                ýerine ýetirilýär
              </p>
            </div>
          </div>

          <div className="py-[12px] w-[19%]">
            <div className="rounded-[30px] shadow-2xl flex flex-col p-[15px]">
              <div className="w-[150px] h-[150px] mb-[20px]  m-auto">
                <img src={img24} alt="img" className="w-full h-full" />
              </div>{" "}
              <h4 className="font-[400] text-[16px] mb-[5px]">Wisitka</h4>
              <p className="w-[90%] font-[400] text-[14px] text-gray mb-2">
                Çap işleri islendik dizaýnda, ölçegde we islendik materialda
                ýerine ýetirilýär
              </p>
            </div>
          </div>

          <div className="py-[12px] w-[19%]">
            <div className="rounded-[30px] shadow-2xl flex flex-col p-[15px]">
              <div className="w-[150px] h-[150px] mb-[20px]  m-auto">
                <img src={img25} alt="img" className="w-full h-full" />
              </div>{" "}
              <h4 className="font-[400] text-[16px] mb-[5px]">Wisitka</h4>
              <p className="w-[90%] font-[400] text-[14px] text-gray mb-2">
                Çap işleri islendik dizaýnda, ölçegde we islendik materialda
                ýerine ýetirilýär
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <div className=" mb-[70px]">
        <h1 className="font-[500] text-[36px] mb-[24px] mb-[70px]">
          Biziň işlerimiz
        </h1>
        <div>
          <img src={img26} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
