// Note: The design uses simple icon illustrations. Replace Image imports with your actual assets.
// import easy from "@/assets/images/client/easy.png";
// import easy2 from "@/assets/images/client/easy2.png";
// import easy3 from "@/assets/images/client/easy3.png";

// SVG Icons matching the design
const AddUserIcon = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="24"
      cy="20"
      r="10"
      stroke="#1a1a1a"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M8 44c0-8.837 7.163-16 16-16"
      stroke="#1a1a1a"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M40 32v12M34 38h12"
      stroke="#e91e63"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const TeamConnectIcon = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Center person */}
    <circle
      cx="32"
      cy="32"
      r="7"
      stroke="#1a1a1a"
      strokeWidth="2"
      fill="none"
    />
    {/* Surrounding people */}
    <circle
      cx="32"
      cy="10"
      r="5"
      stroke="#e91e63"
      strokeWidth="1.5"
      strokeDasharray="3 2"
      fill="none"
    />
    <circle
      cx="52"
      cy="22"
      r="5"
      stroke="#e91e63"
      strokeWidth="1.5"
      strokeDasharray="3 2"
      fill="none"
    />
    <circle
      cx="52"
      cy="44"
      r="5"
      stroke="#e91e63"
      strokeWidth="1.5"
      strokeDasharray="3 2"
      fill="none"
    />
    <circle
      cx="12"
      cy="22"
      r="5"
      stroke="#e91e63"
      strokeWidth="1.5"
      strokeDasharray="3 2"
      fill="none"
    />
    <circle
      cx="12"
      cy="44"
      r="5"
      stroke="#e91e63"
      strokeWidth="1.5"
      strokeDasharray="3 2"
      fill="none"
    />
    {/* Lines from center */}
    <line
      x1="32"
      y1="25"
      x2="32"
      y2="15"
      stroke="#1a1a1a"
      strokeWidth="1.5"
      strokeDasharray="2 2"
    />
    <line
      x1="38"
      y1="28"
      x2="47"
      y2="25"
      stroke="#1a1a1a"
      strokeWidth="1.5"
      strokeDasharray="2 2"
    />
    <line
      x1="38"
      y1="36"
      x2="47"
      y2="41"
      stroke="#1a1a1a"
      strokeWidth="1.5"
      strokeDasharray="2 2"
    />
    <line
      x1="26"
      y1="28"
      x2="17"
      y2="25"
      stroke="#1a1a1a"
      strokeWidth="1.5"
      strokeDasharray="2 2"
    />
    <line
      x1="26"
      y1="36"
      x2="17"
      y2="41"
      stroke="#1a1a1a"
      strokeWidth="1.5"
      strokeDasharray="2 2"
    />
    {/* Head icons inside circles */}
    <circle cx="32" cy="8" r="2" fill="#e91e63" />
    <circle cx="52" cy="20" r="2" fill="#1a1a1a" />
    <circle cx="52" cy="42" r="2" fill="#1a1a1a" />
    <circle cx="12" cy="20" r="2" fill="#1a1a1a" />
    <circle cx="12" cy="42" r="2" fill="#1a1a1a" />
  </svg>
);

const HeadsetIcon = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 28C14 20.268 20.268 14 28 14C35.732 14 42 20.268 42 28"
      stroke="#1a1a1a"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <rect
      x="10"
      y="27"
      width="8"
      height="12"
      rx="3"
      stroke="#1a1a1a"
      strokeWidth="2"
      fill="none"
    />
    <rect
      x="38"
      y="27"
      width="8"
      height="12"
      rx="3"
      stroke="#1a1a1a"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M28 42v4M24 46h8"
      stroke="#e91e63"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const steps = [
  {
    number: "01",
    icon: <AddUserIcon />,
    label: "Add requirements\n& sign up today",
  },
  {
    number: "02",
    icon: <TeamConnectIcon />,
    label: "Connect with your CSM &\nonboarding team",
  },
  {
    number: "03",
    icon: <HeadsetIcon />,
    label: "Meet your STR\nAssistant next week",
  },
];

export default function EasySection() {
  return (
    <section className="w-full bg-white py-16 px-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-4xl font-bold text-[#1a1a1a] mb-5">
          Getting Started is <span className="text-[#e91e63]">Easy</span>
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Number badge */}
            <div className="self-start mb-[-16px] ml-4 z-10 relative">
              <div className="w-12 h-12 rounded-full border-2 border-[#e91e63] bg-white flex items-center justify-center">
                <span className="text-sm font-bold text-[#1a1a1a]">
                  {step.number}
                </span>
              </div>
            </div>
            {/* Card */}
            <div
              className="w-full bg-white border border-gray-200 rounded-xl flex items-center justify-center pt-12 pb-8 px-6"
              style={{
                minHeight: "160px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
            >
              {step.icon}
            </div>
            {/* Label */}
            <p className="text-center text-[#1a1a1a] font-semibold text-sm mt-5 leading-snug whitespace-pre-line">
              {step.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
