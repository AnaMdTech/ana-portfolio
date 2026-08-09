import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/data"; 

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <h1 className="footer-giant-text">let&apos;s connect</h1>

      <div className="footer-content-container">
        <div className="footer-cta-col">
          <h2 className="footer-cta-heading">
            Ready to create something{" "}
            <span className="text-white">awesome together?</span>
          </h2>
          <Link href="/contact" className="btn-footer-cta">
            Let&apos;s connect
          </Link>
        </div>

        <div className="footer-links-grid">
          <div className="footer-link-col">
            <p className="footer-col-title">Pages</p>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="footer-link-item"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="footer-link-col">
            <p className="footer-col-title">Socials</p>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-item"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p className="footer-legal-text">
          Built in <span className="text-white font-bold">NextJs</span> · Made
          by{" "}
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
