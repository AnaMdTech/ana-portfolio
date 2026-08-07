"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to morph from Full Width -> Sticky Glass Pill
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Header Container that morphs on scroll */}
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-[9999] flex justify-between items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isScrolled
            ? "top-4 w-[92%] max-w-5xl px-6 py-3 bg-white/[0.08] backdrop-blur-xl border border-white/15 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            : "top-0 w-full px-8 lg:px-14 py-6 bg-transparent border-transparent rounded-none"
        }`}
      >
        {/* 1. Brand Logo (Left) */}
        <Link
          href="/"
          onClick={closeMenu}
          className="z-[9999] shrink-0 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 140 50"
            width="120"
            height="40"
            className="h-8 w-auto"
          >
            <defs>
              <linearGradient
                id="textGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#a5b4fc" />
              </linearGradient>
            </defs>
            <text
              x="0"
              y="35"
              fontFamily="Poppins, Arial, sans-serif"
              fontSize="24"
              fontWeight="bold"
              letterSpacing="2"
              fill="url(#textGradient)"
            >
              AnaMd
            </text>
          </svg>
        </Link>

        {/* 2. Desktop Navigation Links (Middle - PC/Tablet only) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 z-[9999]">
          <Link
            href="/work"
            className="text-sm lg:text-base font-medium text-white/80 hover:text-white hover:scale-105 transition duration-200"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-sm lg:text-base font-medium text-white/80 hover:text-white hover:scale-105 transition duration-200"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-sm lg:text-base font-medium text-white/80 hover:text-white hover:scale-105 transition duration-200"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-sm lg:text-base font-medium text-white/80 hover:text-white hover:scale-105 transition duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* 3. Right Section: Download CV Button (Desktop) + Hamburger Icon (Mobile) */}
        <div className="flex items-center gap-3 z-[9999] shrink-0">
          <a
            href="/ana-mohammed-Resume.pdf"
            download
            className={`hidden md:flex items-center justify-center text-white cursor-pointer hover:bg-white/20 transition-all duration-300 border border-white/20 rounded-full bg-white/10 backdrop-blur-md font-medium shadow-inner ${
              isScrolled ? "py-1.5 px-5 text-sm" : "py-2.5 px-6 text-base"
            }`}
          >
            Download CV
          </a>

          {/* Hamburger Menu Button (Mobile only) */}
          <button
            type="button"
            className="md:hidden text-white p-2 focus:outline-none rounded-full hover:bg-white/10 transition"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="26"
              height="26"
              fill="white"
            >
              {isMobileMenuOpen ? (
                <path d="M 4.707 3.293 L 3.293 4.707 L 10.586 12 L 3.293 19.293 L 4.707 20.707 L 12 13.414 L 19.293 20.707 L 20.707 19.293 L 13.414 12 L 20.707 4.707 L 19.293 3.293 L 12 10.586 L 4.707 3.293 z" />
              ) : (
                <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* 4. Mobile Navigation Drawer with Eclipse Circular Expand/Collapse */}
      <div
        className="fixed inset-0 z-[9990] bg-black/90 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden transition-[clip-path,opacity] duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]"
        style={{
          clipPath: isMobileMenuOpen
            ? "circle(150% at 90% 40px)"
            : "circle(0% at 90% 40px)",
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
      >
        <ul className="flex flex-col items-center gap-8 text-center">
          <li>
            <Link
              href="/work"
              onClick={closeMenu}
              className="text-3xl font-semibold text-white hover:text-blue-400 transition"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={closeMenu}
              className="text-3xl font-semibold text-white hover:text-blue-400 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              onClick={closeMenu}
              className="text-3xl font-semibold text-white hover:text-blue-400 transition"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="text-3xl font-semibold text-white hover:text-blue-400 transition"
            >
              Contact
            </Link>
          </li>
          <li className="mt-6">
            <a
              href="/ana-mohammed-Resume.pdf"
              download
              onClick={closeMenu}
              className="inline-block text-white border border-white/20 rounded-full bg-white/10 backdrop-blur-md py-3.5 px-10 text-lg font-medium shadow-lg"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
