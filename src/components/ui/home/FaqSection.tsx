"use client";
import Container from "@/components/container";
import { useState } from "react";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time from your account settings.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. Your plan will remain active until the end of your billing period.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add custom information to your invoices, including company name, address, VAT number, and more.",
  },
  {
    question: "How does billing work?",
    answer:
      "We bill monthly or annually. You'll be charged at the start of each billing cycle and can view all invoices in your billing dashboard.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can change your account email from your profile settings. You'll receive a confirmation email to verify the change.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <Container>
      <section
        className="w-full py-16 px-6"
        style={{ backgroundColor: "var(--bg-gray)" }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              Frequently asked{" "}
              <span style={{ color: "var(--primary)" }}>questions</span>
            </h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Everything you need to know about the product and billing.
            </p>
          </div>

          {/* FAQ Items */}
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
                    className="text-sm font-medium transition-colors duration-200"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${
                      openIndex === i ? "rotate-180" : "rotate-0"
                    }`}
                    style={{ borderColor: "var(--primary)" }}
                  >
                    {openIndex === i ? (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
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
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
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
