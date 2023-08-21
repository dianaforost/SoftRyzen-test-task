import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import central from "/public/img/photo/central.jpg";
import left from "/public/img/photo/left.jpg";
import right from "/public/img/photo/right.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";

export default function ImageSlider({ images }) {
  return (
    <div className="hidden sm:block">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // loopedSlides={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="w-[415px]">
          <Image
            src={left}
            className="w-[415px] h-[294px] md:mx-[auto] md:w-[606px] md:h-[429px] md:inline-block"
            alt="Photo"
            width={415}
            height={294}
          />
        </SwiperSlide>
        <SwiperSlide className="w-[415px]">
          <Image
            src={central}
            className="w-[415px] h-[294px] md:mx-[auto] md:w-[606px] md:h-[429px] md:inline-block"
            alt="Photo"
            width={415}
            height={294}
          />
        </SwiperSlide>
        <SwiperSlide className="w-[415px]">
          <Image
            src={right}
            className="w-[415px] h-[294px] md:mx-[auto] md:w-[606px] md:h-[429px] md:inline-block"
            alt="Photo"
            width={415}
            height={294}
          />
        </SwiperSlide>
        <SwiperSlide className="w-[415px]">
          <Image
            src={central}
            className="w-[415px] h-[294px] md:mx-[auto] md:w-[606px] md:h-[429px] md:inline-block"
            alt="Photo"
            width={415}
            height={294}
          />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-next uppercase absolute font-thin text-[33px] leading-[40px] tracking-[0]">
        Next
      </div>
      <div className="swiper-button-prev uppercase absolute font-thin text-[33px] leading-[40px] tracking-[0]">
        Prev
      </div>
    </div>
  );
}
