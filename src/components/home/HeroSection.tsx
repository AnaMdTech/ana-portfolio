import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero-wrapper">
      <div className="hero-content">
        <div className="flex flex-col items-center gap-5">
          <p className="hero-badge">Open for projects</p>

          <h1 className="hero-title">A creative human from Ethiopia</h1>

          <p className="hero-subtitle">
            Creating online &amp; offline experiences.
          </p>
        </div>

        <Link href="/contact" className="btn-hero-cta">
          Get in touch
        </Link>
      </div>

      <div className="hero-gradient-bottom" />
    </section>
  );
}
