import Header from "../Header/Header";
import HeroSectionContent from "./HeroSectionContent/HeroSectionContent";

export default function HeroSection() {
  return (
    <section className="hero-section w-[100%] max-w-[100%] h-[100dvh] bg-cover bg-no-repeat">
      <div className="div bg-[#020F0880] w-[100%] h-[100%]">
        <div className="md:bg-headerBg md:h-[146px] md:w-[100%]">
          <Header />
          <HeroSectionContent />
        </div>
      </div>
    </section>
  );
}
