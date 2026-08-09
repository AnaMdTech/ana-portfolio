"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import CTASection from "@/components/shared/CTASection";
import { ABOUT_PILLARS } from "@/lib/data";

// Stagger container for pillars grid
const gridVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AboutPage() {
  return (
    <section className="about-page-section">
      {/* 1. Page Header & Editorial Bio */}
      <div className="about-hero-wrapper">
        <motion.h1
          className="about-title-main"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          About
        </motion.h1>

        <motion.div
          className="about-bio-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
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
        </motion.div>
      </div>

      {/* 2. Primary Portrait / Visual Showcase */}
      <div className="about-portrait-section">
        <motion.div
          className="about-portrait-card group"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/assets/images/about-img.png"
            alt="Ana Md - Software Developer from Ethiopia"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 760px"
            className="about-portrait-img"
          />
          <div className="about-portrait-overlay" />
        </motion.div>

        {/* Founder Quote / Philosophy */}
        <motion.blockquote
          className="text-center max-w-[840px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="about-quote-text">
            &ldquo;Armed with a keen eye for aesthetics and a deep understanding
            of full-stack development, I craft high-performing web and mobile
            experiences that turn ambitious concepts into digital
            reality.&rdquo;
          </p>
        </motion.blockquote>
      </div>

      {/* 3. Why Work With Me? (Value Pillars Grid) */}
      <div className="about-pillars-section">
        <div className="about-pillars-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="about-pillars-subtitle">Why work with me</p>
            <h2 className="about-pillars-title">
              What I bring to your product
            </h2>
          </motion.div>

          <motion.div
            className="about-pillars-grid"
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {ABOUT_PILLARS.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="about-pillar-card"
              >
                <div>
                  <span className="about-pillar-num">
                    0{idx + 1} {"//"}
                  </span>
                  <h3 className="about-pillar-heading">{pillar.title}</h3>
                  <p className="about-pillar-desc">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 4. Bottom Call-to-Action Bar */}
      <CTASection />
    </section>
  );
}
