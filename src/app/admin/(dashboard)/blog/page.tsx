import React from "react";
import Link from "next/link";
import { getBlogs } from "@/actions/blog-actions";
import BlogTable from "./BlogTable";

export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="max-w-6xl">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-4xl font-bold mb-2">Manage Blog</h1>
          <p className="text-gray-400">
            Write and manage your engineering articles.
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-lg whitespace-nowrap text-center"
        >
          + New Post
        </Link>
      </div>
      <BlogTable blogs={blogs} />
    </div>
  );
}
