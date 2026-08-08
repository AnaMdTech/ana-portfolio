import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering & Founder Blog | AnaMdTech",
  description:
    "Insights on full-stack software architecture, mobile app development with Expo & React Native, and disciplined product building.",
};

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

// Initial sample articles reflecting your actual stack and founder background
const INITIAL_POSTS: BlogPost[] = [
  {
    id: "1",
    title:
      "Why We Built Our Latest Mobile Applications Using Expo & React Native",
    slug: "why-expo-react-native-for-mobile",
    excerpt:
      "An engineering breakdown of how modern Expo tooling, EAS builds, and native module integration allowed us to ship high-performance iOS and Android builds faster than ever.",
    date: "August 2026",
    readTime: "6 min read",
    category: "Mobile Dev",
    imageUrl: "/images/blog-1.jpg",
  },
  {
    id: "2",
    title: "The Disciplined Developer: Structuring Deep Work Without Burnout",
    slug: "disciplined-developer-deep-work-routine",
    excerpt:
      "How setting strict digital boundaries, protecting deep focus blocks, and maintaining a high-intensity physical training routine elevates software engineering quality.",
    date: "July 2026",
    readTime: "5 min read",
    category: "Engineering Culture",
    imageUrl: "/images/blog-2.jpg",
  },
  {
    id: "3",
    title:
      "Designing Scalable UI Systems with Tailwind CSS v4 & Next.js App Router",
    slug: "scalable-ui-design-systems-tailwind-v4",
    excerpt:
      "Practical strategies for moving away from messy stylesheets toward modular, CSS-first Tailwind design tokens that stay maintainable across large teams.",
    date: "July 2026",
    readTime: "8 min read",
    category: "Frontend",
    imageUrl: "/images/blog-3.jpg",
  },
  {
    id: "4",
    title:
      "From Concept to Production: Architecting Multi-Tenant Platforms at ANAMDTECH",
    slug: "architecting-multi-tenant-platforms",
    excerpt:
      "Key lessons learned while architecting resilient databases, handling secure user authentication, and designing conversion-focused interfaces for real-world clients.",
    date: "June 2026",
    readTime: "7 min read",
    category: "System Architecture",
    imageUrl: "/images/blog-4.jpg",
  },
];

export default function BlogPage() {
  return (
    <section className="bg-[#09090B] text-white min-h-screen pb-32">
      {/* Massive Page Header */}
      <div className="text-center pt-28 md:pt-40 pb-20 md:pb-28 px-6">
        <h1 className="text-[64px] leading-[70px] md:text-[120px] md:leading-[110px] lg:text-[150px] lg:leading-[140px] xl:text-[200px] xl:leading-[160px] font-bold tracking-tight">
          <span className="text-[#71717a]">Latest</span> updates
        </h1>
      </div>

      {/* Editorial Blog Grid */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {INITIAL_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-[#131315] border border-gray-800/80 rounded-3xl p-8 lg:p-10 flex flex-col justify-between hover:border-gray-600 transition-all duration-300 shadow-lg group"
            >
              <div className="flex flex-col gap-5">
                {/* Image Thumbnail Placeholder */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative w-full h-[220px] md:h-[260px] bg-gradient-to-b from-[#1c1c1f] to-[#131315] rounded-2xl overflow-hidden mb-2 block border border-gray-800/60"
                >
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                {/* Category Badge & Reading Time */}
                <div className="flex items-center justify-between text-sm font-mono text-gray-400">
                  <span className="bg-white/[0.07] border border-white/10 px-3.5 py-1 rounded-full text-blue-400 font-medium">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                {/* Article Title */}
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200 leading-snug">
                    {post.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-400 text-lg leading-relaxed font-inter">
                  {post.excerpt}
                </p>
              </div>

              {/* Publication Date & Read More Link */}
              <div className="flex items-center justify-between border-t border-gray-800/80 pt-6 mt-8">
                <span className="text-sm text-gray-500 font-inter">
                  {post.date}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-base font-semibold text-white group-hover:text-blue-400 transition-colors"
                >
                  Read article
                  <span className="transform transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
