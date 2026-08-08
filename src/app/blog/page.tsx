import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";

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
    <section className="blog-page-section">
      {/* Massive Page Header */}
      <PageHeader accent="Latest" title="updates" />

      {/* Editorial Blog Grid */}
      <div className="blog-grid-container">
        <div className="blog-grid">
          {INITIAL_POSTS.map((post) => (
            <article key={post.id} className="blog-card group">
              <div className="flex flex-col gap-5">
                {/* Image Thumbnail Placeholder */}
                <Link href={`/blog/${post.slug}`} className="blog-card-img-box">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="blog-card-img"
                  />
                </Link>

                {/* Category Badge & Reading Time */}
                <div className="blog-card-meta-row">
                  <span className="blog-badge">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Article Title */}
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="blog-card-title">{post.title}</h2>
                </Link>

                {/* Excerpt */}
                <p className="blog-card-excerpt">{post.excerpt}</p>
              </div>

              {/* Publication Date & Read More Link */}
              <div className="blog-card-footer">
                <span className="text-sm text-gray-500 font-inter">
                  {post.date}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="blog-card-read-link"
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
