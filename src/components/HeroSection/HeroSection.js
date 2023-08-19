import Header from "../Header/Header";
import HeroSectionContent from "./HeroSectionContent/HeroSectionContent";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="div bg-[#020F0880]">
        <div className="w-[100%] h-[287px] sm:h-[288px] bg-headerBg md:bg-none">
          <Header />
          <HeroSectionContent />
        </div>
      </div>
    </section>
  );
}
