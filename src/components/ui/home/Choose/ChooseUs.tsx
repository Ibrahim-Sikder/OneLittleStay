"use client";

import Image from "next/image";
import choose from "@/assets/images/client/client.png";
import { features } from "@/contstant";
import { CheckCircle } from "./CheckIcon";

export default function ChooseUs() {
  return (
    <section className="w-full bg-white pb-12 md:pb-16 px-4 sm:px-6">
      <div
        className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative"
        style={{ background: "#fce4ec", minHeight: "420px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full">
          <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Few Reasons Why you
              <br />
              Choose us?
            </h2>
            <p
              className="text-sm leading-relaxed mb-7"
              style={{ color: "var(--text-secondary)" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <div>
              <button
                className="text-white text-sm font-semibold px-7 py-3 rounded-lg transition-all duration-200 hover:scale-105 flex items-center gap-2"
                style={{ backgroundColor: "var(--primary)" }}
              >
                Schedule A Meeting
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="relative flex items-end justify-center overflow-hidden">
            <div className="relative z-10">
              <Image
                src={choose}
                alt="Person"
                width={500}
                height={500}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
