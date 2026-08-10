"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { deleteProject } from "@/actions/project-actions";

export default function ProjectsTable({ projects }: { projects: any[] }) {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const confirmDelete = async () => {
    if (!projectToDelete) return;
    setIsDeleting(true);
    try {
      await deleteProject(projectToDelete);
      setProjectToDelete(null);
    } catch (error) {
      alert("Failed to delete project.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div className="bg-[#131315] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400 text-sm">
                <th className="p-6 font-medium">Project</th>
                <th className="p-6 font-medium">Year</th>
                <th className="p-6 font-medium">Role</th>
                <th className="p-6 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {projects.map((project) => (
                <tr
                  key={project.id}
                  className="hover:bg-white/[0.04] transition-colors group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <td className="p-6 flex items-center gap-4">
                    <div className="relative w-20 h-14 rounded-lg overflow-hidden bg-gray-900 border border-gray-800 shrink-0">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">
                        {project.title}
                      </p>
                      <p className="text-sm text-gray-500">{project.client}</p>
                    </div>
                  </td>
                  <td className="p-6 text-gray-300 whitespace-nowrap">
                    {project.year}
                  </td>
                  <td className="p-6 text-gray-300">{project.role}</td>
                  <td className="p-6 text-right">
                    <div className="flex items-center justify-end gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
                      {/* EDIT (PEN) BUTTON */}
                      <Link
                        href={`/admin/projects/${project.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 text-blue-400 hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg transition-colors"
                        title="Edit Project"
                      >
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                          />
                        </svg>
                      </Link>

                      {/* DELETE (TRASH) BUTTON */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setProjectToDelete(project.id);
                        }}
                        className="p-2 text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors"
                        title="Delete Project"
                      >
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CUSTOM DELETE CONFIRMATION MODAL */}
      {projectToDelete && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#131315] border border-gray-800 rounded-3xl p-8 max-w-sm w-full shadow-2xl relative">
            <h3 className="text-xl font-bold text-white mb-2">
              Delete Project?
            </h3>
            <p className="text-gray-400 mb-6 text-sm">
              Are you sure you want to delete this project? This action cannot
              be undone and will permanently remove it from your portfolio.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setProjectToDelete(null)}
                disabled={isDeleting}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={isDeleting}
                className={`px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg font-medium transition-colors ${isDeleting ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {isDeleting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PROJECT DETAILS MODAL (Your existing one) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          {/* ... (Keep your exact existing Details Modal code here) ... */}
          <div className="bg-[#131315] border border-gray-800 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <div className="relative w-full h-48 sm:h-64">
              <Image
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131315] to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black p-2 rounded-full text-white backdrop-blur-md transition-all"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-2 text-sm text-blue-400 font-medium">
                <span>{selectedProject.year}</span>
                <span>•</span>
                <span>{selectedProject.client}</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">
                {selectedProject.title}
              </h2>

              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="text-white font-bold mb-1">Role</h4>
                  <p>{selectedProject.role}</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Overview</h4>
                  <p>{selectedProject.overview}</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Challenges</h4>
                  <p>{selectedProject.challenges}</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Solution</h4>
                  <p>{selectedProject.solution}</p>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Link
                  href={`/admin/projects/${selectedProject.id}`}
                  className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
                >
                  Edit Project
                </Link>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition-colors"
                  >
                    View Live Site
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
