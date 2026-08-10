import React from "react";
import ProjectForm from "../ProjectForm";

export default function NewProjectPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-2">Create New Project</h1>
      <p className="text-gray-400 mb-10">
        Add a new case study to your portfolio.
      </p>

      <ProjectForm />
    </div>
  );
}
