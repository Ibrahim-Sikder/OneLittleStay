"use client";

import Container from "@/components/container";
import { faqs } from "@/data/faq";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <Container>
      <section
        aria-labelledby="faq-heading"
        role="region"
        className=" py-10 md:py-16 px-6 md:px-36"
        style={{ backgroundColor: "var(--bg-gray)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="faq-heading"
              className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Frequently asked{" "}
              <span style={{ color: "var(--primary)" }}>questions</span>
            </h2>
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Everything you need to know about the product and billing.
            </p>
          </div>

          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b last:border-b-0"
                style={{ borderColor: "var(--border-default)" }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  aria-expanded={openIndex === i}
                  className="w-full flex items-center justify-between py-5 text-left group focus:outline-none focus:ring-0 focus:ring-offset-0 active:outline-none active:ring-0 transition-colors"
                >
                  <span
                    className="text-sm md:text-base font-medium transition-colors duration-200 pr-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`w-6 h-6 md:w-7 md:h-7 flex items-center justify-center flex-shrink-0 ml-2 md:ml-4 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : "rotate-0"
                    }`}
                    style={{ borderColor: "var(--primary)" }}
                  >
                    {openIndex === i ? (
                      <svg width="8" height="2" viewBox="0 0 12 2" fill="none">
                        <path
                          d="M0 1h12"
                          stroke="var(--primary)"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M6 0v12M0 6h12"
                          stroke="var(--primary)"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === i
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-5">
                    <p
                      className="text-sm md:text-base leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
