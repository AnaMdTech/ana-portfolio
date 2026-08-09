import React from "react";
import ProjectCard, { ProjectData } from "@/components/shared/ProjectCard";

const INITIAL_PROJECTS: ProjectData[] = [
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
];

export default function SelectedWorkSection({
  projects = INITIAL_PROJECTS,
}: {
  projects?: ProjectData[];
}) {
  return (
    <section className="work-section">
      <div className="w-full">
        {/* Section Header */}
        <div>
          <p className="work-header-subtitle">Let me show you</p>
          <h2 className="work-header-title">Selected work</h2>
        </div>

        {/* Project List */}
        <div className="work-list-wrapper w-full">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="homepage"
              // Keep the alternating left/right alignment
              className={idx % 2 !== 0 ? "lg:items-end" : "lg:items-start"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
