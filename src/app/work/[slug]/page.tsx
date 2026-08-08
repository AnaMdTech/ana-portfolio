import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export interface ProjectDetail {
  title: string;
  client: string;
  role: string;
  year: string;
  liveUrl?: string;
  heroImage: string;
  overview: string;
  challenges: string;
  solution: string;
  results: string;
  conclusion: string;
  galleryImages: string[];
}

// Static dictionary ready to be swapped for PostgreSQL in Sprint 4
const PROJECTS_DATA: Record<string, ProjectDetail> = {
  "nike-landing-page": {
    title: "Nike Landing Page",
    client: "Unofficial Nike Landing Page",
    role: "Developer",
    year: "2025",
    liveUrl: "https://nike-ana-md.netlify.app/",
    heroImage: "/assets/images/work-3.png",
    overview:
      "A bold and dynamic landing page designed to capture the essence of Nike’s powerful brand identity. This unofficial project showcases how Nike could present new product launches or special campaigns in a visually striking and engaging way. The landing page blends athletic energy with sleek design to create an immersive digital experience that speaks to both fitness enthusiasts and casual Nike fans alike.",
    challenges:
      "The challenge was to build a landing page that encapsulates the strength and innovation of the Nike brand, all while ensuring ease of navigation and a seamless, responsive experience across devices. The landing page needed to be visually compelling, engaging visitors immediately, while maintaining Nike’s signature style and bold visual language.",
    solution:
      "To meet these challenges, I designed a sleek, high-energy landing page with dynamic visuals, clean typography, and immersive product showcases. Interactive elements and smooth animations were incorporated to enhance the user experience, driving engagement and excitement. The design focused on bold imagery that immediately conveyed Nike’s brand values, ensuring a captivating journey from start to finish. A mobile-first approach ensured the landing page’s responsiveness across various devices.",
    results:
      "The final landing page captures the athletic, innovative spirit of Nike with its powerful visuals and user-focused design. It offers an interactive and visually engaging experience that showcases products in an exciting way. While unofficial, the design perfectly reflects how Nike could elevate its digital campaigns to create a lasting impression on visitors.",
    conclusion:
      "This unofficial Nike landing page project demonstrates my ability to design impactful, user-driven experiences that align with a brand’s identity. By fusing athleticism with modern design, I created a digital space that energizes and engages, offering a glimpse into how Nike could present future product launches. Although not built for an actual client, this concept highlights my skills in creating high-quality, brand-driven landing pages.",
    galleryImages: ["/assets/images/work-3.png", "/assets/images/work-3.png"],
  },
  "burger-bite": {
    title: "Burger Bite",
    client: "Burger Bite Restaurant",
    role: "Web Designer & Developer",
    year: "2023",
    liveUrl: "https://burgerbite-ana-md.netlify.app/",
    heroImage: "/assets/images/work-1.png",
    overview:
      "An appetizing, conversion-focused online ordering platform and brand showcase designed for a modern gourmet burger kitchen.",
    challenges:
      "Creating a high-performance food menu that loads instantly on mobile devices while showcasing vibrant photography without layout shift.",
    solution:
      "Implemented a responsive Next.js application with optimized image caching, intuitive category filtering, and streamlined checkout UX.",
    results:
      "Delivered a seamless ordering experience that boosted mobile customer engagement and modernized the restaurant's digital presence.",
    conclusion:
      "Burger Bite proved that thoughtful UX and appetizing visual hierarchy can transform a traditional local menu into an interactive digital brand.",
    galleryImages: ["/assets/images/work-1.png", "/assets/images/work-1.png"],
  },
  sunchips: {
    title: "SunChips",
    client: "SunChips Branding Concept",
    role: "UI/UX Designer & Web Developer",
    year: "2024",
    liveUrl: "https://sunchips-ana-md.netlify.app/",
    heroImage: "/assets/images/work-2.png",
    overview:
      "A vibrant, nature-inspired web campaign highlighting sustainable snacking and eco-friendly packaging initiatives.",
    challenges:
      "Balancing colorful, playful brand graphics with clean typography and fast page performance across desktop and mobile.",
    solution:
      "Built a modular design system using Tailwind CSS with custom micro-interactions and accessible color contrast ratios.",
    results:
      "Produced a visually striking brand experience that educates visitors on sustainability while celebrating snack culture.",
    conclusion:
      "This project highlights my ability to merge expressive UI design with accessible front-end engineering.",
    galleryImages: ["/assets/images/work-2.png", "/assets/images/work-2.png"],
  },
  "natours-tour-page": {
    title: "Natours Tour Page",
    client: "Natours Eco-Tourism",
    role: "Web Development",
    year: "2025",
    liveUrl: "https://natours-ana-md.netlify.app/",
    heroImage: "/assets/images/work-4.png",
    overview:
      "An immersive outdoor adventure booking platform featuring interactive trail maps, tour itineraries, and real-time availability.",
    challenges:
      "Structuring complex tour packages, itineraries, and pricing tiers into an intuitive, scannable interface.",
    solution:
      "Developed a clean, card-based interface with sticky booking sidebars and responsive media galleries.",
    results:
      "Created a trustworthy, inspiring travel portal that encourages exploration and simplifies tour reservations.",
    conclusion:
      "Natours showcases my focus on clarity and structure when handling data-dense travel applications.",
    galleryImages: ["/assets/images/work-4.png", "/assets/images/work-4.png"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATA[slug];

  if (!project) {
    return { title: "Project Not Found | AnaMdTech" };
  }

  return {
    title: `${project.title} — Case Study | AnaMdTech`,
    description: project.overview.slice(0, 160),
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS_DATA[slug];

  if (!project) {
    notFound();
  }

  return (
    <article className="case-article">
      {/* 1. Hero Cover Section */}
      <div className="case-hero-container">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="case-hero-overlay-dark" />
        <div className="case-hero-overlay-gradient" />

        <div className="case-hero-content">
          <Link href="/work" className="case-back-link group">
            <span className="transform transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Back to all work
          </Link>
          <h1 className="case-hero-title">{project.title}</h1>
        </div>
      </div>

      {/* 2. Responsive 2-Column Case Study Content */}
      <div className="case-body-container">
        {/* Left Sidebar: Client / Role / Year / CTA Button */}
        <aside className="case-sidebar">
          <div>
            <p className="case-sidebar-label">Client</p>
            <p className="case-sidebar-value">{project.client}</p>
          </div>

          <div>
            <p className="case-sidebar-label">Role</p>
            <p className="case-sidebar-value">{project.role}</p>
          </div>

          <div>
            <p className="case-sidebar-label">Year</p>
            <p className="case-sidebar-value">{project.year}</p>
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-case-live"
            >
              Go to live website
            </a>
          )}
        </aside>

        {/* Right Main Column: Narrative, Breakdown & Screenshots */}
        <div className="case-main-content">
          <p className="case-overview-text">{project.overview}</p>

          <div className="case-narrative-wrapper">
            <p>
              In the world of high-performance digital products, a website must
              not only reflect the brand’s energy but also deliver an intuitive,
              compelling experience that keeps visitors hooked.
            </p>

            <h3 className="case-section-heading">Challenges</h3>
            <p>{project.challenges}</p>

            {project.galleryImages[0] && (
              <div className="case-gallery-box">
                <Image
                  src={project.galleryImages[0]}
                  alt={`${project.title} screenshot 1`}
                  fill
                  sizes="(max-width: 768px) 100vw, 70vw"
                  className="object-cover"
                />
              </div>
            )}

            <h3 className="case-section-heading">Solution</h3>
            <p>{project.solution}</p>

            <h3 className="case-section-heading">Results</h3>
            <p>{project.results}</p>

            {project.galleryImages[1] && (
              <div className="case-gallery-box">
                <Image
                  src={project.galleryImages[1]}
                  alt={`${project.title} screenshot 2`}
                  fill
                  sizes="(max-width: 768px) 100vw, 70vw"
                  className="object-cover"
                />
              </div>
            )}

            <h3 className="case-section-heading">Conclusion</h3>
            <p>{project.conclusion}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
