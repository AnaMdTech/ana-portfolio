import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Selected Work | AnaMdTech",
  description:
    "Explore responsive websites, mobile apps, and UI/UX design systems created by AnaMdTech.",
};

export interface WorkProject {
  id: string;
  title: string;
  role: string;
  year: string;
  imageUrl: string;
  slug: string;
}

const WORK_PROJECTS: WorkProject[] = [
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

      {/* Responsive 2-Column Grid */}
      <div className="work-grid-container">
        {WORK_PROJECTS.map((project) => (
          <div key={project.id} className="work-card-wrapper group">
            {/* Project Image Box */}
            <Link href={`/work/${project.slug}`} className="work-card-img-box">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="work-card-img"
              />
            </Link>

            {/* Title, Role, Year & Case Study CTA Button */}
            <div className="work-card-footer">
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
        ))}
      </div>
    </section>
  );
}
