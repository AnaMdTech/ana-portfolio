import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import TechStackMarquee from "@/components/home/TechStackMarquee";
import SelectedWorkSection from "@/components/home/SelectedWorkSection";
import FaqAccordion from "@/components/home/FaqAccordion";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ServicesGrid />
      <TechStackMarquee />
      <SelectedWorkSection />
      <FaqAccordion />
    </div>
  );
}
