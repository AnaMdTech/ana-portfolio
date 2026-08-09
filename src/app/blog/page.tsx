import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import BlogGrid from "@/components/blog/BlogGrid";

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

      {/* Animated Editorial Blog Grid */}
      <div className="blog-grid-container">
        <BlogGrid />
      </div>
    </section>
  );
}
