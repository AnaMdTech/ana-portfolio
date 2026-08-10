import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import ProjectCard from "@/components/shared/ProjectCard";
import { getProjects } from "@/actions/project-actions";

// Ensures this page always fetches fresh data from the database
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Selected Work | AnaMd",
  description:
    "Explore responsive websites, mobile apps, and UI/UX design systems created by AnaMd.",
};

export default async function WorkPage() {
  // Fetch from Supabase backend
  const projects = await getProjects();

  return (
    <section className="work-page-section">
      {/* Massive Page Heading */}
      <PageHeader accent="Selected" title="work" />

      {/* Responsive 2-Column Grid */}
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
