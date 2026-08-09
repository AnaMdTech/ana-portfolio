"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FAQS } from "@/lib/data";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="flex flex-col gap-10">
        {/* Animated Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="faq-subtitle">FAQ</p>
          <h2 className="faq-title">Most asked questions</h2>
        </motion.div>

        <div>
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => toggleFaq(idx)}
                className="faq-item-row"
              >
                <div className="flex justify-between items-center">
                  <p className="faq-question-text">{item.q}</p>
                  <span
                    className={`faq-arrow-icon transform transition-transform duration-300 ${
                      isOpen
                        ? "rotate-0 text-blue-400"
                        : "rotate-180 text-white"
                    }`}
                  >
                    ↑
                  </span>
                </div>

                <div
                  className={`faq-answer-wrapper transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="faq-answer-text">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
