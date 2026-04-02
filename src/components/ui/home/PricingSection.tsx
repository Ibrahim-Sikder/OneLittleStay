"use client";
import { useState } from "react";
import price from "@/assets/images/tools/price.png";
import Image from "next/image";

const plans = [
  {
    name: "Freebie",
    desc: "Ideal for individuals who need quick access to basic features.",
    price: 0,
    highlight: false,
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: false },
      { text: "Unlimited Sharing", included: false },
      { text: "Upload graphics & video in up to 4k", included: false },
      { text: "Unlimited Projects", included: false },
      { text: "Instant Access to our design system", included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    name: "Professional",
    desc: "Ideal for individuals who who need advanced features and tools for client work.",
    price: 25,
    highlight: true,
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: true },
      { text: "Upload graphics & video in up to 4k", included: true },
      { text: "Unlimited Projects", included: true },
      { text: "Instant Access to our design system", included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    name: "Enterprise",
    desc: "Ideal for businesses who need personalized services and security for large teams.",
    price: 100,
    highlight: false,
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: true },
      { text: "Upload graphics & video in up to 4k", included: true },
      { text: "Unlimited Projects", included: true },
      { text: "Instant Access to our design system", included: true },
      { text: "Create teams to collaborate on designs", included: true },
    ],
  },
];

const CheckIcon = ({
  included,
  highlight,
}: {
  included: boolean;
  highlight: boolean;
}) => (
  <span
    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
      included
        ? highlight
          ? "bg-white/30"
          : "bg-pink-100"
        : highlight
          ? "bg-white/20"
          : "bg-gray-100"
    }`}
  >
    {included ? (
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
        <path
          d="M1 5L4.5 8.5L11 1.5"
          stroke={highlight ? "white" : "var(--primary)"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ) : (
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
          d="M2 2L8 8M8 2L2 8"
          stroke={highlight ? "rgba(255,255,255,0.6)" : "#ccc"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )}
  </span>
);

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="w-full bg-white py-16 px-6">
      {/* Header */}
      <div className="text-center ">
        <h2
          className="text-4xl font-bold mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          Airnbn Assistent{" "}
          <span style={{ color: "var(--primary)" }}>pricing</span>
        </h2>
        <p className="text-base" style={{ color: "var(--text-secondary)" }}>
          Choose a plan that&apos;s right for you
        </p>
      </div>

      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-10 relative">
        <span
          className={`text-sm font-medium ${!yearly ? "text-[#1a1a1a]" : "text-gray-400"}`}
          style={
            !yearly
              ? { color: "var(--text-primary)" }
              : { color: "var(--text-muted)" }
          }
        >
          Pay Monthly
        </span>
        <button
          onClick={() => setYearly(!yearly)}
          className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
            yearly ? "bg-[#e91e63]" : "bg-gray-300"
          }`}
          style={
            yearly
              ? { backgroundColor: "var(--primary)" }
              : { backgroundColor: "var(--border-default)" }
          }
        >
          <span
            className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${
              yearly ? "translate-x-7" : "translate-x-1"
            }`}
          />
        </button>
        <span
          className={`text-sm font-medium ${yearly ? "text-[#1a1a1a]" : "text-gray-400"}`}
          style={
            yearly
              ? { color: "var(--text-primary)" }
              : { color: "var(--text-muted)" }
          }
        >
          Pay Yearly
        </span>
        {/* Save 25% badge */}
        <div className="mt-3">
          <Image src={price} alt="price" height={30} width={150} />
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl flex flex-col p-7 ${
              plan.highlight ? "text-white" : "bg-white border border-gray-200"
            }`}
            style={{
              backgroundColor: plan.highlight
                ? "var(--primary)"
                : "var(--background)",
              borderColor: plan.highlight ? undefined : "var(--border-default)",
              boxShadow: plan.highlight
                ? "0 8px 32px rgba(233,30,99,0.2)"
                : "0 2px 16px rgba(0,0,0,0.06)",
            }}
          >
            <h3
              className={`text-xl font-bold mb-2 ${
                plan.highlight ? "text-white" : "text-[#1a1a1a]"
              }`}
              style={!plan.highlight ? { color: "var(--text-primary)" } : {}}
            >
              {plan.name}
            </h3>
            <p
              className={`text-sm mb-5 leading-relaxed ${
                plan.highlight ? "text-pink-100" : "text-gray-500"
              }`}
              style={!plan.highlight ? { color: "var(--text-secondary)" } : {}}
            >
              {plan.desc}
            </p>

            {/* Price */}
            <div className="flex items-end gap-1 mb-6">
              <span
                className={`text-5xl font-bold ${
                  plan.highlight ? "text-white" : "text-[#1a1a1a]"
                }`}
                style={!plan.highlight ? { color: "var(--text-primary)" } : {}}
              >
                ${yearly ? Math.round(plan.price * 0.75) : plan.price}
              </span>
              <span
                className={`text-sm mb-2 ${
                  plan.highlight ? "text-pink-100" : "text-gray-400"
                }`}
                style={!plan.highlight ? { color: "var(--text-muted)" } : {}}
              >
                / Month
              </span>
            </div>

            {/* CTA */}
            <button
              className={`w-full py-3 rounded-lg font-semibold text-sm mb-7 border-2 transition-all duration-200 ${
                plan.highlight
                  ? "bg-white border-white hover:bg-pink-50"
                  : "bg-white border-[#e91e63] hover:bg-pink-50"
              }`}
              style={
                plan.highlight
                  ? { color: "var(--primary)" }
                  : { color: "var(--primary)", borderColor: "var(--primary)" }
              }
            >
              Get Started Now
            </button>

            {/* Features */}
            <ul className="flex flex-col gap-3">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckIcon included={f.included} highlight={plan.highlight} />
                  <span
                    className={`text-sm ${
                      f.included
                        ? plan.highlight
                          ? "text-white"
                          : "text-[#1a1a1a]"
                        : plan.highlight
                          ? "text-pink-200"
                          : "text-gray-400"
                    }`}
                    style={
                      !plan.highlight && f.included
                        ? { color: "var(--text-primary)" }
                        : !plan.highlight && !f.included
                          ? { color: "var(--text-muted)" }
                          : {}
                    }
                  >
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
