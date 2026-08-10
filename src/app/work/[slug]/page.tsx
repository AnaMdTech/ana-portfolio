import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug } from "@/actions/project-actions";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found | AnaMd" };
  }

  return {
    title: `${project.title} — Case Study | AnaMd`,
    description: project.overview.slice(0, 160),
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Split the overview string into an array of paragraphs wherever you pressed Enter twice
  const overviewParagraphs = project.overview
    .split("\n\n")
    .map((p: string) => p.trim())
    .filter((p: string) => p.length > 0);

  return (
    <article className="case-article">
      {/* 1. Hero Cover Section */}
      <div className="case-hero-container">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="case-hero-overlay-dark" />
        <div className="case-hero-overlay-gradient" />

        <div className="case-hero-content">
          <Link href="/work" className="case-back-link group">
            <span className="transform transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Back to all work
          </Link>
          <h1 className="case-hero-title">{project.title}</h1>
        </div>
      </div>

      {/* 2. Responsive 2-Column Case Study Content */}
      <div className="case-body-container">
        {/* Left Sidebar */}
        <aside className="case-sidebar">
          <div>
            <p className="case-sidebar-label">Client</p>
            <p className="case-sidebar-value">{project.client}</p>
          </div>
          <div>
            <p className="case-sidebar-label">Role</p>
            <p className="case-sidebar-value">{project.role}</p>
          </div>
          <div>
            <p className="case-sidebar-label">Year</p>
            <p className="case-sidebar-value">{project.year}</p>
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-case-live"
            >
              Go to live website
            </a>
          )}
        </aside>

        {/* Right Main Column */}
        <div className="case-main-content">
          {/* MAPPED OVERVIEW PARAGRAPHS */}
          {overviewParagraphs.map((paragraph: string, index: number) => (
            <p
              key={index}
              className={`case-overview-text ${index === 0 ? "text-white" : "text-gray-400"}`}
            >
              {paragraph}
            </p>
          ))}

          <div className="case-narrative-wrapper">
            <h3 className="case-section-heading mt-8">Challenges</h3>
            <p>{project.challenges}</p>

            {project.galleryImages && project.galleryImages[0] && (
              <div className="case-gallery-box">
                <Image
                  src={project.galleryImages[0]}
                  alt={`${project.title} screenshot 1`}
                  fill
                  sizes="(max-width: 768px) 100vw, 70vw"
                  className="object-cover"
                />
              </div>
            )}

            <h3 className="case-section-heading">Solution</h3>
            <p>{project.solution}</p>

            <h3 className="case-section-heading">Results</h3>
            <p>{project.results}</p>

            {project.galleryImages && project.galleryImages[1] && (
              <div className="case-gallery-box">
                <Image
                  src={project.galleryImages[1]}
                  alt={`${project.title} screenshot 2`}
                  fill
                  sizes="(max-width: 768px) 100vw, 70vw"
                  className="object-cover"
                />
              </div>
            )}

            <h3 className="case-section-heading">Conclusion</h3>
            <p>{project.conclusion}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
