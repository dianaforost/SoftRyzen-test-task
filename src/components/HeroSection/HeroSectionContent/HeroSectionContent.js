import TopLeftBorder from "@/components/icons/TopLeftBorder";
import TopRightBorder from "@/components/icons/TopRightBorder";
import BottomRightBorder from "@/components/icons/BottomRightBorder";
import BottomLeftBorder from "@/components/icons/BottomLeftBorder";

export default function HeroSectionContent() {
  return (
    <div className="container flex flex-col">
      <div className="pt-[24px]">
        <h1 className="text uppercase text-white text-[40px]">
          <span className="title font-bold">Uncover</span> carpathian’s secrets
        </h1>
        <p className="font-extralight text-[10px] text-white w-[157px] leading-[16px] pt-[24px]">
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
      </div>
      <div className="cont">
        <h2 className="flex flex-col items-end uppercase text-white text-[37px] pt-[36px]">
          <span className="relative">
            <span className="font-bold">7</span>
            <span className="font-thin">days</span>
          </span>
          <span className="text-[12px] tracking-[0.79em] absolute top-[145px] text-justify font-light">
            jouney
          </span>
        </h2>
      </div>
      <div className="flex flex-col gap-[24px]">
        <p className="text-white font-extralight text-[14px] leading-[20px] pt-[24px] text-justify">
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </p>
        <button className="uppercase text-white font-bold text-[18px] leading-[48px] bg-buttonBg w-[100%] relative">
          Join now
          <TopLeftBorder className="absolute top-0 left-0" />
          <TopRightBorder className="absolute top-0 right-0" />
          <BottomRightBorder className="absolute bottom-0 right-0" />
          <BottomLeftBorder className="absolute bottom-0 left-0" />
        </button>
      </div>
    </div>
  );
}
