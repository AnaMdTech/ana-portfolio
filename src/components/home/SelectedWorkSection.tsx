"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/shared/ProjectCard";
import { ProjectData } from "@/types";

export default function SelectedWorkSection({
  projects,
}: {
  projects: ProjectData[]; // Removed the static fallback
}) {
  return (
    <section className="work-section overflow-x-hidden">
      <div className="w-full">
        {/* Animated Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="work-header-subtitle">Let me show you</p>
          <h2 className="work-header-title">Selected work</h2>
        </motion.div>

        {/* Project List */}
        <div className="work-list-wrapper w-full">
          {projects.map((project, idx) => {
            const isOdd = idx % 2 !== 0;
            return (
              <ProjectCard
                key={project.id}
                project={project}
                variant="homepage"
                className={isOdd ? "lg:items-end" : "lg:items-start"}
                slideDirection={isOdd ? "right" : "left"}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
