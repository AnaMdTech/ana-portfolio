import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ProjectData {
  id: string;
  title: string;
  role: string;
  year: string;
  imageUrl: string;
  slug: string;
}

export interface ProjectCardProps {
  project: ProjectData;
  /** "homepage" uses edge-hugging widths; "grid" uses responsive fluid widths */
  variant?: "homepage" | "grid";
  /** Pass extra layout classes (like lg:items-start for staggering) */
  className?: string;
}

export default function ProjectCard({
  project,
  variant = "grid",
  className = "",
}: ProjectCardProps) {
  const isHome = variant === "homepage";

  return (
    <div
      className={`group ${
        isHome ? "work-item-wrapper" : "work-card-wrapper"
      } ${className}`}
    >
      {/* Image Container */}
      <Link
        href={`/work/${project.slug}`}
        className={isHome ? "work-img-container" : "work-card-img-box"}
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 840px"
          className={isHome ? "work-img" : "work-card-img"}
        />
      </Link>

      {/* Project Details & CTA Bar */}
      <div className={isHome ? "work-info-bar" : "work-card-footer"}>
        <div>
          <h3 className="work-title">{project.title}</h3>
          <p className="work-meta">
            {project.role} · {project.year}
          </p>
        </div>

        <div>
          <Link href={`/work/${project.slug}`} className="btn-case-cta">
            See case
          </Link>
        </div>
      </div>
    </div>
  );
}
