import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import BlogGrid from "@/components/blog/BlogGrid";
import { getBlogs } from "@/actions/blog-actions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Engineering & Founder Blog | AnaMdTech Solutions",
  description:
    "Insights on full-stack software architecture, mobile app development with Expo & React Native, and disciplined product building.",
};

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <section className="blog-page-section">
      <PageHeader accent="Latest" title="updates" />

      <div className="blog-grid-container">
        <BlogGrid posts={blogs} />
      </div>
    </section>
  );
}
