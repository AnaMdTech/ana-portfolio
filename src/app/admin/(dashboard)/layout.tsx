import React from "react";
import Link from "next/link";
import { logoutAction } from "@/actions/auth-actions";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#09090B] text-white flex flex-col md:flex-row">
      {/* Sidebar Navigation - Fixed on Desktop */}
      <aside className="w-full md:w-64 md:fixed md:top-0 md:left-0 md:h-screen bg-[#131315] border-r border-gray-800 p-6 flex flex-col justify-between z-40 overflow-y-auto">
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">
            AnaMd<span className="text-blue-500">.Admin</span>
          </h2>
          <nav className="flex flex-col gap-4 text-gray-400 font-medium">
            <Link
              href="/admin/dashboard"
              className="hover:text-white transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/projects"
              className="hover:text-white transition-colors"
            >
              Manage Projects
            </Link>
            <Link
              href="/admin/blog"
              className="hover:text-white transition-colors"
            >
              Manage Blog
            </Link>
          </nav>
        </div>

        {/* Logout Form triggering Server Action */}
        <form action={logoutAction} className="mt-8 md:mt-0">
          <button
            type="submit"
            className="text-red-400 hover:text-red-300 transition-colors font-medium flex items-center gap-2"
          >
            ← Sign Out
          </button>
        </form>
      </aside>

      {/* Main Content Area - Scrollable with left margin offset for the fixed sidebar */}
      <main className="flex-1 p-6 md:p-12 md:ml-64 min-h-screen">
        {children}
      </main>
    </div>
  );
}
