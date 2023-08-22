"use client";
import SwiperSlider from "../Swiper/SwiperSlider";
import { useState } from "react";
import firstBg from "../../../public/img/desktop-thirdBg1x.jpg";
import secongBg from "../../../public/img/secondBg.jpg";
import thirdBg from "../../../public/img/thirdBg.jpg";
import fourthBg from "../../../public/img/fourthBg.jpg";
import fifthBg from "../../../public/img/fifthBg.jpg";
import { sliderData } from "./sliderData";
export default function ServicesSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const handleSlideChange = (index) => {
    setCurrentSlideIndex(index);
  };
  const backgroundImages = [firstBg, secongBg, thirdBg, fourthBg, fifthBg];
  return (
    <section
      className="services-section w-[100%] max-w-[100%] h-[100dvh] bg-cover bg-no-repeat"
      id="services"
      style={{
        backgroundImage: `url(${backgroundImages[currentSlideIndex].src})`,
      }}
    >
      <div className="div relative bg-[#020F08BF] w-[100%] h-[100%]">
        <div className="container sm:flex-col text-white max-w-[280px] sm:max-w-[704px] md:max-w-[1280px] md:gap-[23px] md:px-[15px] flex flex-col relative pt-[54px] sm:mt-[0] sm:pt-[64px] md:pt-[80px] mx-[auto] mb-[0] sm:flex-row sm:gap-[48px] sm:pt-[66px]">
          <h2 className="uppercase sm:text-[67px] sm:leading-[81px] text-[40px] font-thin leading-[56px] tracking-[-0.04em] mb-[8px] sm:text-[67px] md:text-[98px] md:leading-[118px] md:tracking-[-0.04em]">
            We <span className="font-medium">offer</span>
          </h2>
          <div>
            <SwiperSlider
              handleSlideChange={handleSlideChange}
              sliderData={sliderData}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
