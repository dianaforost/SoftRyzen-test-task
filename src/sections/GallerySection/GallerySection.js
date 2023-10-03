"use client";
import Image from "next/image";

import ImageSlider from "../../components/Slider/ImageSlider";
import data from "@/data/data.json";

import central from "/public/img/photo/central.jpg";
import left from "/public/img/photo/left.jpg";
import right from "/public/img/photo/right.jpg";

export default function GallerySection() {
  const { gallery } = data;
  const swiperArray = [left, central, right, central, right];
  const imageArray = [left, central, right];

  return (
    <section
      className="gallery-section min-h-[100dvh] relative py-[55px] sm:py-[66px] md:py-[80px] w-[100%] max-w-[100%] bg-cover bg-no-repeat"
      id="gallery"
    >
      <div className="div absolute top-[0] bg-bgColor w-[100%] h-[100%]"></div>
      <div className="div w-[100%] h-[100%]">
        <div className="container px-[20px] z-[1] text-center sm:flex-col text-white max-w-[480px] sm:max-w-[704px] md:max-w-[1280px] md:gap-[0] md:px-[15px] flex flex-col relative sm:mt-[0] mx-[auto] mb-[0] sm:flex-row sm:gap-[48px] ">
          <h2 className="order-[-1] sm:mb-[12px] mb-[24px] uppercase sm:text-[67px] sm:leading-[81px] text-[40px] font-thin leading-[56px] tracking-[-0.04em] sm:text-[67px] md:text-[98px] md:leading-[118px] md:tracking-[-0.04em]">
            {gallery.title.split(" ")[0]}{" "}
            <span className="font-medium"> {gallery.title.split(" ")[1]}</span>
          </h2>
          <div className="sm:hidden flex flex-col gap-[24px] items-center">
            {imageArray.map((swiper, index) => (
              <Image
                key={index}
                src={swiper}
                alt="Nature photo"
                width={280}
                height={187}
              />
            ))}
          </div>
          <ImageSlider images={swiperArray} gallery={gallery} />
        </div>
      </div>
    </section>
  );
}
