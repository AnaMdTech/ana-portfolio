import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  year: string;
  imageUrl: string;
  slug: string;
}

const INITIAL_PROJECTS: ProjectItem[] = [
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
  projects?: ProjectItem[];
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
          {projects.map((project, idx) => {
            const isEven = idx % 2 !== 0;
            return (
              <div
                key={project.id}
                className={`work-item-wrapper group ${
                  isEven ? "lg:items-end" : ""
                }`}
              >
                {/* Image Container with Full Visibility & Hover Zoom */}
                <Link
                  href={`/work/${project.slug}`}
                  className="work-img-container"
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    className="work-img"
                  />
                </Link>

                {/* Project Details & CTA Bar */}
                <div className="work-info-bar">
                  <div>
                    <h3 className="work-title">{project.title}</h3>
                    <p className="work-meta">
                      {project.role} · {project.year}
                    </p>
                  </div>

                  <div>
                    <Link
                      href={`/work/${project.slug}`}
                      className="btn-case-cta"
                    >
                      See case
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
