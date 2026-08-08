import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero-wrapper">
      {/* Centered Hero Content */}
      <div className="hero-content">
        <div className="flex flex-col items-center gap-5">
          {/* Availability Badge */}
          <p className="hero-badge">Open for projects</p>

          {/* Headline */}
          <h1 className="hero-title">A creative human from Ethiopia</h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Creating online &amp; offline experiences.
          </p>
        </div>

        {/* CTA Button */}
        <Link href="/contact" className="btn-hero-cta">
          Get in touch
        </Link>
      </div>

      {/* Bottom Gradient Overlay to Blend into Next Section */}
      <div className="hero-gradient-bottom" />
    </section>
  );
}
