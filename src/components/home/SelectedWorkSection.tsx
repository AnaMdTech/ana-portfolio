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
    <section className="bg-[#09090B] text-white px-8 pt-16 pb-20 lg:px-32">
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div>
          <p className="text-blue-600 text-lg lg:text-2xl mb-2 font-medium tracking-wide">
            Let me show you
          </p>
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tight">
            Selected work
          </h2>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-20">
          {projects.map((project, idx) => {
            const isEven = idx % 2 !== 0;
            return (
              <div
                key={project.id}
                className={`flex flex-col gap-6 group ${
                  isEven ? "lg:items-end" : ""
                }`}
              >
                {/* Image Container with Full Visibility & Hover Zoom */}
                <Link
                  href={`/work/${project.slug}`}
                  className="relative w-full md:max-w-3xl h-[320px] md:h-[420px] lg:h-[480px] bg-gradient-to-b from-[#131315] to-[#0d0d0f] rounded-3xl overflow-hidden border border-gray-800/80 transition-all duration-500 group-hover:border-gray-600 shadow-xl"
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    className="rounded-2xl w-full cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] hover:brightness-80"
                  />
                </Link>

                {/* Project Details & CTA Bar */}
                <div className="flex flex-col gap-4 md:justify-between md:flex-row md:items-center md:w-[700px] lg:max-w-3xl w-full px-2">
                  <div>
                    <h3 className="text-3xl lg:text-4xl mb-1.5 font-bold tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-lg opacity-60 font-inter">
                      {project.role} · {project.year}
                    </p>
                  </div>

                  <div>
                    <Link
                      href={`/work/${project.slug}`}
                      className="w-full md:w-auto inline-block cursor-pointer hover:bg-white hover:text-black transition-all duration-300 border-2 border-gray-600 hover:border-white text-lg lg:text-xl font-medium rounded-full bg-white/[0.05] backdrop-blur-md py-3 lg:px-9 px-7 text-center shadow-md"
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
