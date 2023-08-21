"use client";
import Image from "next/image";
// import image from "../../../public/img/photo/first-slider.jpg";
import SwiperSlider from "../Swiper/Swiper";
import { useState } from "react";
import firstSlider from "../../../public/img/photo/big-first-slider.jpg";
import secondSlider from "../../../public/img/photo/second-slider.jpg";
import thirdSlider from "../../../public/img/photo/third-slider.jpg";
import fourthSlider from "../../../public/img/photo/fourth-slider.jpg";
import fifthSlider from "../../../public/img/photo/fifth-slider.jpg";
import firstBg from "../../../public/img/desktop-thirdBg1x.jpg";
import secongBg from "../../../public/img/secondBg.jpg";
import thirdBg from "../../../public/img/thirdBg.jpg";
import fourthBg from "../../../public/img/fourthBg.jpg";
import fifthBg from "../../../public/img/fifthBg.jpg";
export default function ServicesSection() {
  const sliderData = [
    {
      date: "01/05",
      image: firstSlider,
      text: "Feel the adrenaline rush",
      description:
        "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
    },
    {
      date: "02/05",
      image: secondSlider,
      text: "Destroy your limitations",
      description:
        "Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.",
    },
    {
      date: "03/05",
      image: thirdSlider,
      text: "Get Inspired",
      description:
        "Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.",
    },
    {
      date: "04/05",
      image: fourthSlider,
      text: "Overcome your fears",
      description:
        "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
    },
    {
      date: "05/05",
      image: fifthSlider,
      text: "Trust the flow",
      description:
        "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
    },
  ];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const handleSlideChange = (index) => {
    setCurrentSlideIndex(index);
  };
  const backgroundImages = [firstBg, secongBg, thirdBg, fourthBg, fifthBg];
  return (
    <section
      className="third-section"
      id="services"
      style={{
        backgroundImage: `url(${backgroundImages[currentSlideIndex].src})`,
      }}
    >
      <div className="div relative bg-[#020F08BF]">
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
