"use client";

import CareerForm from "../../components/CareerForm/CareerForm";
import data from "@/data/data.json";

export default function CareerSection() {
  const { career } = data;

  return (
    <>
      <section
        className="career-section relative py-[55px] sm:py-[66px] md:py-[80px] w-[100%] max-w-[100%] bg-cover bg-no-repeat sm:bg-cover sm:bg-no-repeat"
        id="career"
      >
        <div className="div absolute top-[0] bg-bgColor w-[100%] h-[100%]"></div>
        <div className="div w-[100%] h-[100%]">
          <div className="container px-[20px] sm:gap-[0] sm:flex-col text-white items-center sm:items-baseline max-w-[480px] sm:max-w-[704px] md:max-w-[1280px] md:gap-[23px] md:px-[15px] flex flex-col relative sm:mt-[0] mx-[auto] mb-[0]">
            <h2 className="order-[-1] sm:mb-[12px] mb-[24px] uppercase sm:text-[67px] sm:leading-[81px] text-[40px] font-thin leading-[56px] tracking-[-0.04em] sm:text-[67px] md:text-[98px] md:leading-[118px] md:tracking-[-0.04em]">
              {career.title.split(" ")[0]}
              <span className="font-medium"> {career.title.split(" ")[1]}</span>
            </h2>
            <h3 className="uppercase sm:ml-[80px] sm:mr-[auto] text-[30px] ml-[auto] mr-[39px] font-extralight leading-[36px] md:text-[36px] md:leading-[39px]">
              {career.subtitle}
            </h3>
            <p className="sm:absolute sm:right-[20px] mb-[36px] ml-[auto] order-[-1] text-[14px] leading-[20px] font-extralight w-[179px] sm:w-[221px] sm:text-[13px] sm:text-justify md:text-[18px] md:leading-[24px] md:w-[293px]">
              {career.description}
            </p>
            <ul className="flex flex-col gap-[16px] pt-[36px] z-[1] mb-[56px] sm:mb-[0] sm:gap-[24px] md:w-[562px]">
              {career.whyUsList.map((item, index) => (
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
            <div className="hidden sm:block z-[1] sm:absolute sm:top-[175px] md:top-[115px] sm:right-[-20px] sm:w-[463px] md:right-[50px] md:w-[630px] top-[52%]">
              <p className="sm:inline-block mb-[24px] ml-[auto] text-[14px] leading-[20px] font-extralight w-[179px] sm:w-[221px] sm:text-[13px] sm:text-justify md:mb-[14px] md:text-[17px] md:leading-[24px] md:w-[234px]">
                {career.formDescription}
              </p>
              <CareerForm form={career.form} />
            </div>
          </div>
        </div>
      </section>
      <section
        className="sm:hidden career-section relative py-[55px] sm:py-[66px] md:py-[80px] w-[100%] max-w-[100%] bg-cover bg-no-repeat sm:bg-cover sm:bg-no-repeat"
        id="career"
      >
        <div className="div absolute top-[0] bg-bgColor w-[100%] h-[100%]"></div>
        <div className="div overflow-hidden w-[100%] h-[100%]">
          <div className="container px-[20px] sm:gap-[0] sm:flex-col text-white items-center sm:items-baseline max-w-[480px] sm:max-w-[704px] md:max-w-[1280px] md:gap-[23px] md:px-[15px] flex flex-col relative sm:mt-[0] mx-[auto] mb-[0]">
            <div className="z-[1] sm:absolute sm:top-[230px] sm:right-[0] sm:w-[463px] md:left-[650px] md:w-[630px] top-[52%]">
              <p className="sm:inline-block mb-[24px] ml-[auto] text-[14px] leading-[20px] font-extralight w-[179px] sm:w-[221px] sm:text-[13px] sm:text-justify md:mb-[14px] md:text-[17px] md:leading-[24px] md:w-[234px]">
                {career.formDescription}
              </p>
              <CareerForm form={career.form} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
