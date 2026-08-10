import React from "react";
import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-2">Welcome back, Ana</h1>
      <p className="text-gray-400 mb-10">
        What would you like to build or share today?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Manage Projects Card */}
        <div className="bg-[#131315] border border-gray-800 rounded-3xl p-8 hover:border-gray-600 transition-colors flex flex-col justify-between h-64">
          <div>
            <h3 className="text-2xl font-bold mb-2">Projects</h3>
            <p className="text-gray-400">
              Add new case studies, update live URLs, or upload fresh gallery
              images.
            </p>
          </div>
          <Link
            href="/admin/projects"
            className="inline-block bg-white/[0.08] border border-gray-600 hover:bg-white hover:text-black text-white px-6 py-3 rounded-full font-medium text-center transition-all w-fit"
          >
            Manage Projects →
          </Link>
        </div>

        {/* Manage Blog Card */}
        <div className="bg-[#131315] border border-gray-800 rounded-3xl p-8 hover:border-gray-600 transition-colors flex flex-col justify-between h-64">
          <div>
            <h3 className="text-2xl font-bold mb-2">Blog Posts</h3>
            <p className="text-gray-400">
              Write deep-dives on Next.js, Expo, and engineering architectures.
            </p>
          </div>
          <Link
            href="/admin/blog"
            className="inline-block bg-white/[0.08] border border-gray-600 hover:bg-white hover:text-black text-white px-6 py-3 rounded-full font-medium text-center transition-all w-fit"
          >
            Manage Blog →
          </Link>
        </div>
      </div>
    </div>
  );
}
