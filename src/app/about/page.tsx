import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ana Md | Full-Stack Developer & Founder",
  description:
    "Learn about Ana Md, a full-stack software developer, digital creator, and tech entrepreneur from Addis Ababa, Ethiopia.",
};

const PILLARS = [
  {
    title: "Full-Stack & Mobile Mastery",
    description:
      "From responsive Next.js web applications to cross-platform iOS and Android apps using Expo and React Native, I build scalable systems across every screen.",
  },
  {
    title: "Product-Minded Execution",
    description:
      "As the founder of ANAMDTECH Solutions, I don’t just write code—I design with business metrics, user retention, and long-term product scalability in mind.",
  },
  {
    title: "Disciplined Engineering",
    description:
      "I prioritize clean architecture, accessible UI/UX design systems, and rock-solid performance optimization so your users get a flawless experience.",
  },
];

export default function AboutPage() {
  return (
    <section className="bg-[#09090B] text-white min-h-screen pb-32">
      {/* 1. Page Header & Editorial Bio */}
      <div className="flex flex-col justify-between md:flex-row gap-10 lg:px-10 max-w-[1280px] md:px-[50px] pt-32 md:pt-40 px-6 pb-20 xl:pt-44 xl:pb-28 xl:px-0 xl:gap-24 xl:mx-auto">
        <h1 className="lg:w-1/2 text-[80px] leading-[80px] md:text-[110px] md:leading-[110px] lg:text-[130px] lg:leading-[120px] xl:text-[160px] xl:leading-[150px] font-bold tracking-tight">
          About
        </h1>
        <div className="lg:w-1/2 flex flex-col gap-6">
          <p className="text-xl md:text-2xl leading-relaxed lg:text-3xl lg:leading-normal text-gray-200 font-medium">
            Hey, I’m Ana Mohammed, a full-stack software developer, digital
            creator, and tech founder from{" "}
            <span className="text-white font-semibold">
              Adama, Ethiopia
            </span>
            .
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-400">
            I specialize in modern web architectures and mobile application
            development, blending creative aesthetics with rigorous engineering
            to craft seamless digital experiences. Driven by a disciplined
            routine and an obsession with clean code, I build software that not
            only looks exceptional but performs reliably at scale.
          </p>
        </div>
      </div>

      {/* 2. Primary Portrait / Visual Showcase - FIXED HEAD CROPPING */}
      <div className="flex flex-col gap-14 mx-auto px-6 max-w-[900px] items-center">
        {/* Adjusted aspect ratio (max-w-[760px] h-[550px] md:h-[780px]) so vertical portraits fit naturally */}
        <div className="relative w-full max-w-[760px] h-[550px] md:h-[780px] rounded-3xl overflow-hidden border border-gray-800/80 shadow-[0_16px_50px_rgba(0,0,0,0.7)] group bg-[#131315]">
          <Image
            src="/assets/images/about-img.png"
            alt="Ana Md - Software Developer from Ethiopia"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 760px"
            /* Changed object-center to object-top so your head & face are always anchored in frame */
            className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/70 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Founder Quote / Philosophy */}
        <blockquote className="text-center max-w-[840px]">
          <p className="text-2xl leading-relaxed md:text-3xl md:leading-snug font-medium text-gray-100">
            &ldquo;Armed with a keen eye for aesthetics and a deep understanding
            of full-stack development, I craft high-performing web and mobile
            experiences that turn ambitious concepts into digital
            reality.&rdquo;
          </p>
        </blockquote>
      </div>

      {/* 3. Why Work With Me? (Value Pillars Grid) */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 xl:px-0 pt-32">
        <div className="border-t border-gray-800 pt-16">
          <p className="text-blue-500 text-lg lg:text-xl font-medium mb-3 tracking-wide">
            Why work with me
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-16">
            What I bring to your product
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#131315] border border-gray-800/80 rounded-3xl p-8 lg:p-10 flex flex-col justify-between hover:border-gray-600 transition-all duration-300 shadow-lg"
              >
                <div>
                  <span className="text-blue-500 font-mono text-sm block mb-6">
                    0{idx + 1} //
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Bottom Call-to-Action Bar */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 xl:px-0 pt-28 text-center">
        <div className="bg-gradient-to-r from-blue-900/20 via-indigo-900/10 to-[#131315] border border-gray-800 rounded-3xl p-10 md:p-16 flex flex-col items-center gap-8">
          <h3 className="text-3xl md:text-5xl font-bold max-w-2xl">
            Have a web or mobile project in mind?
          </h3>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl">
            Whether you need an interactive Next.js web application or a
            cross-platform mobile app, let’s build it right from day one.
          </p>
          <Link
            href="/contact"
            className="cursor-pointer hover:bg-white hover:text-black transition-all duration-300 border-2 border-gray-500 hover:border-white text-lg lg:text-xl font-medium rounded-full bg-white/[0.08] backdrop-blur-md py-3.5 px-9 text-center shadow-lg"
          >
            Get in touch with Ana
          </Link>
        </div>
      </div>
    </section>
  );
}
