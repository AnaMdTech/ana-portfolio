import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import TechStackMarquee from "@/components/home/TechStackMarquee";
import SelectedWorkSection from "@/components/home/SelectedWorkSection";
import FaqAccordion from "@/components/home/FaqAccordion";
import { getProjects } from "@/actions/project-actions";

// Ensures your homepage always grabs the latest data from Supabase
export const dynamic = "force-dynamic";

export default async function HomePage() {
  // Fetch live projects from your database
  const projects = await getProjects();
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ServicesGrid />
      <TechStackMarquee />
      <SelectedWorkSection projects={featuredProjects} />
      <FaqAccordion />
    </div>
  );
}
