"use client";

import React, { useState } from "react";
import PageHeader from "@/components/shared/PageHeader";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key:
            process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: formData.name,
          email: formData.email,
          message: formData.question,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: "AnaMd Portfolio",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", question: "" });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setErrorMessage(
          result.message || "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-page-section">
      {/* 1. Massive Page Header */}
      <PageHeader title="Contact" />

      {/* 2. Main Contact Container */}
      <div className="contact-main-container">
        {/* Intro Paragraph */}
        <p className="contact-intro-lead">
          Whether you have a question, want to work together, or simply wish to
          say hello, I&apos;m all ears.
        </p>

        {/* Direct Contact Links Row */}
        <div className="contact-links-row">
          <div className="lg:w-1/2">
            <p className="contact-label-text">Email address</p>
            <a
              href="mailto:ana.mohammed.dev@gmail.com"
              className="contact-direct-link"
            >
              ana.mohammed.dev@gmail.com
            </a>
          </div>

          <div className="lg:w-1/2">
            <p className="contact-label-text">Phone number</p>
            <a href="tel:+251952846435" className="contact-direct-link">
              +251 952 846 435
            </a>
          </div>
        </div>

        {/* 3. Interactive Contact Form */}
        <div className="flex justify-start">
          <form onSubmit={handleSubmit} className="contact-form-card">
            <h4 className="contact-form-heading">Or use this form</h4>

            {isSubmitted ? (
              <div className="contact-success-box">
                <p className="text-xl font-bold">Message sent successfully!</p>
                <p className="text-sm text-gray-300">
                  Thank you for reaching out. I will get back to you shortly.
                </p>
              </div>
            ) : null}

            {errorMessage ? (
              <div className="contact-error-box">{errorMessage}</div>
            ) : null}

            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="contact-input-label">
                Name
              </label>
              <input
                className="contact-input-field"
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ana Md"
                required
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="contact-input-label">
                Email
              </label>
              <input
                className="contact-input-field"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="anamd@example.com"
                required
              />
            </div>

            {/* Question / Message Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="question" className="contact-input-label">
                Question
              </label>
              <textarea
                className="contact-textarea-field"
                rows={5}
                id="question"
                value={formData.question}
                onChange={handleChange}
                placeholder="What’s on your mind?"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-contact-submit ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
