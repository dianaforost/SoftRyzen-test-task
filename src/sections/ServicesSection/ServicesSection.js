"use client";
import { useState } from "react";
import data from "@/data/data.json";

import SwiperSlider from "../../components/Swiper/SwiperSlider";

import firstBg from "../../../public/img/desktop-thirdBg1x.jpg";
import secongBg from "../../../public/img/secondBg.jpg";
import thirdBg from "../../../public/img/thirdBg.jpg";
import fourthBg from "../../../public/img/fourthBg.jpg";
import fifthBg from "../../../public/img/fifthBg.jpg";

import firstSlider from "../../../public/img/photo/big-first-slider.jpg";
import secondSlider from "../../../public/img/photo/second-slider.jpg";
import thirdSlider from "../../../public/img/photo/third-slider.jpg";
import fourthSlider from "../../../public/img/photo/fourth-slider.jpg";
import fifthSlider from "../../../public/img/photo/fifth-slider.jpg";

export default function ServicesSection() {
  const { services } = data;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const handleSlideChange = (index) => {
    setCurrentSlideIndex(index);
  };
  const backgroundImages = [firstBg, secongBg, thirdBg, fourthBg, fifthBg];
  const imageArray = [
    firstSlider,
    secondSlider,
    thirdSlider,
    fourthSlider,
    fifthSlider,
  ];

  return (
    <section
      className="services-section min-h-[100dvh] relative py-[55px] sm:py-[66px] md:py-[80px] w-[100%] max-w-[100%] bg-cover bg-no-repeat"
      id="services"
      style={{
        backgroundImage: `url(${backgroundImages[currentSlideIndex].src})`,
      }}
    >
      <div className="div absolute top-[0] bg-bgColor w-[100%] h-[100%]"></div>
      <div className="div w-[100%] h-[100%]">
        <div className="container px-[20px] sm:flex-col text-white max-w-[480px] sm:max-w-[704px] md:max-w-[1280px] md:gap-[23px] md:px-[15px] flex flex-col relative sm:mt-[0] mx-[auto] mb-[0] sm:flex-row sm:gap-[48px] ">
          <h2 className="uppercase sm:text-[67px] sm:leading-[81px] text-[40px] font-thin leading-[56px] tracking-[-0.04em] mb-[8px] sm:text-[67px] md:text-[98px] md:leading-[118px] md:tracking-[-0.04em]">
            {services.title.split(" ")[0]}{" "}
            <span className="font-medium">{services.title.split(" ")[1]}</span>
          </h2>
          <div>
            <SwiperSlider
              handleSlideChange={handleSlideChange}
              sliderData={services.slider}
              imageArray={imageArray}
              swiperBullets={services.swiperBullets}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
