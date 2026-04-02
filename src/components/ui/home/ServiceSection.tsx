import React from "react";
import service from "@/assets/images/services/service.png";
import service2 from "@/assets/images/services/service.png";
import service3 from "@/assets/images/services/service.png";
import service4 from "@/assets/images/services/service.png";
import service5 from "@/assets/images/services/service.png";
import service6 from "@/assets/images/services/service.png";

const PropertyListingIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="8" y="4" width="36" height="48" rx="3" fill="#F5C842" />
    <rect x="14" y="2" width="24" height="8" rx="2" fill="#E0A800" />
    <rect x="14" y="18" width="20" height="3" rx="1.5" fill="white" />
    <rect x="14" y="25" width="16" height="3" rx="1.5" fill="white" />
    <rect x="14" y="32" width="18" height="3" rx="1.5" fill="white" />
    <circle cx="12" cy="19.5" r="2" fill="#4CAF50" />
    <circle cx="12" cy="26.5" r="2" fill="#4CAF50" />
    <circle cx="12" cy="33.5" r="2" fill="#F44336" />
  </svg>
);

const CustomerBookingIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="8" width="38" height="34" rx="3" fill="#EF5350" />
    <rect x="4" y="8" width="38" height="10" rx="3" fill="#E53935" />
    <rect x="8" y="20" width="6" height="5" rx="1" fill="white" />
    <rect x="18" y="20" width="6" height="5" rx="1" fill="white" />
    <rect x="28" y="20" width="6" height="5" rx="1" fill="white" />
    <rect x="8" y="29" width="6" height="5" rx="1" fill="white" />
    <rect x="18" y="29" width="6" height="5" rx="1" fill="#4CAF50" />
    <rect x="28" y="29" width="6" height="5" rx="1" fill="white" />
    <circle cx="44" cy="44" r="14" fill="#1565C0" />
    <circle cx="44" cy="44" r="12" fill="#1976D2" />
    <path
      d="M36 44 L42 50 L52 38"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect x="12" y="4" width="4" height="8" rx="2" fill="#B71C1C" />
    <rect x="30" y="4" width="4" height="8" rx="2" fill="#B71C1C" />
  </svg>
);

const HouseCleaningIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="10" y="20" width="32" height="36" rx="3" fill="#1565C0" />
    <rect x="14" y="24" width="8" height="10" rx="1" fill="#42A5F5" />
    <rect x="26" y="24" width="8" height="10" rx="1" fill="#42A5F5" />
    <rect x="14" y="38" width="8" height="8" rx="1" fill="#42A5F5" />
    <rect x="26" y="38" width="8" height="8" rx="1" fill="#42A5F5" />
    <path d="M8 22 L26 8 L44 22" fill="#E53935" />
    {/* Cleaning supplies */}
    <rect x="38" y="10" width="6" height="18" rx="2" fill="#66BB6A" />
    <rect x="36" y="10" width="10" height="4" rx="1" fill="#43A047" />
    <rect x="46" y="14" width="6" height="16" rx="2" fill="#EF5350" />
    <rect x="44" y="14" width="10" height="4" rx="1" fill="#E53935" />
    <rect x="44" y="10" width="6" height="6" rx="1" fill="#FFF176" />
  </svg>
);

const GuestReviewIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 44 L6 52 L30 44 Z" fill="#1565C0" />
    <rect x="6" y="16" width="48" height="30" rx="4" fill="#1976D2" />
    <circle cx="22" cy="28" r="6" fill="white" />
    <rect x="16" y="36" width="12" height="6" rx="3" fill="white" />
    {/* Stars */}
    <path
      d="M38 18 L39.5 22 L44 22 L40.5 25 L42 29 L38 26.5 L34 29 L35.5 25 L32 22 L36.5 22 Z"
      fill="#FFD600"
    />
    <path
      d="M48 22 L49 25 L52 25 L49.5 27 L50.5 30 L48 28.5 L45.5 30 L46.5 27 L44 25 L47 25 Z"
      fill="#FFD600"
    />
    <path
      d="M28 22 L29 25 L32 25 L29.5 27 L30.5 30 L28 28.5 L25.5 30 L26.5 27 L24 25 L27 25 Z"
      fill="#FFD600"
    />
  </svg>
);

const TrackExpensesIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="8" width="36" height="44" rx="3" fill="#E3F2FD" />
    <rect x="8" y="14" width="28" height="3" rx="1.5" fill="#90CAF9" />
    <rect x="8" y="21" width="20" height="3" rx="1.5" fill="#90CAF9" />
    <path
      d="M10 40 L18 32 L24 36 L32 26"
      stroke="#1976D2"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="10" cy="40" r="2" fill="#1976D2" />
    <circle cx="18" cy="32" r="2" fill="#1976D2" />
    <circle cx="24" cy="36" r="2" fill="#1976D2" />
    <circle cx="32" cy="26" r="2" fill="#1976D2" />
    {/* Calculator */}
    <rect x="34" y="32" width="20" height="24" rx="3" fill="#42A5F5" />
    <rect x="37" y="35" width="14" height="5" rx="1" fill="white" />
    <rect x="37" y="43" width="4" height="4" rx="1" fill="white" />
    <rect x="43" y="43" width="4" height="4" rx="1" fill="white" />
    <rect x="49" y="43" width="4" height="4" rx="1" fill="#FFD600" />
    <rect x="37" y="49" width="4" height="4" rx="1" fill="white" />
    <rect x="43" y="49" width="4" height="4" rx="1" fill="white" />
    <rect x="49" y="49" width="4" height="4" rx="1" fill="#FFD600" />
    {/* Dollar sign */}
    <text x="12" y="30" fill="#1976D2" fontSize="10" fontWeight="bold">
      $
    </text>
  </svg>
);

const GuestInquiryIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Person */}
    <circle cx="30" cy="14" r="10" fill="#607D8B" />
    <circle cx="30" cy="14" r="8" fill="#78909C" />
    <circle cx="30" cy="11" r="4" fill="#FFCC80" />
    <path d="M22 22 Q30 18 38 22 L38 26 Q30 22 22 26 Z" fill="#FFCC80" />
    {/* Chat bubbles */}
    <rect x="6" y="30" width="26" height="16" rx="8" fill="#FFD600" />
    <path d="M12 46 L8 52 L20 46" fill="#FFD600" />
    <rect x="6" y="33" width="10" height="3" rx="1.5" fill="white" />
    <rect x="6" y="39" width="16" height="3" rx="1.5" fill="white" />
    <rect x="28" y="38" width="26" height="16" rx="8" fill="#FFD600" />
    <path d="M48 54 L52 60 L40 54" fill="#FFD600" />
    <rect x="32" y="41" width="10" height="3" rx="1.5" fill="white" />
    <rect x="32" y="47" width="16" height="3" rx="1.5" fill="white" />
  </svg>
);

// ─── Service Card ─────────────────────────────────────────────────────────────

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div
    className="bg-white rounded-2xl p-8 flex flex-col gap-5"
    style={{
      boxShadow: "0 2px 16px 0 rgba(0,0,0,0.07)",
      border: "1px solid #f0f0f0",
      minHeight: "280px",
    }}
  >
    <div className="w-16 h-16">{icon}</div>

    <h3 className="text-[#1a1a1a] font-bold text-xl leading-snug">{title}</h3>

    <p className="text-gray-500 text-sm leading-relaxed flex-1">
      {description}
    </p>

    <div>
      <button className="border border-[#e91e63] text-[#e91e63] text-sm font-medium rounded-full px-5 py-2 bg-white hover:bg-[#e91e63] hover:text-white transition-colors duration-200">
        Read More
      </button>
    </div>
  </div>
);

// ─── Main Section ─────────────────────────────────────────────────────────────

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const services = [
  {
    icon: <PropertyListingIcon />,
    title: "Manage Property Listings",
    description: LOREM,
  },
  {
    icon: <CustomerBookingIcon />,
    title: "Manage Customer Bookings",
    description: LOREM,
  },
  {
    icon: <HouseCleaningIcon />,
    title: "Schedule House Cleaning",
    description: LOREM,
  },
  {
    icon: <GuestReviewIcon />,
    title: "Monitor Guest Reviews",
    description: LOREM,
  },
  {
    icon: <TrackExpensesIcon />,
    title: "Track & Report Expenses",
    description: LOREM,
  },
  {
    icon: <GuestInquiryIcon />,
    title: "Guest Inquiry & Support",
    description: LOREM,
  },
];

export default function ServiceSection() {
  return (
    <section className="w-full bg-white py-16 px-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">
          Our <span className="text-[#e91e63]">Service</span>
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
