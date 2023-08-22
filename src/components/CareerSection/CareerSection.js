"use client";
import { whyUsList } from "./whyUsList";
import CareerForm from "./CareerForm";

export default function CareerSection() {
  return (
    <section
      className="career-section w-[100%] max-w-[100%] h-[200dvh] bg-repeat-y sm:h-[100dvh] sm:bg-cover sm:bg-no-repeat"
      id="career"
    >
      <div className="div relative bg-[#020F08BF] w-[100%] h-[100%]">
        <div className="container sm:gap-[0] sm:flex-col h-[200dvh] text-white max-w-[280px] sm:max-w-[704px] md:max-w-[1280px] md:gap-[23px] md:px-[15px] flex flex-col relative pt-[54px] sm:mt-[0] sm:pt-[64px] md:pt-[80px] mx-[auto] mb-[0] sm:flex-row">
          <h2 className="order-[-1] sm:mb-[12px] mb-[24px] uppercase sm:text-[67px] sm:leading-[81px] text-[40px] font-thin leading-[56px] tracking-[-0.04em] sm:text-[67px] md:text-[98px] md:leading-[118px] md:tracking-[-0.04em]">
            Choose <span className="font-medium">us</span>
          </h2>
          <h3 className="uppercase sm:ml-[80px] sm:mr-[auto] text-[30px] ml-[auto] mr-[39px] font-extralight leading-[36px] md:text-[36px] md:leading-[39px]">
            Why us ?
          </h3>
          <p className="sm:absolute sm:right-[0] mb-[36px] ml-[auto] order-[-1] text-[14px] leading-[20px] font-extralight w-[179px] sm:w-[221px] sm:text-[13px] sm:text-justify md:text-[18px] md:leading-[24px] md:w-[293px]">
            Your chance to join our passionate team in Carpathian tourism.
            Seeking talented professionals to share our common mission.{" "}
          </p>
          <ul className="flex flex-col gap-[16px] pt-[36px] z-[1] mb-[112px] sm:mb-[0] sm:gap-[24px] md:w-[562px]">
            {whyUsList.map((item, index) => (
              <li
                key={item.id}
                className="sm:w-[221px] md:flex md:w-[100%] md:gap-[24px]"
              >
                <h4 className="sm:text-[16px] sm:ml-[auto] sm:mr-[0] sm:text-right md:ml-[0] md:w-[253px] sm:ml-[20px] sm:w-[196px] text-[14px] font-normal leading-[20px] md:text-[18px] md:leading-[24px]  mb-[8px] w-[171px]">
                  {item.title}
                </h4>
                <p className="text-[12px] sm:w-[221px] font-extralight leading-[20px] w-[181px] text-end md:text-[12px] md:text-start md:leading-[24px] md:w-[285px]">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
          <div className="z-[1] sm:absolute sm:top-[230px] sm:right-[0] sm:w-[463px] md:left-[650px] md:w-[630px]">
            <p className="sm:inline-block mb-[24px] ml-[auto] text-[14px] leading-[20px] font-extralight w-[179px] sm:w-[221px] sm:text-[13px] sm:text-justify md:mb-[14px] md:text-[17px] md:leading-[24px] md:w-[234px]">
              Don`t miss your opportunity! Fill out the form right now and join
              our team!
            </p>
            <CareerForm />
          </div>
        </div>
      </div>
    </section>
  );
}
