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
    <section className="bg-[#09090B] text-white min-h-screen pb-32">
      {/* Massive Page Heading */}
      <PageHeader accent="Selected" title="work" />

      {/* Responsive 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1600px] mx-auto">
        {WORK_PROJECTS.map((project) => (
          <div key={project.id} className="flex flex-col gap-8 group">
            {/* Project Image Box - object-contain ensures 0% cropping */}
            <Link
              href={`/work/${project.slug}`}
              className="relative w-full h-[320px] md:h-[400px] lg:h-[460px] bg-gradient-to-b from-[#131315] to-[#0c0c0e] rounded-3xl overflow-hidden border border-gray-800/80 transition-all duration-500 group-hover:border-gray-600 shadow-xl"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-2xl w-full cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] hover:brightness-80"
              />
            </Link>

            {/* Title, Role, Year & Case Study CTA Button */}
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center justify-between">
              <div>
                <h3 className="text-3xl lg:text-4xl mb-1.5 font-bold tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-md opacity-60 font-inter">
                  {project.role} · {project.year}
                </p>
              </div>

              <div>
                <Link
                  href={`/work/${project.slug}`}
                  className="w-full lg:w-auto md:w-auto inline-block cursor-pointer hover:bg-white hover:text-black transition-all duration-300 border border-gray-600 hover:border-white text-lg lg:text-xl font-medium rounded-full bg-white/[0.06] backdrop-blur-md py-3 lg:px-8 px-6 text-center shadow-md"
                >
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
