"use client";

import Container from "@/components/container";
import client from "@/assets/images/client/avatar.png";
import Image from "next/image";

export default function StillHaveQuestions() {
  return (
    <Container>
      <div className="px-4 sm:px-6 py-10">
        <div
          className="rounded-2xl flex flex-col items-center text-center py-10 px-6 sm:px-8"
          style={{
            backgroundColor: "var(--bg-gray)",
            border: `1px solid var(--border-light)`,
            boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
          }}
        >
          {/* Overlapping avatars */}
          {/* <div className="flex -space-x-3 mb-5">
            {[
              { bg: "bg-yellow-400", initial: "JW" },
              { bg: "bg-primary", initial: "EH" },
              { bg: "bg-blue-300", initial: "RF" },
            ].map((item, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full border-2 border-white ${item.bg} flex items-center justify-center text-white text-xs font-bold`}
                style={
                  item.bg === "bg-primary"
                    ? { backgroundColor: "var(--primary)" }
                    : {}
                }
              >
                {item.initial}
              </div>
            ))}
          </div> */}
          <Image src={client} alt="Client" />
          <h3
            className="text-xl font-bold mb-2 mt-3"
            style={{ color: "var(--text-primary)" }}
          >
            Still have Questions?
          </h3>

          <p
            className="text-sm mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            Can&apos;t find the answer you&apos;re looking for? Please chat to
            our friendly team.
          </p>

          <button
            className="text-white text-sm font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: "var(--primary)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--primary-dark)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--primary)")
            }
          >
            Get in touch
          </button>
        </div>
      </div>
    </Container>
  );
}
