import Image from "next/image";
import { SERVICES } from "@/lib/data";

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
