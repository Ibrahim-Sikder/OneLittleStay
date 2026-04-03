"use client";

import Container from "@/components/container";
import client from "@/assets/images/client/avatar.png";
import Image from "next/image";
import Button from "../Button";

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
          <Image src={client} alt="Friendly support agent" />

          <h3
            className="text-xl md:text-2xl font-bold mb-2 mt-3"
            style={{ color: "var(--text-primary)" }}
          >
            Still have Questions?
          </h3>

          <p
            className="text-sm md:text-base mb-6 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Can&apos;t find the answer you&apos;re looking for? Please chat to
            our friendly team.
          </p>

          <Button size="md" variant="primary">
            Get in touch
          </Button>
        </div>
      </div>
    </Container>
  );
}
