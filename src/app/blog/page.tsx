import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import BlogGrid from "@/components/blog/BlogGrid";
import { getBlogs } from "@/actions/blog-actions";

// Ensures fresh data on every load
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Engineering & Founder Blog | AnaMdTech Solutions",
  description:
    "Insights on full-stack software architecture, mobile app development with Expo & React Native, and disciplined product building.",
};

export default async function BlogPage() {
  // 1. Fetch live from Supabase
  const blogs = await getBlogs();

  return (
    <section className="blog-page-section">
      {/* Massive Page Header */}
      <PageHeader accent="Latest" title="updates" />

      {/* Animated Editorial Blog Grid */}
      <div className="blog-grid-container">
        {/* 2. Pass the dynamic blogs into your grid component */}
        <BlogGrid posts={blogs} />
      </div>
    </section>
  );
}
