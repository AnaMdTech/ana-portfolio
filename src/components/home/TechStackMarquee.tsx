import Image from "next/image";
import { TECH_STACK_TOP, TECH_STACK_BOTTOM } from "@/lib/data";

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
            {[...TECH_STACK_TOP, ...TECH_STACK_TOP].map((tech, i) => (
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
            {[...TECH_STACK_BOTTOM, ...TECH_STACK_BOTTOM].map((tech, i) => (
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
