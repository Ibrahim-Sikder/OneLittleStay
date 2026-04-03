"use client";
import Link from "next/link";
import logo from "@/assets/images/logo/logo2.png";
import logo2 from "@/assets/images/logo/logo3.png";
import logo3 from "@/assets/images/logo/logo4.png";
import logo4 from "@/assets/images/logo/logo5.png";
import dot from "@/assets/images/dot/dot.png";
import dot2 from "@/assets/images/dot/dot2.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "#ffffff",
        paddingTop: "clamp(40px, 10vw, 75px)",
        paddingBottom: "clamp(25px, 10vw, 94px)",
        minHeight: "clamp(350px, 45vh, 550px)",
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

      {/* Top-left: Airbnb - responsive positioning */}
      <div
        className="absolute hidden sm:flex -rotate-12"
        style={{
          top: "clamp(8%, 13%, 15%)",
          left: "clamp(15%, 25%, 30%)",
          zIndex: 5,
        }}
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-24">
          <Image
            src={logo}
            alt="Airbnb Logo"
            width={80}
            height={80}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Top-right: Booking - responsive positioning */}
      <div
        className="absolute hidden sm:flex rotate-6"
        style={{
          top: "clamp(8%, 13%, 15%)",
          right: "clamp(15%, 25%, 30%)",
          zIndex: 5,
        }}
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-24">
          <Image
            src={logo4}
            alt="Booking Logo"
            width={80}
            height={80}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Bottom-left: Vrbo - responsive positioning */}
      <div
        className="absolute hidden sm:flex -rotate-6"
        style={{
          top: "clamp(70%, 75%, 80%)",
          left: "clamp(18%, 28%, 32%)",
          zIndex: 5,
        }}
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px]">
          <Image
            src={logo3}
            alt="Vrbo Logo"
            width={80}
            height={80}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Bottom-right: Tripadvisor - responsive positioning */}
      <div
        className="absolute hidden sm:flex rotate-12"
        style={{
          top: "clamp(70%, 75%, 80%)",
          right: "clamp(18%, 28%, 32%)",
          zIndex: 5,
        }}
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px]">
          <Image
            src={logo2}
            alt="Tripadvisor Logo"
            width={80}
            height={80}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Hero content - fully responsive with improved spacing */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6"
        style={{
          zIndex: 10,
          paddingTop: "clamp(30px, 8vw, 60px)",
          paddingBottom: "clamp(30px, 6vw, 40px)",
        }}
      >
        <div className="hidden sm:block mb-5 lg:w-3 lg:h-3">
          <Image
            src={dot}
            alt="dot"
            width={50}
            height={50}
            className="w-full h-full object-contain"
          />
        </div>
        <h1
          className="font-bold leading-tight px-2"
          style={{
            fontSize: "clamp(24px, 4.8vw, 40px)",
            color: "var(--text-primary)",
            marginBottom: "clamp(2px, 1vw, 4px)",
          }}
        >
          Airbnb Assistants For
        </h1>

        <h2
          className="font-normal leading-tight px-2"
          style={{
            fontSize: "clamp(22px, 4.2vw, 30px)",
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
            paddingLeft: "clamp(16px, 5vw, 0)",
            paddingRight: "clamp(16px, 5vw, 0)",
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
        <div className="hidden sm:block mt-5  lg:w-3 lg:h-3 ">
          <Image
            src={dot2}
            alt="dot2"
            width={50}
            height={50}
            className=" w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
