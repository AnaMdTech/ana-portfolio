import React from "react";
import ProjectForm from "../ProjectForm";
import { getProjectById } from "@/actions/project-actions";
import { notFound } from "next/navigation";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;

  const project = await getProjectById(resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-2">Edit Project</h1>
      <p className="text-gray-400 mb-10">Update details for {project.title}.</p>

      <ProjectForm initialData={project} />
    </div>
  );
}
