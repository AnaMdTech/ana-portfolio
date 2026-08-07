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
    <section className="bg-[#09090B] text-white px-8 pt-12 lg:px-32">
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-blue-600 text-lg lg:text-2xl mb-1.5 font-medium">
            Let me show you
          </p>
          <h2 className="text-6xl lg:text-7xl font-bold">Selected work</h2>
        </div>

        <div className="flex flex-col gap-16">
          {projects.map((project, idx) => {
            const isEven = idx % 2 !== 0;
            return (
              <div
                key={project.id}
                className={`flex flex-col gap-6 ${isEven ? "lg:items-end" : ""}`}
              >
                <div className="relative w-full md:max-w-3xl h-[400px] bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] hover:brightness-80"
                  />
                </div>

                <div className="flex flex-col gap-4 md:justify-between md:flex-row md:items-center md:w-[700px] lg:max-w-3xl w-full">
                  <div>
                    <h3 className="text-3xl mb-1 font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-lg opacity-50">
                      {project.role} · {project.year}
                    </p>
                  </div>
                  <div>
                    <Link
                      href={`/work/${project.slug}`}
                      className="w-full md:w-auto inline-block cursor-pointer hover:bg-transparent transition-all duration-300 border-2 border-gray-500 text-xl rounded-full bg-[rgba(255,255,255,0.1)] backdrop-blur py-3 lg:px-8 px-6 text-center"
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
