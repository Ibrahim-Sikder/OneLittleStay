"use client";
import Container from "@/components/container";
import { faqs } from "@/data/faq";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <Container>
      <section
        className="w-full py-10 md:py-16 px-6"
        style={{ backgroundColor: "var(--bg-gray)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-xl sm:text-2xl md:text-4xl font-bold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              Frequently asked{" "}
              <span style={{ color: "var(--primary)" }}>questions</span>
            </h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
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
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span
                    className="text-sm md:text-base font-medium transition-colors duration-200 pr-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`w-5 h-5 md:w-7 md:h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-2 md:ml-4 transition-all duration-300 ${
                      openIndex === i ? "rotate-180" : "rotate-0"
                    }`}
                    style={{ borderColor: "var(--primary)" }}
                  >
                    {openIndex === i ? (
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="md:w-3 md:h-3"
                      >
                        <path
                          d="M2 6h8"
                          stroke="var(--primary)"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="md:w-3 md:h-3"
                      >
                        <path
                          d="M6 2v8M2 6h8"
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
                      className="text-sm leading-relaxed"
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
