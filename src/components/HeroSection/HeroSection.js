import Header from "../Header/Header";
import HeroSectionContent from "./HeroSectionContent/HeroSectionContent";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="div">
        <Header />
        <HeroSectionContent />
      </div>
    </section>
  );
}
