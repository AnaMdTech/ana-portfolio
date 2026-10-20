import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import ProjectCard from "@/components/shared/ProjectCard";
import { getProjects } from "@/actions/project-actions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Selected Work | AnaMd",
  description:
    "Explore responsive websites, mobile apps, and UI/UX design systems created by AnaMd.",
};

export default async function WorkPage() {
  const projects = await getProjects();

  return (
    <section className="work-page-section">
      <PageHeader accent="Selected" title="work" />

      <div className="work-grid-container">
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            variant="grid"
            slideDirection={idx % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </section>
  );
}
