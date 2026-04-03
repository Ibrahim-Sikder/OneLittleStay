"use client";

import { steps } from "@/data/easy";
import Image from "next/image";

export default function EasySection() {
  return (
    <section
      aria-labelledby="easy-heading"
      className="w-full bg-white pb-12 md:pb-16 px-10 sm:px-6"
    >
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
        <h2
          id="easy-heading"
          className="text-xl md:text-4xl font-bold mb-3 md:mb-5"
          style={{ color: "var(--text-primary)" }}
        >
          Getting Started is{" "}
          <span style={{ color: "var(--primary)" }}>Easy</span>
        </h2>
        <p
          className="text-sm sm:text-base leading-relaxed px-2"
          style={{ color: "var(--text-secondary)" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <ol className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {steps.map((step) => (
          <li key={step.number} className="flex flex-col items-center">
            <div className="relative self-start mb-[-12px] md:mb-[-16px] ml-3 md:ml-4 z-10">
              <div
                className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 bg-white flex items-center justify-center"
                style={{ borderColor: "var(--primary)" }}
              >
                <span
                  className="text-xs md:text-sm font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {step.number}
                </span>
              </div>
            </div>
            <div
              className="w-full bg-white rounded-xl flex items-center justify-center pt-8 pb-5 px-4 md:pt-12 md:pb-8 md:px-6"
              style={{
                minHeight: "120px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                border: `1px solid var(--primary-light)`,
              }}
            >
              <Image
                src={step.icon}
                alt={step.alt}
                width={50}
                height={50}
                className="object-contain md:w-[70px] md:h-[70px] w-[50px] h-[50px]"
              />
            </div>

            <p
              className="text-center font-semibold text-xs md:text-sm mt-3 md:mt-5 leading-snug whitespace-pre-line px-2"
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
