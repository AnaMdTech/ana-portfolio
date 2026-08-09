import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import { BLOG_POSTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Engineering & Founder Blog | AnaMdTech Solutions",
  description:
    "Insights on full-stack software architecture, mobile app development with Expo & React Native, and disciplined product building.",
};

export default function BlogPage() {
  return (
    <section className="blog-page-section">
      {/* Massive Page Header */}
      <PageHeader accent="Latest" title="updates" />

      {/* Editorial Blog Grid */}
      <div className="blog-grid-container">
        <div className="blog-grid">
          {BLOG_POSTS.map((post) => (
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
