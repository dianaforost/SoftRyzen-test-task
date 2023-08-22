import CareerSection from "@/components/CareerSection/CareerSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import GallerySection from "@/components/GallerySection/GallerySection";
import ContactsSection from "@/components/ContatcsSection/ContactsSection";

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
