"use client";

import { CheckIconProps } from "@/interface/price";

export default function CheckIcon({ included, highlight }: CheckIconProps) {
  return (
    <span
      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
        included
          ? highlight
            ? "bg-white/30"
            : "bg-pink-100"
          : highlight
            ? "bg-white/20"
            : "bg-gray-100"
      }`}
    >
      {included ? (
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
          <path
            d="M1 5L4.5 8.5L11 1.5"
            stroke={highlight ? "white" : "var(--primary)"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path
            d="M2 2L8 8M8 2L2 8"
            stroke={highlight ? "rgba(255,255,255,0.6)" : "#ccc"}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </span>
  );
}
