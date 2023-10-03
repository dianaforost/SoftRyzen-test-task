import data from "@/data/data.json";

export default function AboutSection() {
  const { about } = data;
  const { title, benefits, description, text } = about;

  return (
    <section
      className="about-section min-h-[100dvh] relative py-[55px] sm:py-[66px] md:py-[80px] w-[100%] max-w-[100%] bg-cover bg-no-repeat"
      id="about"
    >
      <div className="div absolute top-[0] bg-bgColor w-[100%] h-[100%]"></div>
      <div className="div w-[100%] h-[100%]">
        <div className="container px-[20px] md:h-[100vh] z-[1] max-w-[480px] sm:block sd:max-w-[440px] sm:max-w-[704px] md:max-w-[1280px] max-w-[280px] text-white md:gap-[281px] md:px-[15px] flex flex-col relative sm:mt-[0] mx-[auto] mb-[0] sm:flex-row sm:gap-[48px]">
          <h2 className="uppercase text-[40px] font-thin leading-[56px] tracking-[-0.04em] mb-[8px] sm:text-[67px] md:text-[98px] md:leading-[118px] md:tracking-[-0.04em]">
            {title[0]} <span className="font-medium">{title[1]}</span>
          </h2>
          <div className="sm:w-[100%]">
            <p className="font-extralight text-[14px] leading-[20px] w-[180px] mb-[20px] sm:ml-[auto] md:ml-[50%] sm:text-[16px] sm:w-[220px]">
              <span className="font-normal">{text.first[0]}</span>{" "}
              {text.first[1]}
            </p>
            <p className="font-extralight text-[14px] leading-[20px] w-[180px] mb-[40px] sm:ml-[auto] md:ml-[50%] sm:text-[16px] sm:w-[220px]">
              <span className="font-normal">{text.second[0]}</span>{" "}
              {text.second[1]}
            </p>
          </div>
          <div className="sm:w-[100%] md:flex md:flex-row-reverse md:justify-between md:w-[1230px]">
            <div className="flex flex-col items-end mb-[40px] sm:items-start md:inline-block md:w-[296px]">
              <p className="font-normal text-[14px] w-[180px] uppercase sm:text-[16px] sm:w-[221px]">
                {benefits[0]}
              </p>
              <p className="font-normal text-[14px] w-[180px] text-right uppercase sm:text-[16px] sm:w-[221px]">
                {benefits[1]}
              </p>
              <p className="font-extralight text-[14px] sm:text-[16px] tracking-[-0.01em] sm:tracking-[0.02em] sm:w-[221px]">
                {benefits[2]}
              </p>
            </div>
            <p className="font-extralight text-[14px] leading-[20px] sm:max-w-[463px] sm:ml-[auto] sm:text-[16px] md:ml-[0]">
              <span className="font-normal">{description[0]}</span>{" "}
              {description[1]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
