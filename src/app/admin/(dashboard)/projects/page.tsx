import React from "react";
import Link from "next/link";
import { getProjects } from "@/actions/project-actions";
import ProjectsTable from "./ProjectsTable";

// Revalidate this page dynamically so it always shows fresh data
export const dynamic = "force-dynamic";

export default async function AdminProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="max-w-6xl">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-4xl font-bold mb-2">Manage Projects</h1>
          <p className="text-gray-400">
            View, edit, and delete your portfolio case studies.
          </p>
        </div>
        <Link
          href="/admin/projects/new"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-lg whitespace-nowrap text-center"
        >
          + New Project
        </Link>
      </div>

      {/* Render our interactive client table */}
      <ProjectsTable projects={projects} />
    </div>
  );
}
