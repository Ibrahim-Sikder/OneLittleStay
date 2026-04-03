"use client";
import Link from "next/link";
import logo from "@/assets/images/logo/logo2.png";
import logo2 from "@/assets/images/logo/logo3.png";
import logo3 from "@/assets/images/logo/logo4.png";
import logo4 from "@/assets/images/logo/logo5.png";
import Image from "next/image";

const dots = [
  { color: "#6366f1", top: "26%", left: "4%", size: "10px" },
  { color: "#f87171", top: "60%", left: "6%", size: "8px" },
  { color: "#FACC15", top: "85%", left: "5%", size: "8px" },
  { color: "#4ADE80", top: "16%", left: "47%", size: "10px" },
  { color: "#22D3EE", top: "92%", left: "48%", size: "10px" },
  { color: "#FACC15", top: "38%", right: "3%", size: "9px" },
  { color: "#1e293b", top: "80%", right: "4%", size: "10px" },
];

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "#ffffff",
        paddingTop: "clamp(40px, 10vw, 85px)",
        paddingBottom: "clamp(40px, 10vw, 40px)",
        minHeight: "530px",
      }}
    >
      {/* Top pink gradient fade only — no center glow */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "100px",
          background:
            "linear-gradient(to bottom, rgba(236, 60, 106, 0.09) 0%, rgba(255,255,255,0) 100%)",
          zIndex: 1,
        }}
      />

      {/* Grid — smaller tighter cells to match design */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          backgroundImage:
            "linear-gradient(to right, #dcdcdc 1px, transparent 1px), linear-gradient(to bottom, #dcdcdc 1px, transparent 1px)",
          backgroundSize: "clamp(60px, 8vw, 90px) clamp(60px, 7vw, 80px)",
          opacity: 0.65,
        }}
      />

      {/* Colored dots */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full hidden sm:block"
          style={{
            width: `clamp(${dot.size}, 1.5vw, ${dot.size})`,
            height: `clamp(${dot.size}, 1.5vw, ${dot.size})`,
            backgroundColor: dot.color,
            top: dot.top,
            left: dot.left ?? undefined,
            right: dot.right ?? undefined,
            zIndex: 5,
          }}
        />
      ))}

      {/* Top-left: Airbnb */}
      <div
        className="absolute hidden sm:flex -rotate-12"
        style={{ top: "13%", left: "25%", zIndex: 5 }}
      >
        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24">
          <Image
            src={logo}
            alt="Airbnb Logo"
            width={80}
            height={80}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Top-right: Booking */}
      <div
        className="absolute hidden sm:flex rotate-6"
        style={{ top: "13%", right: "25%", zIndex: 5 }}
      >
        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24">
          <Image
            src={logo4}
            alt="Booking Logo"
            width={80}
            height={80}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Bottom-left: Vrbo */}
      <div
        className="absolute hidden sm:flex -rotate-6"
        style={{ top: "75%", left: "28%", zIndex: 5 }}
      >
        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px]">
          <Image
            src={logo3}
            alt="Vrbo Logo"
            width={80}
            height={80}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Bottom-right: Tripadvisor */}
      <div
        className="absolute hidden sm:flex rotate-12"
        style={{ top: "75%", right: "28%", zIndex: 5 }}
      >
        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px]">
          <Image
            src={logo2}
            alt="Tripadvisor Logo"
            width={80}
            height={80}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Hero content */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6"
        style={{
          zIndex: 10,
          paddingTop: "clamp(30px, 8vw, 60px)",
          paddingBottom: "clamp(30px, 6vw, 40px)",
        }}
      >
        <h1
          className="font-bold leading-tight px-2"
          style={{
            fontSize: "clamp(28px, 4.8vw, 54px)",
            color: "var(--text-primary)",
            marginBottom: "4px",
          }}
        >
          Airbnb Assistants For
        </h1>

        <h2
          className="font-normal leading-tight px-2"
          style={{
            fontSize: "clamp(24px, 4.2vw, 48px)",
            color: "var(--text-primary)",
            marginBottom: "clamp(20px, 4vw, 24px)",
          }}
        >
          Property Management
        </h2>

        <p
          style={{
            maxWidth: "min(530px, 90vw)",
            fontSize: "clamp(14px, 3.5vw, 15px)",
            lineHeight: "1.6",
            color: "var(--text-secondary)",
            textAlign: "center",
            marginBottom: "clamp(28px, 6vw, 34px)",
            paddingLeft: "clamp(12px, 4vw, 0)",
            paddingRight: "clamp(12px, 4vw, 0)",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <Link
          href="#"
          className="inline-flex items-center gap-2 font-semibold text-white rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            backgroundColor: "var(--primary)",
            padding: "clamp(11px, 3vw, 13px) clamp(28px, 6vw, 34px)",
            fontSize: "clamp(14px, 3.5vw, 15px)",
            marginBottom: "18px",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--primary-dark)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--primary)")
          }
        >
          Schedule A Meeting <span>→</span>
        </Link>

        <Link
          href="#"
          className="text-sm font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
          style={{ color: "var(--text-primary)" }}
        >
          See Pricing
        </Link>
      </div>
    </section>
  );
}
