import Image from "next/image";
import tool2 from "@/assets/images/tools/tool2.png";
import tool3 from "@/assets/images/tools/tool3.png";
import tool4 from "@/assets/images/tools/tool4.png";
import tool5 from "@/assets/images/tools/tool5.png";
import tool6 from "@/assets/images/tools/tool6.png";
import tool7 from "@/assets/images/tools/tool7.png";
import tool8 from "@/assets/images/tools/tool8.png";
import tool9 from "@/assets/images/tools/tool9.png";
import Container from "@/components/container";

const tools = [
  { img: tool4, alt: "PriceLabs" },
  { img: tool3, alt: "Wheelhouse" },
  { img: tool3, alt: "Beyond Pricing" },
  { img: tool6, alt: "Hostfully" },
  { img: tool5, alt: "Guesty" },
  { img: tool6, alt: "Lodgify" },
  { img: tool7, alt: "Hostfully" },
  { img: tool8, alt: "Guesty" },
  { img: tool9, alt: "Guesty" },
];

export default function ToolSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 px-4">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Our <span style={{ color: "var(--primary)" }}>Tools</span>
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

      {/* Grid */}
      <div
        className="mx-auto rounded-2xl p-4 sm:p-6 md:p-8"
        style={{ backgroundColor: "var(--bg-light)" }}
      >
        <Container className="max-w-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {tools.slice(0, 9).map((tool, i) => (
              <div
                key={i}
                className="rounded-xl gap-5 flex items-center justify-center p-3"
                style={{
                  minHeight: "100px",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                  backgroundColor: "var(--background)",
                }}
              >
                <Image
                  src={tool.img}
                  alt={tool.alt}
                  width={160}
                  height={48}
                  className="object-contain h-auto w-24 sm:w-28 md:w-32"
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
