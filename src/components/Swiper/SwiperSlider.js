"use client";
import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function SwiperSlider({
  handleSlideChange,
  sliderData,
  imageArray,
  swiperBullets,
}) {
  const swiperParams = {
    spaceBetween: "20px",
    effect: "fade",
    // fadeEffect: {
    //   crossFade: true,
    // },
    modules: [Navigation, Pagination, EffectFade],
    pagination: {
      clickable: true,
      renderBullet: function (index, className) {
        return `<a class="${className} hover:opacity-100 focus:opacity-100 transition duration-300" tabIndex=0>${swiperBullets[index]}</a>`;
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
        effect="fade"
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
                  src={imageArray[index]}
                  width={280}
                  height={213}
                  alt={`${slide.text} picture`}
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

SwiperSlider.propTypes = {
  handleSlideChange: PropTypes.func.isRequired,
  sliderData: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  imageArray: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      blurDataURL: PropTypes.string.isRequired,
      blurWidth: PropTypes.number.isRequired,
      blurHeight: PropTypes.number.isRequired,
    })
  ),
  swiperBullets: PropTypes.arrayOf(PropTypes.string).isRequired,
};
