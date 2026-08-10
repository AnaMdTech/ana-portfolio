"use client";

import React, { useState } from "react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

interface MultiImageUploadProps {
  value: string[]; // An array of image URLs
  onChange: (urls: string[]) => void;
}

export default function MultiImageUpload({
  value = [],
  onChange,
}: MultiImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const supabase = createClient();

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!e.target.files || e.target.files.length === 0) return;

      setIsUploading(true);
      const files = Array.from(e.target.files);
      const newUrls: string[] = [];

      // Loop through and upload each file
      for (const file of files) {
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from("portfolio-images")
          .upload(fileName, file, { cacheControl: "3600", upsert: false });

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
          .from("portfolio-images")
          .getPublicUrl(fileName);

        newUrls.push(data.publicUrl);
      }

      // Append new image URLs to the existing array
      onChange([...value, ...newUrls]);
    } catch (error: any) {
      alert("Error uploading images: " + error.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemove = (urlToRemove: string) => {
    onChange(value.filter((url) => url !== urlToRemove));
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Grid of uploaded images */}
      {value.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {value.map((url, index) => (
            <div
              key={index}
              className="relative w-full h-32 rounded-xl overflow-hidden border border-gray-800 bg-[#09090B] group"
            >
              <Image
                src={url}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => handleRemove(url)}
                  className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload Button */}
      <div className="relative w-full h-32 rounded-xl border-2 border-dashed border-gray-800 bg-[#09090B] flex flex-col items-center justify-center hover:border-gray-600 transition-colors mt-2">
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
            d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
          />
        </svg>
        <span className="text-sm text-gray-400 font-medium">
          {isUploading ? "Uploading..." : "Add gallery images"}
        </span>

        {/* Notice the "multiple" attribute here! */}
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleUpload}
          disabled={isUploading}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
        />
      </div>
    </div>
  );
}
