"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createProject, updateProject } from "@/actions/project-actions";

export default function ProjectForm({
  initialData = null,
}: {
  initialData?: any;
}) {
  const router = useRouter();
  const isEditing = !!initialData;
  const [isPending, setIsPending] = useState(false);

  // Initialize form with data if editing, or empty strings if creating
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    client: initialData?.client || "",
    role: initialData?.role || "",
    year: initialData?.year || "",
    liveUrl: initialData?.liveUrl || "",
    imageUrl: initialData?.imageUrl || "",
    overview: initialData?.overview || "",
    challenges: initialData?.challenges || "",
    solution: initialData?.solution || "",
    results: initialData?.results || "",
    conclusion: initialData?.conclusion || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);

    try {
      if (isEditing) {
        await updateProject(initialData.id, formData);
      } else {
        await createProject(formData);
      }
      router.push("/admin/projects");
    } catch (error) {
      alert("Something went wrong saving the project.");
      setIsPending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#131315] border border-gray-800 rounded-3xl p-8 max-w-4xl shadow-2xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Basic Info */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 font-medium">
            Project Title
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
            placeholder="e.g. burger-bite"
            className="w-full p-3 bg-[#09090B] border border-gray-800 text-white rounded-xl focus:border-blue-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 font-medium">
            Client / Company
          </label>
          <input
            required
            name="client"
            value={formData.client}
            onChange={handleChange}
            className="w-full p-3 bg-[#09090B] border border-gray-800 text-white rounded-xl focus:border-blue-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 font-medium">Your Role</label>
          <input
            required
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-3 bg-[#09090B] border border-gray-800 text-white rounded-xl focus:border-blue-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 font-medium">Year</label>
          <input
            required
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full p-3 bg-[#09090B] border border-gray-800 text-white rounded-xl focus:border-blue-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 font-medium">
            Live URL (optional)
          </label>
          <input
            name="liveUrl"
            value={formData.liveUrl}
            onChange={handleChange}
            className="w-full p-3 bg-[#09090B] border border-gray-800 text-white rounded-xl focus:border-blue-500 outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-8">
        <label className="text-sm text-gray-400 font-medium">
          Hero Image URL
        </label>
        <input
          required
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="/assets/images/work-1.png"
          className="w-full p-3 bg-[#09090B] border border-gray-800 text-white rounded-xl focus:border-blue-500 outline-none"
        />
      </div>

      {/* Text Areas */}
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 font-medium">Overview</label>
          <textarea
            required
            name="overview"
            rows={3}
            value={formData.overview}
            onChange={handleChange}
            className="w-full p-3 bg-[#09090B] border border-gray-800 text-white rounded-xl focus:border-blue-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 font-medium">
            Challenges
          </label>
          <textarea
            required
            name="challenges"
            rows={3}
            value={formData.challenges}
            onChange={handleChange}
            className="w-full p-3 bg-[#09090B] border border-gray-800 text-white rounded-xl focus:border-blue-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 font-medium">Solution</label>
          <textarea
            required
            name="solution"
            rows={3}
            value={formData.solution}
            onChange={handleChange}
            className="w-full p-3 bg-[#09090B] border border-gray-800 text-white rounded-xl focus:border-blue-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 font-medium">Results</label>
          <textarea
            required
            name="results"
            rows={3}
            value={formData.results}
            onChange={handleChange}
            className="w-full p-3 bg-[#09090B] border border-gray-800 text-white rounded-xl focus:border-blue-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 font-medium">
            Conclusion
          </label>
          <textarea
            required
            name="conclusion"
            rows={2}
            value={formData.conclusion}
            onChange={handleChange}
            className="w-full p-3 bg-[#09090B] border border-gray-800 text-white rounded-xl focus:border-blue-500 outline-none"
          />
        </div>
      </div>

      <div className="mt-8 flex gap-4 justify-end">
        <button
          type="button"
          onClick={() => router.push("/admin/projects")}
          className="px-6 py-3 rounded-xl font-medium text-white bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isPending}
          className={`px-6 py-3 rounded-xl font-medium text-white bg-blue-600 hover:bg-blue-500 transition-colors ${isPending ? "opacity-50" : ""}`}
        >
          {isPending
            ? "Saving..."
            : isEditing
              ? "Update Project"
              : "Create Project"}
        </button>
      </div>
    </form>
  );
}
