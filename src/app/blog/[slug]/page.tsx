import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CTASection from "@/components/shared/CTASection";
import { getBlogBySlug } from "@/actions/blog-actions"; // <-- Using Supabase Action

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

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
  const post = await getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="blog-detail-article">
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

      <div className="blog-body-container">
        <p className="blog-lead-text">{post.leadParagraph}</p>

        <div className="blog-narrative-wrapper">
          {post.content.map((paragraph: string, index: number) => (
            <p key={index} className="text-gray-300">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="blog-takeaway-card">
          <span className="blog-takeaway-label">{"//"} Key Takeaway</span>
          <p className="blog-takeaway-quote">&ldquo;{post.takeaway}&rdquo;</p>
        </div>

        <CTASection
          title="Want to build something together?"
          description="Let's talk about your Next.js web app or cross-platform mobile project."
          buttonText="Start a conversation →"
        />
      </div>
    </article>
  );
}
