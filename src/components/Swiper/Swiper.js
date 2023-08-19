import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import firstSlider from "../../../public/img/photo/big-first-slider.jpg";
import secondSlider from "../../../public/img/photo/second-slider.jpg";
import thirdSlider from "../../../public/img/photo/third-slider.jpg";
import fourthSlider from "../../../public/img/photo/fourth-slider.jpg";
import fifthSlider from "../../../public/img/photo/fifth-slider.jpg";

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
const swiperBullets = [
  "ATVs Traveling",
  "Rock climbing",
  "Hot air ballooning",
  "Skydiving",
  "Rafting",
];

export default function SwiperSlider() {
  const swiperParams = {
    spaceBetween: "20px",
    effect: "fade",
    modules: [Navigation, Pagination],
    pagination: {
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${swiperBullets[index]}</span>`;
      },
    },
  };

  return (
    <div className="swiper-container h-[100dvh]">
      <Swiper {...swiperParams}>
        {sliderData.map((slide, index) => {
          const [month, day] = slide.date.split("/");
          return (
            <SwiperSlide
              key={index}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="swiper-content h-[100dvh]">
                <p className="text-[43px] font-thin text-[#FFFFFF33] text-end mb-[16px] sm:text-[67px] sm:leading-[78px] sm:top-[-140px] sm:absolute sm:right-[0]">
                  <span className="font-extralight text-white">{month}/</span>
                  {day}
                </p>
                <Image
                  className="sm:inline-block mb-[12px] sm:w-[463px] sm:h-[370px] md:w-[607px] md:h-[429px]"
                  src={slide.image}
                  width={280}
                  height={213}
                  alt="Photo"
                />
                <p className="swiper-title md:top-[0] md:right-[105px] text-[12px] font-extralight leading-[24px] tracking-[0.2em] text-right mb-[24px] sm:absolute sm:top-[197px] sm:left-[483px]">
                  {slide.text}
                </p>
                <p className="swiper-description text-[14px] font-extralight leading-[20px] tracking-[0em] pt-[224px] sm:pt-[0] sm:w-[221px] sm:absolute sm:top-[255px] sm:left-[483px] sm:text-[13px] sm:text-justify sm:h-[120px] md:w-[294px] md:h-[168px] md:text-[18px] md:leading-[24px] md:left-[auto] md:right-[0] md:top-[268px]">
                  {slide.description}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
