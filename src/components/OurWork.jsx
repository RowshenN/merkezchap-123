import { useContext } from "react"
import { SebedimContext } from "../context/Context"
import img26 from "../images/our work.png"

const OurWork = ({ center }) => {
  const { dil } = useContext(SebedimContext)
  return (
    <div id="ourWork" data-aos="fade-up" className=" mb-[70px]">
      <h1
        className={`font-[500] ${center ? "text-center" : "text-left"}  xs:text-[27px] md:text-[36px] mt-[24px] xs:mb-[30px] md:mb-[70px]`}
      >
        {dil === "tm"
          ? "Biziň işlerimiz"
          : dil === "ru"
            ? "Наши работы"
            : "Our works"}
      </h1>
      <div data-aos="zoom-out" className="w-full  ">
        <img
          src={img26}
          alt="ourwork"
          className="md:h-full xs:h-[200px] w-full object-cover  "
        />
      </div>
    </div>
  )
}

export default OurWork
