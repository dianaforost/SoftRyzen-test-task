import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

export default function ImageSlider({ images, gallery }) {
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
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              className="w-[415px] md:mx-[auto] md:w-[606px] md:h-[429px] md:inline-block"
              alt="Mountain photography"
              width={415}
              height={294}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="swiper-button-next uppercase absolute font-thin text-[33px] leading-[40px] tracking-[0] transition duration-300">
        {gallery.slider.btnNext}
      </button>
      <button className="swiper-button-prev uppercase absolute font-thin text-[33px] leading-[40px] tracking-[0] transition duration-300">
        {gallery.slider.btnPrev}
      </button>
    </div>
  );
}

ImageSlider.propTypes = {
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
  gallery: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slider: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};
