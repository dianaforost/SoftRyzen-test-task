import HeroSection from "@/components/HeroSection/HeroSection";
import SecSection from "@/components/SecSection/SecSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <SecSection />
      <ServicesSection />
    </main>
  );
}
