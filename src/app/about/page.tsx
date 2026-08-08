import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ana Md | Full-Stack Developer & Founder",
  description:
    "Learn about Ana Md, a full-stack software developer, digital creator, and tech entrepreneur from Addis Ababa, Ethiopia.",
};

const PILLARS = [
  {
    title: "Full-Stack & Mobile Mastery",
    description:
      "From responsive Next.js web applications to cross-platform iOS and Android apps using Expo and React Native, I build scalable systems across every screen.",
  },
  {
    title: "Product-Minded Execution",
    description:
      "As the founder of ANAMDTECH Solutions, I don’t just write code—I design with business metrics, user retention, and long-term product scalability in mind.",
  },
  {
    title: "Disciplined Engineering",
    description:
      "I prioritize clean architecture, accessible UI/UX design systems, and rock-solid performance optimization so your users get a flawless experience.",
  },
];

export default function AboutPage() {
  return (
    <section className="about-page-section">
      {/* 1. Page Header & Editorial Bio */}
      <div className="about-hero-wrapper">
        <h1 className="about-title-main animate-fade-in-left">About</h1>
        <div className="about-bio-wrapper animate-fade-in-right">
          <p className="about-bio-lead">
            Hey, I’m Ana Mohammed, a full-stack software developer, digital
            creator, and tech founder from{" "}
            <span className="text-white font-semibold">Adama, Ethiopia</span>.
          </p>
          <p className="about-bio-text">
            I specialize in modern web architectures and mobile application
            development, blending creative aesthetics with rigorous engineering
            to craft seamless digital experiences. Driven by a disciplined
            routine and an obsession with clean code, I build software that not
            only looks exceptional but performs reliably at scale.
          </p>
        </div>
      </div>

      {/* 2. Primary Portrait / Visual Showcase */}
      <div className="about-portrait-section">
        <div className="about-portrait-card group">
          <Image
            src="/assets/images/about-img.png"
            alt="Ana Md - Software Developer from Ethiopia"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 760px"
            className="about-portrait-img"
          />
          <div className="about-portrait-overlay" />
        </div>

        {/* Founder Quote / Philosophy */}
        <blockquote className="text-center max-w-[840px]">
          <p className="about-quote-text">
            &ldquo;Armed with a keen eye for aesthetics and a deep understanding
            of full-stack development, I craft high-performing web and mobile
            experiences that turn ambitious concepts into digital
            reality.&rdquo;
          </p>
        </blockquote>
      </div>

      {/* 3. Why Work With Me? (Value Pillars Grid) */}
      <div className="about-pillars-section">
        <div className="about-pillars-container">
          <p className="about-pillars-subtitle">Why work with me</p>
          <h2 className="about-pillars-title">What I bring to your product</h2>

          <div className="about-pillars-grid">
            {PILLARS.map((pillar, idx) => (
              <div key={idx} className="about-pillar-card">
                <div>
                  <span className="about-pillar-num">
                    0{idx + 1} {"//"}
                  </span>
                  <h3 className="about-pillar-heading">{pillar.title}</h3>
                  <p className="about-pillar-desc">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Bottom Call-to-Action Bar */}
      <div className="cta-section-wrapper">
        <div className="cta-card-box">
          <h3 className="cta-card-title">
            Have a web or mobile project in mind?
          </h3>
          <p className="cta-card-desc">
            Whether you need an interactive Next.js web application or a
            cross-platform mobile app, let’s build it right from day one.
          </p>
          <Link href="/contact" className="btn-cta-contact">
            Get in touch with Ana
          </Link>
        </div>
      </div>
    </section>
  );
}
