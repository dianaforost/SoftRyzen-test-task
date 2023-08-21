"use client";
import central from "/public/img/photo/central.jpg";
import left from "/public/img/photo/left.jpg";
import right from "/public/img/photo/right.jpg";
import ImageSlider from "../Slider/Slider";
import Image from "next/image";

export default function GallerySection() {
  const swiperArray = [central, left, right];
  return (
    <section className="fifth-section" id="gallery">
      <div className="div">
        <div className="container sm:flex-col text-white max-w-[280px] sm:max-w-[704px] md:max-w-[1280px] md:gap-[0] md:px-[15px] flex flex-col relative pt-[54px] sm:mt-[0] mx-[auto] mb-[0] sm:flex-row sm:gap-[48px] sm:pt-[66px]">
          <h2 className="order-[-1] sm:mb-[12px] mb-[24px] uppercase sm:text-[67px] sm:leading-[81px] text-[40px] font-thin leading-[56px] tracking-[-0.04em] sm:text-[67px] md:text-[98px] md:leading-[118px] md:tracking-[-0.04em]">
            Our <span className="font-medium">gallery</span>
          </h2>
          <div className="sm:hidden flex flex-col gap-[24px]">
            <Image
              src={left}
              className=""
              alt="Photo"
              width={280}
              height={187}
            />
            <Image
              src={central}
              className=""
              alt="Photo"
              width={280}
              height={187}
            />
            <Image
              src={right}
              className=""
              alt="Photo"
              width={280}
              height={187}
            />
          </div>
          <ImageSlider className={""} images={swiperArray} />
        </div>
      </div>
    </section>
  );
}
