import Header from "../Header/Header";
import HeroSectionContent from "./HeroSectionContent/HeroSectionContent";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="div bg-[#020F0880]">
        <div className="md:bg-headerBg md:h-[146px] md:w-[100%]">
          <Header />
          <HeroSectionContent />
        </div>
      </div>
    </section>
  );
}
