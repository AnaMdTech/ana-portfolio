import React from "react";
import Image from "next/image";

const SERVICES = [
  {
    title: "Websites",
    description: "Responsive websites and dashboards for your business.",
    image: "/assets/images/website-card.jpg",
  },
  {
    title: "Apps",
    description: "Designing mobile apps for iOS and Android users.",
    image: "/assets/images/apps-card.jpg",
  },
  {
    title: "Design systems",
    description:
      "Building robust and flexible design systems for easy scalability.",
    image: "/assets/images/design-card.jpg",
  },
];

export default function ServicesGrid() {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <div key={index} className="service-card group">
              <div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>

              <div className="service-img-wrapper">
                <div className="service-img-inner">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="service-img"
                    />
                  ) : (
                    <p>{service.title} Preview</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
