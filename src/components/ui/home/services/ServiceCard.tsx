"use client";

import { useState } from "react";
import Image from "next/image";
import { ServiceCardProps } from "@/interface/service";

export default function ServiceCard({
  img,
  title,
  description,
  isActive,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 flex flex-col gap-5 transition-all duration-300 ${
        isHovered ? "scale-105" : "scale-100"
      } ${isActive ? "bg-white border-0" : ""}`}
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-20 h-20 flex items-center justify-center">
        <Image
          src={img}
          alt={title}
          width={60}
          height={60}
          className="object-contain transition-transform duration-300"
          style={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
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
}
