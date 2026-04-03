"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../../Button";
import CheckIcon from "./CheckIcon";
import { plans } from "@/data/price";
import priceImage from "@/assets/images/tools/price.png";

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section
      aria-labelledby="pricing-heading"
      className="w-full bg-white py-16 px-4 sm:px-6 md:px-6 lg:px-6"
    >
      <div className="text-center max-w-full px-2 sm:px-4">
        <h2
          id="pricing-heading"
          className="text-xl sm:text-2xl md:text-4xl font-bold mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          Airbnb Assistant{" "}
          <span style={{ color: "var(--primary)" }}>pricing</span>
        </h2>
        <p
          className="text-sm sm:text-base"
          style={{ color: "var(--text-secondary)" }}
        >
          Choose a plan that&apos;s right for you
        </p>
      </div>

      <div className="flex flex-col sm:flex-row mt-5 items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 relative">
        <div className="flex items-center gap-4">
          <span
            className="text-sm font-medium"
            style={{
              color: !yearly ? "var(--text-primary)" : "var(--text-muted)",
            }}
          >
            Pay Monthly
          </span>

          <button
            onClick={() => setYearly(!yearly)}
            aria-label="Toggle billing frequency"
            aria-pressed={yearly}
            className="relative w-12 h-6 rounded-full transition-colors duration-300"
            style={{
              backgroundColor: yearly
                ? "var(--primary)"
                : "var(--border-default)",
            }}
          >
            <span
              className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${
                yearly ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </button>

          <span
            className="text-sm font-medium"
            style={{
              color: yearly ? "var(--text-primary)" : "var(--text-muted)",
            }}
          >
            Pay Yearly
          </span>
        </div>

        <div className="hidden md:block mt-2 sm:mt-0 sm:absolute left-[57%] md:static lg:absolute">
          <Image
            src={priceImage}
            alt="price"
            width={150}
            height={30}
            className="w-auto h-auto max-w-[150px]"
          />
        </div>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 items-stretch px-2 sm:px-0">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-2xl flex flex-col p-5 sm:p-6 md:p-7 ${
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
              className={`text-lg sm:text-xl font-bold mb-2`}
              style={{
                color: plan.highlight ? "white" : "var(--text-primary)",
              }}
            >
              {plan.name}
            </h3>

            <p
              className={`text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed`}
              style={{
                color: plan.highlight ? "#ffc1d9" : "var(--text-secondary)",
              }}
            >
              {plan.desc}
            </p>
            <div className="flex items-end gap-1 mb-4 sm:mb-6">
              <span
                className="text-4xl sm:text-5xl font-bold"
                style={{
                  color: plan.highlight ? "white" : "var(--text-primary)",
                }}
              >
                ${yearly ? Math.round(plan.price * 0.75) : plan.price}
              </span>
              <span
                className="text-xs sm:text-sm mb-1 sm:mb-2"
                style={{
                  color: plan.highlight ? "#ffc1d9" : "var(--text-muted)",
                }}
              >
                / Month
              </span>
            </div>
            <Button
              variant="outline"
              size="md"
              fullWidth
              className="hover:bg-pink-50 mb-5 sm:mb-7"
              style={{
                backgroundColor: "white",
                color: "var(--primary)",
                borderColor: "var(--primary)",
              }}
            >
              Get Started Now
            </Button>

            <ul className="flex flex-col gap-2 sm:gap-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 sm:gap-3">
                  <CheckIcon
                    included={feature.included}
                    highlight={plan.highlight}
                  />
                  <span
                    className="text-xs sm:text-sm"
                    style={{
                      color: feature.included
                        ? plan.highlight
                          ? "white"
                          : "var(--text-primary)"
                        : plan.highlight
                          ? "#ffc1d9"
                          : "var(--text-muted)",
                    }}
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
