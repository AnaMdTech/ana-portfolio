"use client";

import React, { useState } from "react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

interface ImageUploadProps {
  value: string; // The current image URL
  onChange: (url: string) => void; // Function to run when upload finishes
}

export default function ImageUpload({ value, onChange }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const supabase = createClient();

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!e.target.files || e.target.files.length === 0) return;

      setIsUploading(true);
      const file = e.target.files[0];

      // Create a unique file name to prevent overwriting
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("portfolio-images")
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) throw uploadError;

      // Get the live public URL
      const { data } = supabase.storage
        .from("portfolio-images")
        .getPublicUrl(fileName);

      // Pass the URL back to the form
      onChange(data.publicUrl);
    } catch (error: any) {
      alert("Error uploading image: " + error.message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Image Preview Area */}
      {value ? (
        <div className="relative w-full h-48 rounded-xl overflow-hidden border border-gray-800 bg-[#09090B] group">
          <Image
            src={value}
            alt="Uploaded preview"
            fill
            className="object-cover"
          />
          {/* Overlay to remove image */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              type="button"
              onClick={() => onChange("")}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Remove Image
            </button>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-48 rounded-xl border-2 border-dashed border-gray-800 bg-[#09090B] flex flex-col items-center justify-center hover:border-gray-600 transition-colors">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-gray-500 mb-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
          </svg>
          <span className="text-sm text-gray-400 font-medium">
            {isUploading ? "Uploading..." : "Click to upload an image"}
          </span>

          {/* Hidden File Input covering the box */}
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            disabled={isUploading}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          />
        </div>
      )}
    </div>
  );
}
