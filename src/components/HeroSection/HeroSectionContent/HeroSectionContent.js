import TopLeftBorder from "@/components/icons/TopLeftBorder";
import TopRightBorder from "@/components/icons/TopRightBorder";
import BottomRightBorder from "@/components/icons/BottomRightBorder";
import BottomLeftBorder from "@/components/icons/BottomLeftBorder";

export default function HeroSectionContent() {
  return (
    <div className="container md:gap-[281px] md:px-[15px] flex flex-col relative pt-[76px] sm:mt-[0] mt-[36px] mx-[auto] mb-[0] sm:flex-row sm:gap-[48px] sm:pt-[66px]">
      <div className="sm:gap-[68px] sm:flex sm:flex-col">
        <h1 className="text uppercase text-white text-[40px] sm:text-[67px] sm:leading-[81px] sm:tracking-[-0.04em] md:text-[98px] md:leading-[119px] md:tracking-[-0.04em]">
          <span className="title font-bold">Uncover</span> carpathian’s secrets
        </h1>
        <p className="font-extralight text-[10px] text-white w-[157px] leading-[16px] pt-[24px] sm:w-[262px] sm:text-[14px]">
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
      </div>
      <div className="cont order-[0] md:flex md:flex-col md:justify-between">
        <h2 className="flex flex-col  sm:sticky absolute top-[0] right-[0] items-end uppercase text-white text-[37px]">
          <span className="relative">
            <span className="font-bold text-[37px] sm:text-[67px] md:text-[98px]">
              7
            </span>
            <span className="font-thin text-[37px] sm:text-[67px] sm:leading-[81px] sm:tracking-[0.13em] md:text-[98px] md:tracking-[0]">
              days
            </span>
          </span>
          <span className="text-[12px] top-[40px] tracking-[0.79em] absolute text-justify font-light sm:text-[14px] sm:top-[80px] sm:leading-[17px] sm:tracking-[1.85em] md:text-[16px] md:top-[120px] md:leading-[19px] md:tracking-[2.28em]">
            jouney
          </span>
        </h2>
        <div className="flex flex-col gap-[24px]">
          <p className="text-white font-extralight text-[14px] leading-[20px] pt-[24px] text-justify sm:text-[16px] w-[280px] sm:w-[230px] md:w-[294px] md:text-[18px] md:leading-[24px]">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>
          <a
            href="#contacts"
            className="text-center uppercase text-white font-bold text-[18px] leading-[48px] bg-buttonBg w-[100%] relative sm:leading-[22px] sm:py-[14px] md:py-[16px] md:text-[32px] md:leading-[39px]"
          >
            Join now
            <TopLeftBorder className="absolute top-0 left-0" />
            <TopRightBorder className="absolute top-0 right-0" />
            <BottomRightBorder className="absolute bottom-0 right-0" />
            <BottomLeftBorder className="absolute bottom-0 left-0" />
          </a>
        </div>
      </div>
    </div>
  );
}
