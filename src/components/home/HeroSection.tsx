"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HeroSection() {
  return (
    <section className="hero-wrapper">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-col items-center gap-5">
          <motion.p variants={itemVariants} className="hero-badge">
            Open for projects
          </motion.p>

          <motion.h1 variants={itemVariants} className="hero-title">
            A creative human from Ethiopia
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-subtitle">
            Creating online &amp; offline experiences.
          </motion.p>
        </div>

        <motion.div variants={itemVariants}>
          <Link href="/contact" className="btn-hero-cta">
            Get in touch
          </Link>
        </motion.div>
      </motion.div>

      <div className="hero-gradient-bottom" />
    </section>
  );
}
