"use client";
import Link from "next/link";
import logo from "@/assets/images/logo/logo2.png";
import logo2 from "@/assets/images/logo/logo3.png";
import logo3 from "@/assets/images/logo/logo4.png";
import logo4 from "@/assets/images/logo/logo5.png";
import Image from "next/image";

const dots = [
  {
    color: "bg-primary",
    top: "top-[18%]",
    left: "left-[5%]",
    size: "w-2.5 h-2.5",
  },
  {
    color: "bg-primary-light",
    top: "top-[58%]",
    left: "left-[7%]",
    size: "w-2 h-2",
  },
  {
    color: "bg-yellow-400",
    top: "top-[78%]",
    left: "left-[11%]",
    size: "w-2 h-2",
  },
  {
    color: "bg-green-400",
    top: "top-[22%]",
    left: "left-[45%]",
    size: "w-2.5 h-2.5",
  },
  {
    color: "bg-cyan-400",
    top: "top-[85%]",
    left: "left-[48%]",
    size: "w-2.5 h-2.5",
  },
  {
    color: "bg-yellow-400",
    top: "top-[48%]",
    right: "right-[5%]",
    size: "w-2 h-2",
  },
  {
    color: "bg-primary",
    top: "top-[75%]",
    right: "right-[6%]",
    size: "w-2.5 h-2.5",
  },
];

export default function HeroSection() {
  return (
    <section
      className="relative w-full bg-white overflow-hidden"
      style={{ minHeight: "calc(100vh - 89px)" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border-default) 1px, transparent 1px), linear-gradient(to bottom, var(--border-default) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Ellipse gradient circle — Figma: w923 h523 top149 left249 */}
      {/* Scaled responsively: on desktop matches Figma proportions, shrinks on mobile */}
      <div
        className="absolute pointer-events-none"
        style={{
          /* Desktop: exact Figma values */
          width: "923px",
          height: "523px",
          top: "149px",
          left: "249px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(236, 72, 153, 0.13) 0%, rgba(236, 72, 153, 0.07) 35%, rgba(255,255,255,0) 70%)",
          filter: "blur(18px)",
          transform: "translateZ(0)",
        }}
      />

      {/* Mobile ellipse — smaller version centered */}
      <div
        className="absolute pointer-events-none block md:hidden"
        style={{
          width: "90vw",
          height: "300px",
          top: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(236, 72, 153, 0.13) 0%, rgba(236, 72, 153, 0.07) 35%, rgba(255,255,255,0) 70%)",
          filter: "blur(14px)",
        }}
      />

      {/* Colored dots — hidden on very small screens */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className={`absolute rounded-full hidden sm:block ${dot.size} ${dot.top} ${dot.left || ""} ${dot.right || ""}`}
          style={{
            backgroundColor:
              dot.color === "bg-primary"
                ? "var(--primary)"
                : dot.color === "bg-primary-light"
                  ? "var(--primary-light)"
                  : dot.color === "bg-yellow-400"
                    ? "#FACC15"
                    : dot.color === "bg-green-400"
                      ? "#4ADE80"
                      : dot.color === "bg-cyan-400"
                        ? "#22D3EE"
                        : "",
          }}
        />
      ))}

      {/* Floating brand icons */}
      {/* Top-left: Airbnb */}
      <div className="absolute top-[12%] left-[3%] sm:left-[6%] lg:left-[10%] -rotate-12 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center">
        <Image
          src={logo}
          alt="Airbnb Logo"
          width={100}
          height={100}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Top-right: Booking */}
      <div className="absolute top-[12%] right-[3%] sm:right-[6%] lg:right-[12%] rotate-6 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center">
        <Image
          src={logo4}
          alt="Booking Logo"
          width={100}
          height={100}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Bottom-left: Vrbo */}
      <div className="absolute top-[55%] left-[3%] sm:left-[6%] lg:left-[10%] -rotate-6 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center">
        <Image
          src={logo3}
          alt="Vrbo Logo"
          width={100}
          height={100}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Bottom-right: Tripadvisor */}
      <div className="absolute top-[55%] right-[3%] sm:right-[6%] lg:right-[10%] rotate-12 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center">
        <Image
          src={logo2}
          alt="Tripadvisor Logo"
          width={100}
          height={100}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center pt-16 pb-12 px-4 sm:px-6">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight"
          style={{ color: "var(--text-primary)" }}
        >
          Airbnb Assistants For
        </h1>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          style={{ color: "var(--primary)" }}
        >
          Property Management
        </h2>
        <p
          className="max-w-xs sm:max-w-lg md:max-w-2xl text-sm sm:text-base leading-relaxed mb-8 px-2 sm:px-4"
          style={{ color: "var(--text-secondary)" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <Link
          href="#"
          className="text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-md inline-flex items-center gap-2 transition-all duration-200 text-sm sm:text-base mb-4 hover:scale-105 active:scale-95"
          style={{ backgroundColor: "var(--primary)" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--primary-dark)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--primary)")
          }
        >
          Schedule A Meeting <span className="text-base">→</span>
        </Link>

        <Link
          href="#"
          className="text-sm font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
          style={{ color: "var(--text-primary)" }}
        >
          See Pricing
        </Link>
      </div>

      {/* Trusted tag */}
      <div className="relative z-10 flex justify-center pb-8 px-4">
        <span
          className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-sm font-medium text-center"
          style={{
            border: `1px solid var(--border-default)`,
            color: "var(--text-secondary)",
            backgroundColor: "var(--background)",
          }}
        >
          Trusted by leaders in 50+ industries
        </span>
      </div>
    </section>
  );
}
