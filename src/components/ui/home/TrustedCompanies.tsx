const companies = [
  {
    name: "airbnb",
    logo: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-red-500 fill-current">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm6 12.6c0 1.986-2.686 3.6-6 3.6s-6-1.614-6-3.6c0-1.2.894-2.268 2.274-2.964L12 16.8l3.726-2.364C17.106 15.132 18 16.2 18 17.4z" />
        </svg>
        <span className="text-gray-800 font-semibold text-lg">airbnb</span>
      </div>
    ),
  },
  {
    name: "Booking.com",
    logo: (
      <span className="font-bold text-blue-700 text-lg tracking-tight">
        Booking.com
      </span>
    ),
  },
  {
    name: "Vrbo",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-indigo-900 rounded flex items-center justify-center">
          <span className="text-white font-extrabold text-xs">W</span>
        </div>
        <span className="font-bold text-gray-800 text-xl italic tracking-wide">
          Vrbo
        </span>
      </div>
    ),
  },
  {
    name: "Tripadvisor",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-teal-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">🦉</span>
        </div>
        <span className="font-semibold text-gray-800 text-lg">Tripadvisor</span>
      </div>
    ),
  },
  {
    name: "agoda",
    logo: (
      <div className="flex flex-col items-start">
        <span className="text-gray-700 font-semibold text-lg tracking-tight">
          agoda
        </span>
        <div className="flex gap-0.5 mt-0.5">
          {[
            "bg-red-500",
            "bg-orange-400",
            "bg-yellow-400",
            "bg-green-500",
            "bg-blue-500",
          ].map((c, i) => (
            <span key={i} className={`w-2 h-2 rounded-full ${c}`} />
          ))}
        </div>
      </div>
    ),
  },
  {
    name: "Expedia",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-yellow-400 rounded flex items-center justify-center">
          <span className="text-black font-black text-xs">▶</span>
        </div>
        <span className="font-bold text-gray-800 text-lg">Expedia</span>
      </div>
    ),
  },
  {
    name: "HomeToGo",
    logo: (
      <div className="text-right leading-tight">
        <span className="font-bold text-gray-800 text-base block">home</span>
        <span className="font-bold text-gray-800 text-base block">to go.</span>
      </div>
    ),
  },
];

export default function TrustedCompanies() {
  return (
    <section className="w-full border-t border-gray-200 bg-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between flex-wrap gap-8">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity"
            >
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
