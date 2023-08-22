"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { swiperBullets } from "./swiperBullets";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function SwiperSlider({ handleSlideChange, sliderData }) {
  const swiperParams = {
    spaceBetween: "20px",
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    modules: [Navigation, Pagination, EffectFade],
    pagination: {
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${swiperBullets[index]}</span>`;
      },
      on: {
        slideChange: function (swiper) {
          handleSlideChange(swiper.realIndex);
        },
      },
    },
  };

  return (
    <div className="swiper-container h-[100dvh]">
      <Swiper
        {...swiperParams}
        onSlideChange={(swiper) => {
          handleSlideChange(swiper.realIndex);
        }}
      >
        {sliderData.map((slide, index) => {
          const [month, day] = slide.date.split("/");
          return (
            <SwiperSlide key={index}>
              <div className="swiper-content h-[100dvh]">
                <p className="text-[43px] font-thin text-grayColor text-end mb-[16px] sm:text-[67px] sm:leading-[78px] sm:top-[-140px] sm:absolute sm:right-[0]">
                  <span className="font-extralight text-white">{month}/</span>
                  {day}
                </p>
                <Image
                  className="sm:inline-block mb-[12px] sm:w-[463px] sm:h-[370px] md:w-[607px] md:h-[429px]"
                  src={slide.image}
                  width={280}
                  height={213}
                  alt="Swiper photo"
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
