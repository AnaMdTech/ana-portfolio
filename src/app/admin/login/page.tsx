"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { loginAction } from "@/actions/auth-actions";

export default function AdminLoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setError(null);

    const formData = new FormData(event.currentTarget);

    // Call the server action
    const result = await loginAction(formData);

    // If we get here, it means there was an error (otherwise it would have redirected)
    if (result?.error) {
      setError(result.error);
      setIsPending(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#09090B] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[440px] bg-[#131315] border border-gray-800 rounded-3xl p-10 shadow-2xl"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Hub</h1>
          <p className="text-gray-400">Secure access for AnaMd.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl text-sm text-center">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full p-4 bg-[#27272A] text-white rounded-xl focus:bg-[#09090B] focus:outline-[#4f46e5] focus:outline-1 transition-all"
              placeholder="ana@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              className="w-full p-4 bg-[#27272A] text-white rounded-xl focus:bg-[#09090B] focus:outline-[#4f46e5] focus:outline-1 transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className={`w-full mt-4 py-4 rounded-xl font-medium text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg ${
              isPending ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isPending ? "Authenticating..." : "Sign In"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
