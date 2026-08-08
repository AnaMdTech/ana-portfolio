import React from "react";
import Image from "next/image";

const TOP_ROW = [
  { name: "HTML5", icon: "/assets/icons/html5.svg", color: "#E44D26" },
  { name: "CSS", icon: "/assets/icons/css.svg", color: "#264DE4" },
  {
    name: "JavaScript",
    icon: "/assets/icons/javascript.svg",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: "/assets/icons/typescript.svg",
    color: "#3178C6",
  },
  { name: "React", icon: "/assets/icons/react.svg", color: "#61DAFB" },
  { name: "Next.js", icon: "/assets/icons/nextdotjs.svg", color: "#FFFFFF" },
  { name: "Redux", icon: "/assets/icons/redux.svg", color: "#764ABC" },
  {
    name: "Tailwind CSS",
    icon: "/assets/icons/tailwindcss.svg",
    color: "#38BDF8",
  },
  { name: "Bootstrap", icon: "/assets/icons/bootstrap.svg", color: "#7952B3" },
  { name: "Sass", icon: "/assets/icons/sass.svg", color: "#CC6699" },
  { name: "Expo", icon: "/assets/icons/expo.svg", color: "#FFFFFF" },
];

const BOTTOM_ROW = [
  { name: "Node.js", icon: "/assets/icons/nodedotjs.svg", color: "#339933" },
  { name: "Express", icon: "/assets/icons/express.svg", color: "#FFFFFF" },
  { name: "Python", icon: "/assets/icons/python.svg", color: "#3776AB" },
  { name: "Django", icon: "/assets/icons/django.svg", color: "#092E20" },
  {
    name: "PostgreSQL",
    icon: "/assets/icons/postgresql.svg",
    color: "#336791",
  },
  { name: "MongoDB", icon: "/assets/icons/mongodb.svg", color: "#47A248" },
  { name: "MySQL", icon: "/assets/icons/mysql.svg", color: "#00758F" },
  { name: "Firebase", icon: "/assets/icons/firebase.svg", color: "#FFCA28" },
  { name: "GraphQL", icon: "/assets/icons/graphql.svg", color: "#E10098" },
  { name: "Docker", icon: "/assets/icons/docker.svg", color: "#2496ED" },
  {
    name: "Android Studio",
    icon: "/assets/icons/androidstudio.svg",
    color: "#3DDC84",
  },
];

function TechBadge({
  name,
  icon,
  color,
}: {
  name: string;
  icon: string;
  color: string;
}) {
  return (
    <div className="tech-badge group" style={{ color: color }}>
      {/* Icon wrapper with brand color glow and brightness boost for dark SVGs */}
      <div
        className="tech-badge-icon"
        style={{
          filter: `drop-shadow(0px 0px 6px ${color}88)`,
        }}
      >
        <Image
          src={icon}
          alt={`${name} icon`}
          width={28}
          height={28}
          className="object-contain brightness-125 contrast-125"
        />
      </div>
      <span className="tech-badge-label">{name}</span>
    </div>
  );
}

export default function TechStackMarquee() {
  return (
    <section className="marquee-section">
      <div className="container mx-auto p-4">
        {/* Top Row: Scrolls Left */}
        <div className="marquee-row-wrapper mb-10">
          <div className="scroll-left-loop flex gap-4 whitespace-nowrap">
            {[...TOP_ROW, ...TOP_ROW].map((tech, i) => (
              <TechBadge
                key={i}
                name={tech.name}
                icon={tech.icon}
                color={tech.color}
              />
            ))}
          </div>
          <div className="marquee-fade-overlay" />
        </div>

        {/* Bottom Row: Scrolls Right */}
        <div className="marquee-row-wrapper">
          <div className="scroll-right-loop flex gap-4 whitespace-nowrap">
            {[...BOTTOM_ROW, ...BOTTOM_ROW].map((tech, i) => (
              <TechBadge
                key={i}
                name={tech.name}
                icon={tech.icon}
                color={tech.color}
              />
            ))}
          </div>
          <div className="marquee-fade-overlay" />
        </div>
      </div>
    </section>
  );
}
