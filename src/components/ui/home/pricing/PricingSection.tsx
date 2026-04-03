"use client";
import { useState } from "react";
import price from "@/assets/images/tools/price.png";
import Image from "next/image";
import { plans } from "@/data/price";
import CheckIcon from "./CheckIcon";
import Button from "../../Button";

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 md:px-6 lg:px-6">
      <div className="text-center max-w-full px-2 sm:px-4">
        <h2
          className="text-xl sm:text-2xl md:text-4xl font-bold mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          Airnbn Assistent{" "}
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
        </div>
        <div className="hidden md:block mt-2 sm:mt-0 sm:absolute left-[57%] md:static lg:absolute">
          <Image
            src={price}
            alt="price"
            height={30}
            width={150}
            className="w-auto h-auto max-w-[120px] sm:max-w-[150px]"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 items-stretch px-2 sm:px-0">
        {plans.map((plan) => (
          <div
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
              className={`text-lg sm:text-xl font-bold mb-2 ${
                plan.highlight ? "text-white" : "text-[#1a1a1a]"
              }`}
              style={!plan.highlight ? { color: "var(--text-primary)" } : {}}
            >
              {plan.name}
            </h3>
            <p
              className={`text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed ${
                plan.highlight ? "text-pink-100" : "text-gray-500"
              }`}
              style={!plan.highlight ? { color: "var(--text-secondary)" } : {}}
            >
              {plan.desc}
            </p>

            {/* Price */}
            <div className="flex items-end gap-1 mb-4 sm:mb-6">
              <span
                className={`text-4xl sm:text-5xl font-bold ${
                  plan.highlight ? "text-white" : "text-[#1a1a1a]"
                }`}
                style={!plan.highlight ? { color: "var(--text-primary)" } : {}}
              >
                ${yearly ? Math.round(plan.price * 0.75) : plan.price}
              </span>
              <span
                className={`text-xs sm:text-sm mb-1 sm:mb-2 ${
                  plan.highlight ? "text-pink-100" : "text-gray-400"
                }`}
                style={!plan.highlight ? { color: "var(--text-muted)" } : {}}
              >
                / Month
              </span>
            </div>
            {/* <button
              className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm mb-5 sm:mb-7 border-2 transition-all duration-200 ${
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
            </button> */}
            <Button
              variant={plan.highlight ? "outline" : "outline"}
              size="md"
              fullWidth
              style={{
                backgroundColor: plan.highlight ? "white" : "white",
                color: "var(--primary)",
                borderColor: "var(--primary)",
              }}
              className={
                plan.highlight
                  ? "hover:bg-pink-50 mb-5 sm:mb-7"
                  : "hover:bg-pink-50 mb-5 sm:mb-7"
              }
            >
              Get Started Now
            </Button>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 sm:gap-3">
                  <CheckIcon included={f.included} highlight={plan.highlight} />
                  <span
                    className={`text-xs sm:text-sm ${
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
