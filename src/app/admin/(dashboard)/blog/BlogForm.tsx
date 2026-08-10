"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createBlog, updateBlog } from "@/actions/blog-actions";
import ImageUpload from "@/components/admin/ImageUpload";

export default function BlogForm({
  initialData = null,
}: {
  initialData?: any;
}) {
  const router = useRouter();
  const isEditing = !!initialData;
  const [isPending, setIsPending] = useState(false);

  // Convert array back to a string with double line breaks for editing
  const initialContent = initialData?.content
    ? initialData.content.join("\n\n")
    : "";

  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    date: initialData?.date || "",
    readTime: initialData?.readTime || "",
    category: initialData?.category || "",
    imageUrl: initialData?.imageUrl || "",
    excerpt: initialData?.excerpt || "",
    leadParagraph: initialData?.leadParagraph || "",
    content: initialContent,
    takeaway: initialData?.takeaway || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);

    // Convert string of paragraphs back into an array for Supabase
    const contentArray = formData.content
      .split("\n\n")
      .map((p) => p.trim())
      .filter((p) => p.length > 0);

    const submissionData = {
      ...formData,
      content: contentArray,
    };

    try {
      if (isEditing) {
        await updateBlog(initialData.id, submissionData);
      } else {
        await createBlog(submissionData);
      }
      router.push("/admin/blog");
    } catch (error) {
      alert("Something went wrong saving the post.");
      setIsPending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#131315] border border-gray-800 rounded-3xl p-8 max-w-4xl shadow-2xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 font-medium">
            Post Title
          </label>
          <input
            required
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 bg-[#09090B] border border-gray-800 text-white rounded-xl focus:border-blue-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 font-medium">
            Slug (URL path)
          </label>
          <input
            required
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            placeholder="e.g. why-expo"
            className="w-full p-3 bg-[#09090B] border border-gray-800 text-white rounded-xl focus:border-blue-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 font-medium">Date</label>
          <input
            required
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="August 2026"
            className="w-full p-3 bg-[#09090B] border border-gray-800 text-white rounded-xl focus:border-blue-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 font-medium">Read Time</label>
          <input
            required
            name="readTime"
            value={formData.readTime}
            onChange={handleChange}
            placeholder="6 min read"
            className="w-full p-3 bg-[#09090B] border border-gray-800 text-white rounded-xl focus:border-blue-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 font-medium">Category</label>
          <input
            required
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Mobile Dev"
            className="w-full p-3 bg-[#09090B] border border-gray-800 text-white rounded-xl focus:border-blue-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 font-medium">
            Hero Image
          </label>
          <ImageUpload
            value={formData.imageUrl}
            onChange={(url) => setFormData({ ...formData, imageUrl: url })}
          />
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 font-medium">
            Excerpt (Preview text)
          </label>
          <textarea
            required
            name="excerpt"
            rows={2}
            value={formData.excerpt}
            onChange={handleChange}
            className="w-full p-3 bg-[#09090B] border border-gray-800 text-white rounded-xl focus:border-blue-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 font-medium">
            Lead Paragraph (First big text)
          </label>
          <textarea
            required
            name="leadParagraph"
            rows={3}
            value={formData.leadParagraph}
            onChange={handleChange}
            className="w-full p-3 bg-[#09090B] border border-gray-800 text-white rounded-xl focus:border-blue-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 font-medium">
            Main Content (Leave a blank line between paragraphs)
          </label>
          <textarea
            required
            name="content"
            rows={8}
            value={formData.content}
            onChange={handleChange}
            className="w-full p-3 bg-[#09090B] border border-gray-800 text-white rounded-xl focus:border-blue-500 outline-none font-mono text-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 font-medium">
            Key Takeaway
          </label>
          <textarea
            required
            name="takeaway"
            rows={2}
            value={formData.takeaway}
            onChange={handleChange}
            className="w-full p-3 bg-[#09090B] border border-gray-800 text-white rounded-xl focus:border-blue-500 outline-none"
          />
        </div>
      </div>

      <div className="mt-8 flex gap-4 justify-end">
        <button
          type="button"
          onClick={() => router.push("/admin/blog")}
          className="px-6 py-3 rounded-xl font-medium text-white bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isPending}
          className={`px-6 py-3 rounded-xl font-medium text-white bg-blue-600 hover:bg-blue-500 transition-colors ${isPending ? "opacity-50" : ""}`}
        >
          {isPending ? "Saving..." : isEditing ? "Update Post" : "Publish Post"}
        </button>
      </div>
    </form>
  );
}
