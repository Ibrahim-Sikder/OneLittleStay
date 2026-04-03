"use client";
import Link from "next/link";

const dots = [
  { color: "#6366f1", top: "26%", left: "4%", size: "10px" },
  { color: "#f87171", top: "60%", left: "6%", size: "8px" },
  { color: "#FACC15", top: "82%", left: "5%", size: "8px" },
  { color: "#4ADE80", top: "16%", left: "44%", size: "10px" },
  { color: "#22D3EE", top: "90%", left: "46%", size: "10px" },
  { color: "#FACC15", top: "38%", right: "3%", size: "9px" },
  { color: "#1e293b", top: "80%", right: "4%", size: "10px" },
];

const AirbnbIcon = () => (
  <div
    style={{
      width: "80px",
      height: "80px",
      borderRadius: "20px",
      background: "linear-gradient(145deg, #FF6B6B, #e84043)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 8px 28px rgba(0,0,0,0.15)",
    }}
  >
    <svg width="44" height="44" viewBox="0 0 32 32" fill="none">
      <path
        d="M16 3C10.2 3 7 8.5 7 12.5c0 2.7 1.1 5 2.8 6.8L16 29l6.2-9.7C23.9 17.5 25 15.2 25 12.5 25 8.5 21.8 3 16 3zm0 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
        fill="white"
      />
    </svg>
  </div>
);

const BookingIcon = () => (
  <div
    style={{
      width: "80px",
      height: "80px",
      borderRadius: "20px",
      background: "linear-gradient(145deg, #1a3e8a, #003b8f)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 8px 28px rgba(0,0,0,0.15)",
      color: "white",
      fontSize: "30px",
      fontWeight: "900",
      letterSpacing: "-1px",
      fontFamily: "Arial, sans-serif",
    }}
  >
    B.
  </div>
);

const VrboIcon = () => (
  <div
    style={{
      width: "80px",
      height: "80px",
      borderRadius: "20px",
      background: "linear-gradient(145deg, #1b1c4b, #252660)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 8px 28px rgba(0,0,0,0.15)",
    }}
  >
    <svg width="58" height="32" viewBox="0 0 58 32" fill="none">
      <text
        x="29"
        y="22"
        textAnchor="middle"
        fontSize="16"
        fontWeight="700"
        fill="white"
        fontFamily="Arial, sans-serif"
      >
        vrbo
      </text>
    </svg>
  </div>
);

const TripadvisorIcon = () => (
  <div
    style={{
      width: "80px",
      height: "80px",
      borderRadius: "20px",
      background: "linear-gradient(145deg, #00c49a, #00AF87)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 8px 28px rgba(0,0,0,0.15)",
    }}
  >
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <circle cx="16" cy="26" r="9" fill="white" />
      <circle cx="34" cy="26" r="9" fill="white" />
      <circle cx="16" cy="26" r="5" fill="#00AF87" />
      <circle cx="34" cy="26" r="5" fill="#00AF87" />
      <circle cx="16" cy="26" r="2.5" fill="#111" />
      <circle cx="34" cy="26" r="2.5" fill="#111" />
      <rect x="21" y="23" width="8" height="5" rx="1" fill="white" />
      <polygon points="25,14 20,20 30,20" fill="#FF3B30" />
    </svg>
  </div>
);

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "#ffffff",
        paddingTop: "70px",
        paddingBottom: "70px",
        minHeight: "500px",
      }}
    >
      {/* Top pink gradient fade — only from top, no center glow */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "110px",
          background:
            "linear-gradient(to bottom, rgba(236, 60, 106, 0.10) 0%, rgba(255,255,255,0) 100%)",
          zIndex: 1,
        }}
      />

      {/* Large grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          backgroundImage:
            "linear-gradient(to right, #e2e2e2 1px, transparent 1px), linear-gradient(to bottom, #e2e2e2 1px, transparent 1px)",
          backgroundSize: "130px 110px",
          opacity: 0.7,
        }}
      />

      {/* Colored dots */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full hidden sm:block"
          style={{
            width: dot.size,
            height: dot.size,
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
        className="absolute hidden sm:flex"
        style={{
          top: "12%",
          left: "13%",
          transform: "rotate(-12deg)",
          zIndex: 5,
        }}
      >
        <AirbnbIcon />
      </div>

      {/* Top-right: Booking */}
      <div
        className="absolute hidden sm:flex"
        style={{
          top: "12%",
          right: "13%",
          transform: "rotate(6deg)",
          zIndex: 5,
        }}
      >
        <BookingIcon />
      </div>

      {/* Bottom-left: Vrbo */}
      <div
        className="absolute hidden sm:flex"
        style={{
          top: "68%",
          left: "16%",
          transform: "rotate(-6deg)",
          zIndex: 5,
        }}
      >
        <VrboIcon />
      </div>

      {/* Bottom-right: Tripadvisor */}
      <div
        className="absolute hidden sm:flex"
        style={{
          top: "68%",
          right: "16%",
          transform: "rotate(12deg)",
          zIndex: 5,
        }}
      >
        <TripadvisorIcon />
      </div>

      {/* Hero content */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6"
        style={{ zIndex: 10, paddingTop: "60px", paddingBottom: "40px" }}
      >
        <h1
          className="font-bold leading-tight"
          style={{
            fontSize: "clamp(30px, 4.8vw, 54px)",
            color: "var(--text-primary)",
            marginBottom: "4px",
          }}
        >
          Airbnb Assistants For
        </h1>

        <h2
          className="font-normal leading-tight"
          style={{
            fontSize: "clamp(26px, 4.2vw, 48px)",
            color: "var(--text-primary)",
            marginBottom: "24px",
          }}
        >
          Property Management
        </h2>

        <p
          style={{
            maxWidth: "530px",
            fontSize: "15px",
            lineHeight: "1.72",
            color: "var(--text-secondary)",
            textAlign: "center",
            marginBottom: "34px",
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
            padding: "13px 34px",
            fontSize: "15px",
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
