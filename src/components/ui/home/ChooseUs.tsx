"use client";

import Image from "next/image";
import choose from "@/assets/images/client/client.png";

const features = [
  "Brilliant Client Service",
  "Flexibility & Adaptibility",
  "We make it Personal",
  "We have expart in our team",
];

// Airbnb logo SVG
const AirbnbLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="6" fill="#FF5A5F" />
    <path
      d="M14 5C12.5 8 9 11 8 13.5C7.3 15.2 7.8 17.2 9.5 18C11 18.7 12.5 18 13.3 16.8C14 15.8 14 15.8 14 15.8C14 15.8 14 15.8 14.7 16.8C15.5 18 17 18.7 18.5 18C20.2 17.2 20.7 15.2 20 13.5C19 11 15.5 8 14 5Z"
      fill="white"
    />
  </svg>
);

const VRBOLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="6" fill="#1C5289" />
    <text x="5" y="19" fontSize="9" fontWeight="bold" fill="white">
      VRBO
    </text>
  </svg>
);

const BookingLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="6" fill="#003580" />
    <text x="7" y="19" fontSize="13" fontWeight="bold" fill="white">
      B.
    </text>
  </svg>
);

const TripAdvisorLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="6" fill="#34E0A1" />
    <circle cx="14" cy="14" r="7" fill="white" />
    <circle cx="14" cy="14" r="4" fill="#34E0A1" />
    <circle cx="14" cy="14" r="2" fill="black" />
  </svg>
);

const CheckCircle = () => (
  <span
    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
    style={{ backgroundColor: "var(--primary-light)" }}
  >
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
      <path
        d="M1 5L4.5 8.5L11 1.5"
        stroke="var(--primary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

export default function ChooseUs() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6">
      <div
        className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative"
        style={{ background: "#fce4ec", minHeight: "420px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full">
          {/* Left: Text */}
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

          {/* Right: Image */}
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
