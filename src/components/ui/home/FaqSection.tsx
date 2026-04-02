"use client";
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
    <section className="w-full bg-[#f8fafc] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-3">
            Frequently asked <span className="text-[#e91e63]">questions</span>
          </h2>
          <p className="text-gray-500 text-sm">
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span
                  className={`text-sm font-medium ${
                    openIndex === i ? "text-[#1a1a1a]" : "text-[#1a1a1a]"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`w-7 h-7 rounded-full border-2 border-[#e91e63] flex items-center justify-center flex-shrink-0 ml-4 transition-transform duration-200 ${
                    openIndex === i ? "rotate-0" : ""
                  }`}
                >
                  {openIndex === i ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6h8"
                        stroke="#e91e63"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 2v8M2 6h8"
                        stroke="#e91e63"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === i && (
                <div className="pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
