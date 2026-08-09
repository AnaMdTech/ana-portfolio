"use client";

import React from "react";
import { motion } from "framer-motion";

export interface PageHeaderProps {
  title: string;
  accent?: string;
  layout?: "stacked" | "split";
  className?: string;
  children?: React.ReactNode;
}

export default function PageHeader({
  title,
  accent,
  layout = "stacked",
  className = "",
  children,
}: PageHeaderProps) {
  const isSplit = layout === "split";

  return (
    <div
      className={`page-header-container ${
        isSplit ? "page-header-split" : "text-center"
      } ${className}`}
    >
      {/* Title Column — Slides up and fades in */}
      <motion.h1
        className={`page-header-title ${isSplit ? "md:w-1/2" : "w-full"}`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {accent && <span className="page-header-accent">{accent}</span>}
        <span className="block">{title}</span>
      </motion.h1>

      {/* Children / Right-Side Bio Note — Slides in from right */}
      {children && (
        <motion.div
          className={`page-header-note ${
            isSplit ? "md:w-1/2 pt-2 md:pt-6" : "mt-8 max-w-3xl mx-auto"
          }`}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
