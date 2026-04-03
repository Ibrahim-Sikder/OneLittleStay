"use client";

import { steps } from "@/data/easy";
import Image from "next/image";

export default function EasySection() {
  return (
    <section
      aria-labelledby="easy-heading"
      className="w-full bg-white pb-12 md:pb-16 px-6"
    >
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2
          id="easy-heading"
          className="text-xl md:text-4xl font-bold mb-5"
          style={{ color: "var(--text-primary)" }}
        >
          Getting Started is{" "}
          <span style={{ color: "var(--primary)" }}>Easy</span>
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

      <ol className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <li key={step.number} className="flex flex-col items-center">
            <div className="relative self-start mb-[-16px] ml-4 z-10">
              <div
                className="w-12 h-12 rounded-full border-2 bg-white flex items-center justify-center"
                style={{ borderColor: "var(--primary)" }}
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {step.number}
                </span>
              </div>
            </div>
            <div
              className="w-full bg-white rounded-xl flex items-center justify-center pt-12 pb-8 px-6"
              style={{
                minHeight: "160px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                border: `1px solid var(--primary-light)`,
              }}
            >
              <Image
                src={step.icon}
                alt={step.alt}
                width={70}
                height={70}
                className="object-contain"
              />
            </div>

            <p
              className="text-center font-semibold text-sm mt-5 leading-snug whitespace-pre-line"
              style={{ color: "var(--text-primary)" }}
            >
              {step.label}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
