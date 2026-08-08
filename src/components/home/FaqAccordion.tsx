"use client";

import React, { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "What is your design process like?",
    a: "I follow a clear, methodical approach that includes understanding your brand, planning, and designing with your goals in mind. The steps include research, wireframing, prototyping, and iterative feedback, ensuring the final product aligns with your vision and needs.",
  },
  {
    q: "Do you offer custom design services?",
    a: "Yes, I specialize in custom design solutions. Whether you need a tailored website, a mobile app, or a complete design system, I craft designs from scratch based on your brand's unique identity and goals.",
  },
  {
    q: "How long does it take to complete a project?",
    a: "The timeline depends on the complexity of the project. A simple website might take a few weeks, while more complex projects such as custom apps or large-scale redesigns could take longer. I provide a detailed timeline at the start of each project, with milestones and regular updates.",
  },
  {
    q: "How do you ensure my website or app will be mobile-friendly?",
    a: "I follow a mobile-first design approach, ensuring that your website or app will be fully responsive across all devices. I prioritize a seamless user experience for mobile, tablet, and desktop users, ensuring your customers will have a consistent experience no matter the device.",
  },
  {
    q: "What’s the cost of a website or app design?",
    a: "The cost varies based on the complexity and scale of the project. I provide customized quotes after understanding your requirements and the scope of work. My goal is to provide high-quality solutions that fit within your budget while exceeding expectations.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes, I offer post-launch support for bug fixes, updates, and enhancements. After the project is live, I’m available for ongoing maintenance to ensure your site or app continues to perform well and stay up to date.",
  },
  {
    q: "How can I get started with you on a project?",
    a: "To get started, simply reach out via email or contact form. We’ll schedule an initial consultation to discuss your needs, ideas, and goals. From there, I’ll draft a proposal with a timeline and cost estimate. Once everything is agreed upon, we can begin the project!",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="flex flex-col gap-10">
        {/* Section Header */}
        <div>
          <p className="faq-subtitle">FAQ</p>
          <h2 className="faq-title">Most asked questions</h2>
        </div>

        {/* Accordion Items */}
        <div>
          {FAQ_ITEMS.map((item, idx) => {
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
