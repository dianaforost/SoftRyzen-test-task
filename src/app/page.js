import CareerSection from "@/sections/CareerSection/CareerSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import AboutSection from "@/sections/AboutSection/AboutSection";
import ServicesSection from "@/sections/ServicesSection/ServicesSection";
import GallerySection from "@/sections/GallerySection/GallerySection";
import ContactsSection from "@/sections/ContatcsSection/ContactsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CareerSection />
      <GallerySection />
      <ContactsSection />
    </main>
  );
}
