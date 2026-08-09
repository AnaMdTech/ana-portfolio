import React from "react";

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
      {/* Title Column — Slides in from Left */}
      <h1
        className={`page-header-title animate-fade-in-up ${
          isSplit ? "md:w-1/2" : "w-full"
        }`}
      >
        {accent && <span className="page-header-accent">{accent}</span>}
        <span className="block">{title}</span>
      </h1>

      {/* Children / Right-Side Bio Note — Slides in from Right */}
      {children && (
        <div
          className={`page-header-note animate-fade-in-right ${
            isSplit ? "md:w-1/2 pt-2 md:pt-6" : "mt-8 max-w-3xl mx-auto"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
