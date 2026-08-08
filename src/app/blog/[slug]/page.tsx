import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export interface BlogDetail {
  title: string;
  date: string;
  readTime: string;
  category: string;
  heroImage: string;
  leadParagraph: string;
  content: string[];
  takeaway: string;
}

const BLOG_CONTENT: Record<string, BlogDetail> = {
  "why-expo-react-native-for-mobile": {
    title:
      "Why We Built Our Latest Mobile Applications Using Expo & React Native",
    date: "August 2026",
    readTime: "6 min read",
    category: "Mobile Dev",
    heroImage: "/assets/images/work-1.png",
    leadParagraph:
      "In modern mobile engineering, shipping cross-platform apps without sacrificing native performance is the ultimate objective. Using Expo along with React Native has transformed how we structure, test, and deploy applications across iOS and Android.",
    content: [
      "By leveraging Expo Application Services (EAS), we automate cloud builds and over-the-air updates, drastically shortening feedback loops during active sprints. Instead of waiting hours for local Xcode or Android Studio compilations, remote builds allow us to test production APKs and iOS bundles seamlessly.",
      "Whether configuring floating navigation layouts or integrating complex analytics SDKs, the React Native ecosystem provides the flexibility needed to scale enterprise-grade applications reliably. Modern Expo tooling removes the traditional friction of React Native upgrades, allowing engineers to focus entirely on user experience and business logic.",
      "When evaluating technologies for ANAMDTECH Solutions, the ability to maintain a single TypeScript codebase across web, Android, and iOS gave us an undeniable velocity advantage without compromising UI responsiveness.",
    ],
    takeaway:
      "Expo and React Native are no longer 'just for simple apps'—they provide the tooling, speed, and native capabilities required to build serious production software at scale.",
  },
  "disciplined-developer-deep-work-routine": {
    title: "The Disciplined Developer: Structuring Deep Work Without Burnout",
    date: "July 2026",
    readTime: "5 min read",
    category: "Engineering Culture",
    heroImage: "/assets/images/work-2.png",
    leadParagraph:
      "High-output software engineering isn't about sitting in front of a terminal for twelve hours a day. It is about cognitive clarity, structured boundaries, and consistent recovery.",
    content: [
      "Establishing strict digital cut-offs in the evening, dedicating uninterrupted morning blocks to complex system design, and maintaining physical training splits creates long-term professional resilience. When you protect your morning hours from reactive messaging, you enter a state of deep flow where your best code is written.",
      "Discipline in your personal schedule directly reflects in the cleanliness, testability, and architecture of the codebases you maintain. A chaotic schedule often yields brittle code, whereas an intentional routine fosters clear engineering decisions.",
      "By separating shallow administrative tasks from deep debugging sessions, developers can consistently ship complex features without experiencing creative burnout.",
    ],
    takeaway:
      "Your physical routine and digital boundaries are part of your engineering toolset. Master your schedule to master your codebase.",
  },
  "scalable-ui-design-systems-tailwind-v4": {
    title:
      "Designing Scalable UI Systems with Tailwind CSS v4 & Next.js App Router",
    date: "July 2026",
    readTime: "8 min read",
    category: "Frontend",
    heroImage: "/assets/images/work-3.png",
    leadParagraph:
      "Tailwind CSS v4 introduces a CSS-first configuration architecture that eliminates cumbersome JavaScript config files and accelerates styling pipelines.",
    content: [
      "When paired with React Server Components in the Next.js App Router, modular utility classes allow developers to construct complex UI cards, glassmorphic headers, and responsive layouts with zero layout shift.",
      "Maintaining a clear visual hierarchy and predictable class structures ensures that design systems remain accessible and easy to scale across expanding engineering teams.",
      "By organizing design tokens directly inside CSS layers, Tailwind v4 allows full-stack applications to maintain consistent color palettes, typography scaling, and dark-mode themes without runtime overhead.",
    ],
    takeaway:
      "CSS-first token configuration in Tailwind v4 gives React developers the speed of utility classes with the clean organization of enterprise design systems.",
  },
  "architecting-multi-tenant-platforms": {
    title:
      "From Concept to Production: Architecting Multi-Tenant Platforms at ANAMDTECH",
    date: "June 2026",
    readTime: "7 min read",
    category: "System Architecture",
    heroImage: "/assets/images/work-4.png",
    leadParagraph:
      "Architecting applications for production requires looking beyond local development servers. Multi-tenant web applications demand rigorous database schema planning, robust role-based authentication, and optimized data fetching.",
    content: [
      "At ANAMDTECH Solutions, we approach every build by first mapping user journeys and identifying potential scalability bottlenecks before writing a single API endpoint. A well-planned PostgreSQL schema saves weeks of refactoring down the road.",
      "This product-minded foundation ensures that applications remain fast, secure, and intuitive from initial prototype to production launch.",
      "Whether designing custom tenant isolation tables or deploying automated edge caching, every architectural decision should directly serve the user's need for speed and reliability.",
    ],
    takeaway:
      "Great system architecture is invisible to the user—it simply feels instantaneous, secure, and effortless to navigate.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_CONTENT[slug];

  if (!post) {
    return { title: "Article Not Found | AnaMdTech" };
  }

  return {
    title: `${post.title} | AnaMdTech Blog`,
    description: post.leadParagraph.slice(0, 160),
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_CONTENT[slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-[#09090B] text-white min-h-screen pb-32">
      {/* 1. Dramatic Full-Width Hero Header - INCREASED HEIGHT & TOP PADDING */}
      <div className="relative w-full min-h-[55vh] md:min-h-[65vh] flex items-end justify-start overflow-hidden pt-36 md:pt-44 pb-12 md:pb-16">
        <Image
          src={post.heroImage || "/assets/images/hero.jpg"}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/60 to-transparent z-[2]" />

        {/* Title Overlay */}
        <div className="relative z-[5] w-full max-w-[960px] mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm md:text-base text-gray-400 hover:text-white transition-colors mb-6 group"
          >
            <span className="transform transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Back to all articles
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <span className="bg-white/[0.08] border border-white/15 px-4 py-1 rounded-full text-blue-400 font-mono text-xs md:text-sm">
              {post.category}
            </span>
            <span className="text-gray-400 text-sm md:text-base font-inter">
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
            {post.title}
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-3 font-inter">
            Published on {post.date} · By Ana Md
          </p>
        </div>
      </div>

      {/* 2. Editorial Article Content Area */}
      <div className="max-w-[840px] mx-auto px-6 pt-12">
        {/* Styled Lead Introductory Paragraph */}
        <p className="text-xl md:text-2xl lg:text-[26px] leading-relaxed text-gray-100 font-medium border-l-4 border-blue-500 pl-6 my-6">
          {post.leadParagraph}
        </p>

        {/* Narrative Body Paragraphs */}
        <div className="flex flex-col gap-8 text-lg md:text-xl leading-relaxed text-gray-300 font-inter mt-10">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-gray-300">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Editorial Takeaway Breakout Card */}
        <div className="my-14 p-8 md:p-10 bg-gradient-to-br from-[#131315] to-[#1c1c1f] border border-blue-500/30 rounded-3xl shadow-xl">
          <span className="text-blue-400 font-mono text-sm uppercase tracking-widest block mb-3">
            {"//"} Key Takeaway
          </span>
          <p className="text-xl md:text-2xl font-bold text-white leading-snug">
            &ldquo;{post.takeaway}&rdquo;
          </p>
        </div>

        {/* 3. Bottom Engagement Call-to-Action */}
        <div className="border-t border-gray-800 pt-14 mt-16 flex flex-col md:flex-row items-center justify-between gap-8 bg-[#131315] p-8 lg:p-10 rounded-3xl border border-gray-800/80">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              Want to build something together?
            </h3>
            <p className="text-gray-400 text-base md:text-lg">
              Let&apos;s talk about your Next.js web app or cross-platform
              mobile project.
            </p>
          </div>
          <Link
            href="/contact"
            className="w-full md:w-auto shrink-0 cursor-pointer hover:bg-white hover:text-black transition-all duration-300 border border-gray-600 hover:border-white text-lg font-medium rounded-full bg-white/[0.08] backdrop-blur-md py-3.5 px-8 text-center shadow-md"
          >
            Start a conversation →
          </Link>
        </div>
      </div>
    </article>
  );
}
