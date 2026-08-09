import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CTASection from "@/components/shared/CTASection";
import { BLOG_POSTS } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((P) => P.slug === slug);

  if (!post) {
    return { title: "Article Not Found | AnaMd" };
  }

  return {
    title: `${post.title} | AnaMd Blog`,
    description: post.leadParagraph.slice(0, 160),
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="blog-detail-article">
      {/* 1. Dramatic Full-Width Hero Header */}
      <div className="blog-hero-container">
        <Image
          src={post.imageUrl || "/assets/images/hero.jpg"}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="blog-hero-img"
        />
        <div className="blog-hero-overlay-dark" />
        <div className="blog-hero-overlay-gradient" />

        {/* Title Overlay */}
        <div className="blog-hero-content">
          <Link href="/blog" className="blog-back-link group">
            <span className="transform transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Back to all articles
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <span className="blog-badge">{post.category}</span>
            <span className="text-gray-400 text-sm md:text-base font-inter">
              {post.readTime}
            </span>
          </div>

          <h1 className="blog-hero-title">{post.title}</h1>
          <p className="blog-hero-date">Published on {post.date} · By Ana Md</p>
        </div>
      </div>

      {/* 2. Editorial Article Content Area */}
      <div className="blog-body-container">
        {/* Styled Lead Introductory Paragraph */}
        <p className="blog-lead-text">{post.leadParagraph}</p>

        {/* Narrative Body Paragraphs */}
        <div className="blog-narrative-wrapper">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-gray-300">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Editorial Takeaway Breakout Card */}
        <div className="blog-takeaway-card">
          <span className="blog-takeaway-label">{"//"} Key Takeaway</span>
          <p className="blog-takeaway-quote">&ldquo;{post.takeaway}&rdquo;</p>
        </div>

        {/* 3. Bottom Engagement Call-to-Action */}
        <CTASection
          title="Want to build something together?"
          description="Let's talk about your Next.js web app or cross-platform mobile project."
          buttonText="Start a conversation →"
        />
      </div>
    </article>
  );
}
