"use client";

import Image from "next/image";
import { services } from "@/contstant";
import { ServiceCardProps } from "@/interface/service";
const ServiceCard: React.FC<ServiceCardProps> = ({
  img,
  title,
  description,
  isActive,
}) => (
  <div
    className={`rounded-2xl p-6 sm:p-8 flex flex-col gap-5 transition-all duration-300 hover:scale-105 ${
      isActive ? "bg-white border-0" : ""
    }`}
    style={{
      boxShadow: isActive
        ? "0 2px 16px 0 rgba(0,0,0,0.07)"
        : "0 2px 16px 0 rgba(0,0,0,0.05)",
      border: isActive ? "none" : `1px solid var(--primary-light)`,
      backgroundColor: isActive
        ? "var(--background)"
        : "rgba(248, 190, 205, 0.1)",
      minHeight: "280px",
    }}
  >
    <div className="w-20 h-20 flex items-center justify-center">
      <Image
        src={img}
        alt={title}
        width={60}
        height={60}
        className="object-contain"
      />
    </div>

    <h3
      className="font-bold text-xl leading-snug"
      style={{ color: "var(--text-primary)" }}
    >
      {title}
    </h3>

    <p
      className="text-sm leading-relaxed flex-1"
      style={{ color: "var(--text-secondary)" }}
    >
      {description}
    </p>

    <div>
      <button
        className="text-sm font-medium rounded-full px-5 py-2 transition-all duration-200 hover:scale-105"
        style={{
          border: `1px solid var(--primary)`,
          color: "var(--primary)",
          backgroundColor: "var(--background)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "var(--primary)";
          e.currentTarget.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "var(--background)";
          e.currentTarget.style.color = "var(--primary)";
        }}
      >
        Read More
      </button>
    </div>
  </div>
);

export default function ServiceSection() {
  return (
    <section className="w-full bg-white pb-12 md:pb-16 px-4 sm:px-6">
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <h2
          className="text-xl sm:text-2xl md:text-4xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Our <span style={{ color: "var(--primary)" }}>Service</span>
        </h2>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
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
