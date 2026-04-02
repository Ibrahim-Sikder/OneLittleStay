import Image from "next/image";
import choose from "@/assets/images/client/client.png";

const features = [
  "Brilliant Client Service",
  "Flexibility & Adaptibility",
  "We make it Personal",
  "We have expart in our team",
];

// Airbnb logo SVG
const AirbnbLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="6" fill="#FF5A5F" />
    <path
      d="M14 5C12.5 8 9 11 8 13.5C7.3 15.2 7.8 17.2 9.5 18C11 18.7 12.5 18 13.3 16.8C14 15.8 14 15.8 14 15.8C14 15.8 14 15.8 14.7 16.8C15.5 18 17 18.7 18.5 18C20.2 17.2 20.7 15.2 20 13.5C19 11 15.5 8 14 5Z"
      fill="white"
    />
  </svg>
);

const VRBOLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="6" fill="#1C5289" />
    <text x="5" y="19" fontSize="9" fontWeight="bold" fill="white">
      VRBO
    </text>
  </svg>
);

const BookingLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="6" fill="#003580" />
    <text x="7" y="19" fontSize="13" fontWeight="bold" fill="white">
      B.
    </text>
  </svg>
);

const TripAdvisorLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="6" fill="#34E0A1" />
    <circle cx="14" cy="14" r="7" fill="white" />
    <circle cx="14" cy="14" r="4" fill="#34E0A1" />
    <circle cx="14" cy="14" r="2" fill="black" />
  </svg>
);

const CheckCircle = () => (
  <span className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
      <path
        d="M1 5L4.5 8.5L11 1.5"
        stroke="#e91e63"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

export default function ChooseUs() {
  return (
    <section className="w-full bg-white py-12 px-6">
      <div
        className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative"
        style={{ background: "#fce4ec", minHeight: "420px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full">
          {/* Left: Text */}
          <div className="flex flex-col justify-center p-10 md:p-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4 leading-tight">
              Few Reasons Why you
              <br />
              Choose us?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle />
                  <span className="text-sm text-[#1a1a1a] font-medium">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <div>
              <button className="bg-[#e91e63] text-white text-sm font-semibold px-7 py-3 rounded-lg hover:bg-pink-600 transition-colors flex items-center gap-2">
                Schedule A Meeting
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: Image + floating cards */}
          <div className="relative flex items-end justify-center overflow-hidden">
            {/* Pink blob */}
            <div
              className="absolute bottom-0 right-0 w-72 h-72 rounded-full"
              style={{
                background: "#f48fb1",
                opacity: 0.5,
                transform: "translate(30%, 30%)",
              }}
            />

            {/* Person image */}
            <div className="relative z-10">
              <Image
                src={choose}
                alt="Person"
                width={340}
                height={380}
                className="object-contain object-bottom"
                style={{ maxHeight: "380px" }}
              />
            </div>

            {/* Listing card */}
            <div
              className="absolute top-8 left-2 bg-white rounded-xl shadow-md p-3 z-20"
              style={{ width: "170px" }}
            >
              <div className="w-full h-16 bg-gray-200 rounded-lg mb-2 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-100 rounded-lg" />
              </div>
              <div className="flex gap-0.5 mb-1">
                {[1, 2, 3, 4].map((s) => (
                  <svg
                    key={s}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="#F59E0B"
                  >
                    <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 9l-3 1.5.5-3.5L1 4.5 4.5 4z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#e91e63] text-xs font-bold">
                $75<span className="text-gray-400 font-normal">/night</span>
              </p>
            </div>

            {/* Platform logos card */}
            <div
              className="absolute top-8 right-2 bg-white rounded-xl shadow-md p-3 z-20 grid grid-cols-2 gap-2"
              style={{ width: "80px" }}
            >
              <AirbnbLogo />
              <VRBOLogo />
              <BookingLogo />
              <TripAdvisorLogo />
            </div>

            {/* Calendar card */}
            <div
              className="absolute bottom-8 left-0 bg-white rounded-xl shadow-md p-3 z-20"
              style={{ width: "180px" }}
            >
              <div className="flex items-center justify-between mb-2">
                <button className="w-5 h-5 bg-[#e91e63] rounded text-white text-xs flex items-center justify-center">
                  &lt;
                </button>
                <button className="w-5 h-5 bg-[#e91e63] rounded text-white text-xs flex items-center justify-center">
                  &gt;
                </button>
              </div>
              <div className="grid grid-cols-7 gap-0.5 text-center">
                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                  <span
                    key={d}
                    className="text-[9px] text-gray-400 font-semibold"
                  >
                    {d}
                  </span>
                ))}
                {[
                  "30",
                  "31",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                  "15",
                  "16",
                  "17",
                  "18",
                  "19",
                  "20",
                  "21",
                  "22",
                  "23",
                  "24",
                  "25",
                  "26",
                  "27",
                  "28",
                  "29",
                  "30",
                ].map((d, i) => (
                  <span
                    key={i}
                    className={`text-[9px] rounded-full w-4 h-4 flex items-center justify-center mx-auto ${
                      d === "8" || d === "9"
                        ? "bg-[#e91e63] text-white font-bold"
                        : d === "11"
                          ? "bg-[#e91e63] text-white font-bold"
                          : "text-gray-600"
                    }`}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
