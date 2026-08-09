import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      {/* Massive Signature Heading */}
      <h1 className="footer-giant-text">let&apos;s connect</h1>

      <div className="footer-content-container">
        {/* CTA Column */}
        <div className="footer-cta-col">
          <h2 className="footer-cta-heading">
            Ready to create something{" "}
            <span className="text-white">awesome together?</span>
          </h2>
          <Link href="/contact" className="btn-footer-cta">
            Let&apos;s connect
          </Link>
        </div>

        {/* Links & Socials Grid */}
        <div className="footer-links-grid">
          {/* Pages Column */}
          <div className="footer-link-col">
            <p className="footer-col-title">Pages</p>
            <Link href="/work" className="footer-link-item">
              Work
            </Link>
            <Link href="/about" className="footer-link-item">
              About
            </Link>
            <Link href="/blog" className="footer-link-item">
              Blog
            </Link>
            <Link href="/contact" className="footer-link-item">
              Contact
            </Link>
          </div>

          {/* Socials Column */}
          <div className="footer-link-col">
            <p className="footer-col-title">Socials</p>
            <a
              href="https://www.instagram.com/anamdtech/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-item"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/ana-mohammed-78443a286/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-item"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/AnaMdTech"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-item"
            >
              Github
            </a>
            <a
              href="https://web.facebook.com/anamdtech/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-item"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Author Bar */}
      <div className="footer-bottom-bar">
        <p className="footer-legal-text">
          Built in <span className="text-white font-bold">React</span> · Made by{" "}
          <a
            href="https://github.com/AnaMdTech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold hover:underline"
          >
            Ana Md
          </a>
        </p>
        <p className="footer-legal-text">
          © {new Date().getFullYear()} AnaMd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
