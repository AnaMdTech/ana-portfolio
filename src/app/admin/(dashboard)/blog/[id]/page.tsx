import React from "react";
import BlogForm from "../BlogForm";
import { getBlogById } from "@/actions/blog-actions";
import { notFound } from "next/navigation";

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const blog = await getBlogById(resolvedParams.id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-2">Edit Post</h1>
      <p className="text-gray-400 mb-10">Update details for {blog.title}.</p>
      <BlogForm initialData={blog} />
    </div>
  );
}
