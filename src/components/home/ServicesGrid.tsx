"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { SERVICES } from "@/lib/data";

// Stagger container for the grid
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Gap between each card appearing
    },
  },
};

// Individual card glide up animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ServicesGrid() {
  return (
    <section className="services-section">
      <div className="services-container">
        {/* We use motion.div with whileInView so it triggers on scroll */}
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="service-card group"
            >
              <div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>

              <div className="service-img-wrapper">
                <div className="service-img-inner">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="service-img"
                    />
                  ) : (
                    <p>{service.title} Preview</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
