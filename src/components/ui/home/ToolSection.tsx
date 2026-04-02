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
    <section className="w-full bg-white py-16 px-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">
          Our <span className="text-[#e91e63]">Tools</span>
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Grid */}
      <div className=" mx-auto bg-[#f5f5f5] rounded-2xl p-8">
        <Container className="max-w-3xl">
          <div className="grid grid-cols-3 gap-6">
            {tools.slice(0, 9).map((tool, i) => (
              <div
                key={i}
                className="bg-white rounded-xl gap-5 flex items-center justify-center p-3"
                style={{
                  minHeight: "100px",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                }}
              >
                <Image
                  src={tool.img}
                  alt={tool.alt}
                  width={160}
                  height={48}
                  className="object-cover h-auto w-32"
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
