"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";
import Logo from "@/components/shared/Logo";

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
      <header
        className={`navbar-base ${isScrolled ? "navbar-pill" : "navbar-full"}`}
      >
        <Link href="/" onClick={closeMenu} className="nav-logo">
          <Logo />
        </Link>

        <nav className="nav-desktop-menu">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`nav-link ${
                isActive(link.href) ? "nav-link-active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

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
            <Image
              src={
                isMobileMenuOpen
                  ? "/assets/icons/x.png"
                  : "/assets/icons/menu.png"
              }
              alt={isMobileMenuOpen ? "Close menu" : "Open menu"}
              width={26}
              height={26}
              className="nav-humburger-icon"
            />
          </button>
        </div>
      </header>

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
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className={`mobile-nav-link ${
                  isActive(link.href) ? "mobile-nav-link-active" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}

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
