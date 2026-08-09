import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import ProjectCard from "@/components/shared/ProjectCard";
import { PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Selected Work | AnaMd",
  description:
    "Explore responsive websites, mobile apps, and UI/UX design systems created by AnaMd.",
};

export default function WorkPage() {
  return (
    <section className="work-page-section">
      {/* Massive Page Heading */}
      <PageHeader accent="Selected" title="work" />

      {/* Responsive 2-Column Grid using Shared Components */}
      <div className="work-grid-container">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} variant="grid" />
        ))}
      </div>
    </section>
  );
}
