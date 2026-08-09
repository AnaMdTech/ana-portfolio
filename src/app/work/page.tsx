import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import ProjectCard, { ProjectData } from "@/components/shared/ProjectCard";

export const metadata: Metadata = {
  title: "Selected Work | AnaMdTech",
  description:
    "Explore responsive websites, mobile apps, and UI/UX design systems created by AnaMdTech.",
};

const WORK_PROJECTS: ProjectData[] = [
  {
    id: "1",
    title: "Burger Bite",
    role: "Web Designer & Developer",
    year: "2023",
    imageUrl: "/assets/images/work-1.png",
    slug: "burger-bite",
  },
  {
    id: "2",
    title: "SunChips",
    role: "UI/UX Designer & Web Developer",
    year: "2024",
    imageUrl: "/assets/images/work-2.png",
    slug: "sunchips",
  },
  {
    id: "3",
    title: "Nike Landing Page",
    role: "Web Development",
    year: "2025",
    imageUrl: "/assets/images/work-3.png",
    slug: "nike-landing-page",
  },
  {
    id: "4",
    title: "Natours Tour Page",
    role: "Web Development",
    year: "2025",
    imageUrl: "/assets/images/work-4.png",
    slug: "natours-tour-page",
  },
];

export default function WorkPage() {
  return (
    <section className="work-page-section">
      {/* Massive Page Heading */}
      <PageHeader accent="Selected" title="work" />

      {/* Responsive 2-Column Grid using Shared Components */}
      <div className="work-grid-container">
        {WORK_PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} variant="grid" />
        ))}
      </div>
    </section>
  );
}
