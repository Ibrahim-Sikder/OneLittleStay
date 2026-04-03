"use client";

import Image from "next/image";
import Container from "@/components/container";
import { tools } from "@/data/tools";

export default function ToolSection() {
  return (
    <section
      aria-labelledby="tools-heading"
      className="w-full bg-white pb-12 md:pb-16 px-4 sm:px-6"
    >
      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-14 px-4">
        <h2
          id="tools-heading"
          className="text-xl sm:text-3xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Our <span style={{ color: "var(--primary)" }}>Tools</span>
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

      {/* Tools Grid */}
      <div
        className="mx-auto rounded-2xl p-4 sm:p-6 md:p-8"
        style={{ backgroundColor: "var(--bg-light)" }}
      >
        <Container className="max-w-3xl">
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {tools.slice(0, 9).map((tool, i) => (
              <li
                key={tool.alt}
                className="rounded-xl flex items-center justify-center p-3"
                style={{
                  minHeight: "100px",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                  backgroundColor: "var(--background)",
                }}
              >
                <Image
                  src={tool.img}
                  alt={tool.alt}
                  width={160}
                  height={48}
                  className="object-contain h-auto w-24 sm:w-28 md:w-32"
                />
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
