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
          // Replace with process.env.NEXT_PUBLIC_WEB3FORMS_KEY or paste your key directly as a fallback
          access_key:
            process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: formData.name,
          email: formData.email,
          message: formData.question,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: "AnaMdTech Portfolio",
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
    <section className="bg-[#09090B] text-white min-h-screen pb-32">
      {/* 1. Massive Page Header */}
      <PageHeader title="Contact" />

      {/* 2. Main Contact Container */}
      <div className="flex flex-col px-6 md:px-12 lg:px-32 xl:px-60 max-w-[1440px] mx-auto gap-16">
        {/* Intro Paragraph */}
        <p className="text-2xl leading-9 md:text-3xl md:leading-10 max-w-3xl font-medium text-gray-200">
          Whether you have a question, want to work together, or simply wish to
          say hello, I&apos;m all ears.
        </p>

        {/* Direct Contact Links Row */}
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between border-b border-gray-800 pb-12">
          <div className="lg:w-1/2">
            <p className="text-[#6366f1] text-xl mb-1.5 font-medium">
              Email address
            </p>
            <a
              href="mailto:ana.mohammed.dev@gmail.com"
              className="text-xl lg:text-xl hover:text-[#4f46e5] transition-colors duration-300 ease-in-out font-semibold"
            >
              ana.mohammed.dev@gmail.com
            </a>
          </div>

          <div className="lg:w-1/2">
            <p className="text-[#6366f1] text-xl mb-1.5 font-medium">
              Phone number
            </p>
            <a
              href="tel:+251952846435"
              className="text-xl lg:text-xl hover:text-[#4f46e5] transition-colors duration-300 ease-in-out font-semibold"
            >
              +251 952 846 435
            </a>
          </div>
        </div>

        {/* 3. Interactive Contact Form */}
        <div className="flex justify-start">
          <form
            onSubmit={handleSubmit}
            className="bg-[#18181B] p-6 sm:p-8 lg:p-12 w-full max-w-[840px] border-2 border-[#27272A] rounded-3xl flex flex-col gap-6 shadow-2xl"
          >
            <h4 className="text-2xl lg:text-3xl font-semibold mb-2">
              Or use this form
            </h4>

            {isSubmitted ? (
              <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-6 rounded-2xl text-center flex flex-col gap-2">
                <p className="text-xl font-bold">Message sent successfully!</p>
                <p className="text-sm text-gray-300">
                  Thank you for reaching out. I will get back to you shortly.
                </p>
              </div>
            ) : null}

            {errorMessage ? (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-2xl text-sm">
                {errorMessage}
              </div>
            ) : null}

            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-[#71717a] text-base font-medium"
              >
                Name
              </label>
              <input
                className="w-full p-4 bg-[#27272A] text-white rounded-2xl selection:bg-transparent focus:bg-[#09090B] focus:outline-[#4f46e5] focus:outline-1 focus:border-transparent transition-all"
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
              <label
                htmlFor="email"
                className="text-[#71717a] text-base font-medium"
              >
                Email
              </label>
              <input
                className="w-full p-4 bg-[#27272A] text-white rounded-2xl selection:bg-transparent focus:bg-[#09090B] focus:outline-[#4f46e5] focus:outline-1 focus:border-transparent transition-all"
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
              <label
                htmlFor="question"
                className="text-[#71717a] text-base font-medium"
              >
                Question
              </label>
              <textarea
                className="w-full p-4 bg-[#27272A] text-white rounded-2xl selection:bg-transparent focus:bg-[#09090B] focus:outline-[#4f46e5] focus:outline-1 focus:border-transparent transition-all resize-none"
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
              className={`text-white w-full cursor-pointer hover:bg-white hover:text-black transition-all duration-300 border border-gray-600 text-lg leading-8 font-inter rounded-full bg-white/[0.08] backdrop-blur-md py-3.5 px-8 font-medium shadow-lg mt-2 ${
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
