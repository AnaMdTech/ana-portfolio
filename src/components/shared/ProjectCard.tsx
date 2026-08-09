"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectData } from "@/types";

export interface ProjectCardProps {
  project: ProjectData;
  variant?: "homepage" | "grid";
  className?: string;
  slideDirection?: "left" | "right";
}

export default function ProjectCard({
  project,
  variant = "grid",
  className = "",
  slideDirection = "left",
}: ProjectCardProps) {
  const isHome = variant === "homepage";

  // Negative offset for left slide, positive offset for right slide
  const initialX = slideDirection === "left" ? -60 : 60;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
    </motion.div>
  );
}
