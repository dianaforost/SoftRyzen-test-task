"use client";
import Image from "next/image";
import image from "../../../public/img/photo/first-slider.jpg";
import SwiperSlider from "../Swiper/Swiper";
export default function ServicesSection() {
  return (
    <section className="third-section" id="services">
      <div className="div">
        <div className="w-[100%] h-[247px] md:h-[257px] bg-headerBg">
          <div className="container sm:flex-col text-white max-w-[280px] sm:max-w-[704px] md:max-w-[1280px] md:gap-[23px] md:px-[15px] flex flex-col relative pt-[54px] sm:mt-[0] sm:pt-[64px] md:pt-[80px] mx-[auto] mb-[0] sm:flex-row sm:gap-[48px] sm:pt-[66px]">
            <h2 className="uppercase sm:text-[67px] sm:leading-[81px] text-[40px] font-thin leading-[56px] tracking-[-0.04em] mb-[8px] sm:text-[67px] md:text-[98px] md:leading-[118px] md:tracking-[-0.04em]">
              We <span className="font-medium">offer</span>
            </h2>
            <div>
              <SwiperSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
