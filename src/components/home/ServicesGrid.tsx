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
    <section className="bg-[#09090B] text-white py-20">
      <div className="px-8 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-[#131315] border border-gray-800 rounded-4xl shadow-md overflow-hidden hover:shadow-lg hover:border-gray-700 transition-all duration-300 h-[500px] pl-10 pt-10 flex flex-col gap-6"
            >
              <div>
                <h3 className="text-white text-2xl font-inter mb-2 font-semibold">
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-6 text-lg font-inter">
                  {service.description}
                </p>
              </div>
              <div className="relative w-full flex-grow">
                <div className="w-full h-full bg-gray-900 rounded-tl-2xl border-t border-l border-gray-800 flex items-center justify-center text-gray-600 text-sm">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-tl-2xl"
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
