"use client";

import { services } from "@/contstant";
import { ServiceCard } from "./ServiceCard";

export default function ServiceSection() {
  return (
    <section
      aria-labelledby="services-heading"
      className="w-full bg-white pb-12 md:pb-16 px-4 sm:px-6"
    >
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <h2
          id="services-heading"
          className="text-xl sm:text-2xl md:text-4xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Our <span style={{ color: "var(--primary)" }}>Services</span>
        </h2>
        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            img={service.img}
            title={service.title}
            description={service.description}
            isActive={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
