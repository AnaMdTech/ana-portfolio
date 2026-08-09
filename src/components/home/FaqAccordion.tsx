"use client";

import React, { useState } from "react";
import { FAQS } from "@/lib/data";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="flex flex-col gap-10">
        <div>
          <p className="faq-subtitle">FAQ</p>
          <h2 className="faq-title">Most asked questions</h2>
        </div>

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
                    className={`faq-arrow-icon ${
                      isOpen ? "rotate-0" : "rotate-180"
                    }`}
                  >
                    ↑
                  </span>
                </div>

                <div
                  className={`faq-answer-wrapper ${
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
