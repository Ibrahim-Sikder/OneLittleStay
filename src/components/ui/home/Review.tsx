import Image from "next/image";
import review1 from "@/assets/images/client/client2.png";
import review2 from "@/assets/images/client/client3.png";
import review3 from "@/assets/images/client/client4.png";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const reviews = [
  { name: "Jenny Wilson", img: review1, text: LOREM, rating: 4 },
  { name: "Esther Howard", img: review2, text: LOREM, rating: 4 },
  { name: "Robert Fox", img: review3, text: LOREM, rating: 4 },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mt-3">
    {[1, 2, 3, 4, 5].map((s) => (
      <svg
        key={s}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill={s <= count ? "#F59E0B" : "#e5e7eb"}
      >
        <path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L2.2 5.7l4-.6z" />
      </svg>
    ))}
  </div>
);

export default function Review() {
  return (
    <section className="w-full bg-white py-16 px-6 overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">
          Check Our Clients <span className="text-[#e91e63]">Review</span>
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Cards row — center card elevated */}
      <div className="max-w-5xl mx-auto flex items-center gap-5">
        {reviews.map((r, i) => (
          <div
            key={i}
            className={`flex gap-4 rounded-2xl bg-white transition-all flex-1 ${
              i === 1
                ? "p-6 shadow-xl border border-gray-100 scale-105 z-10"
                : "p-5 shadow-sm border border-gray-100"
            }`}
          >
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div
                className="w-14 h-14 rounded-full overflow-hidden"
                style={{ background: i === 1 ? "#f59e0b" : "#e0e0e0" }}
              >
                <Image
                  src={r.img}
                  alt={r.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-[#1a1a1a] text-base">{r.name}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mt-1">
                {r.text}
              </p>
              <Stars count={r.rating} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
