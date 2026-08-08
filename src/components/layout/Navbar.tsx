"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(`${path}/`);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Scroll-Morphing Header */}
      <header
        className={`navbar-base ${
          isScrolled ? "navbar-pill" : "navbar-full"
        }`}
      >
        {/* 1. Brand Logo */}
        <Link href="/" onClick={closeMenu} className="nav-logo">
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

        {/* 2. Desktop Navigation Links */}
        <nav className="nav-desktop-menu">
          <Link
            href="/work"
            className={`nav-link ${isActive("/work") ? "nav-link-active" : ""}`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`nav-link ${
              isActive("/about") ? "nav-link-active" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={`nav-link ${isActive("/blog") ? "nav-link-active" : ""}`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`nav-link ${
              isActive("/contact") ? "nav-link-active" : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* 3. Actions: Download CV + Hamburger Icon */}
        <div className="nav-actions">
          <a
            href="/ana-mohammed-Resume.pdf"
            download
            className={`btn-glass hidden md:inline-flex ${
              isScrolled ? "py-1.5 px-5 text-sm" : "py-2.5 px-6 text-base"
            }`}
          >
            Download CV
          </a>

          <button
            type="button"
            className="nav-hamburger-btn"
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

      {/* 4. Mobile Navigation Drawer */}
      <div
        className="mobile-drawer-overlay"
        style={{
          clipPath: isMobileMenuOpen
            ? "circle(150% at 90% 40px)"
            : "circle(0% at 90% 40px)",
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
      >
        <ul className="mobile-drawer-list">
          <li>
            <Link
              href="/work"
              onClick={closeMenu}
              className={`mobile-nav-link ${
                isActive("/work") ? "mobile-nav-link-active" : ""
              }`}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={closeMenu}
              className={`mobile-nav-link ${
                isActive("/about") ? "mobile-nav-link-active" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              onClick={closeMenu}
              className={`mobile-nav-link ${
                isActive("/blog") ? "mobile-nav-link-active" : ""
              }`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={closeMenu}
              className={`mobile-nav-link ${
                isActive("/contact") ? "mobile-nav-link-active" : ""
              }`}
            >
              Contact
            </Link>
          </li>
          <li className="mt-6">
            <a
              href="/ana-mohammed-Resume.pdf"
              download
              onClick={closeMenu}
              className="btn-glass py-3.5 px-10 text-lg shadow-lg"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
