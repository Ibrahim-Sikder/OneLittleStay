import Image from "next/image";
import easy from "@/assets/images/easy/easy.png";
import easy2 from "@/assets/images/easy/easy4.png";
import easy3 from "@/assets/images/easy/easy3.png";

const steps = [
  {
    number: "01",
    icon: easy3,
    alt: "Add requirements & sign up",
    label: "Add requirements\n& sign up today",
  },
  {
    number: "02",
    icon: easy,
    alt: "Connect with your CSM",
    label: "Connect with your CSM &\nonboarding team",
  },
  {
    number: "03",
    icon: easy2,
    alt: "Meet your STR Assistant",
    label: "Meet your STR\nAssistant next week",
  },
];

export default function EasySection() {
  return (
    <section className="w-full bg-white py-16 px-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2
          className="text-4xl font-bold mb-5"
          style={{ color: "var(--text-primary)" }}
        >
          Getting Started is{" "}
          <span style={{ color: "var(--primary)" }}>Easy</span>
        </h2>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Number badge */}
            <div className="self-start mb-[-16px] ml-4 z-10 relative">
              <div
                className="w-12 h-12 rounded-full border-2 bg-white flex items-center justify-center"
                style={{ borderColor: "var(--primary)" }}
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {step.number}
                </span>
              </div>
            </div>
            {/* Card with light primary border */}
            <div
              className="w-full bg-white rounded-xl flex items-center justify-center pt-12 pb-8 px-6"
              style={{
                minHeight: "160px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                border: `1px solid var(--primary-light)`,
              }}
            >
              <Image
                src={step.icon}
                alt={step.alt}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            {/* Label */}
            <p
              className="text-center font-semibold text-sm mt-5 leading-snug whitespace-pre-line"
              style={{ color: "var(--text-primary)" }}
            >
              {step.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
