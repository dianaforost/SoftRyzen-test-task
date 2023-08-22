"use client";
import central from "/public/img/photo/central.jpg";
import left from "/public/img/photo/left.jpg";
import right from "/public/img/photo/right.jpg";
import ImageSlider from "../Slider/ImageSlider";
import Image from "next/image";

export default function GallerySection() {
  const swiperArray = [left, central, right, central];
  return (
    <section
      className="gallery-section w-[100%] max-w-[100%] h-[100dvh] bg-cover bg-no-repeat"
      id="gallery"
    >
      <div className="div relative bg-[#020F08BF] w-[100%] h-[100%]">
        <div className="container z-[1] sm:flex-col text-white max-w-[280px] sm:max-w-[704px] md:max-w-[1280px] md:gap-[0] md:px-[15px] flex flex-col relative pt-[54px] sm:mt-[0] mx-[auto] mb-[0] sm:flex-row sm:gap-[48px] sm:pt-[66px]">
          <h2 className="order-[-1] sm:mb-[12px] mb-[24px] uppercase sm:text-[67px] sm:leading-[81px] text-[40px] font-thin leading-[56px] tracking-[-0.04em] sm:text-[67px] md:text-[98px] md:leading-[118px] md:tracking-[-0.04em]">
            Our <span className="font-medium">gallery</span>
          </h2>
          <div className="sm:hidden flex flex-col gap-[24px]">
            {swiperArray.map((swiper, index) => (
              <Image
                key={index}
                src={swiper}
                className=""
                alt="Photo"
                width={280}
                height={187}
              />
            ))}
          </div>
          <ImageSlider images={swiperArray} />
        </div>
      </div>
    </section>
  );
}
