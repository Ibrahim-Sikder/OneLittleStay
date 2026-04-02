"use client";

import Image from "next/image";
import service from "@/assets/images/services/service.png";
import service2 from "@/assets/images/services/service2.png";
import service3 from "@/assets/images/services/service3.png";
import service4 from "@/assets/images/services/service4.png";
import service5 from "@/assets/images/services/service5.png";
import service6 from "@/assets/images/services/service6.png";
import { ServiceCardProps } from "@/interface/service";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const services = [
  { img: service, title: "Manage Property Listings", description: LOREM },
  { img: service2, title: "Manage Customer Bookings", description: LOREM },
  { img: service3, title: "Schedule House Cleaning", description: LOREM },
  { img: service4, title: "Monitor Guest Reviews", description: LOREM },
  { img: service5, title: "Track & Report Expenses", description: LOREM },
  { img: service6, title: "Guest Inquiry & Support", description: LOREM },
];

// ─── Service Card Component ─────────────────────────────────────────────────────────────

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

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function ServiceSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-4"
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

      {/* Grid */}
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
