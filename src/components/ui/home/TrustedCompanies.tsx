import Image from "next/image";
import brand from "@/assets/images/company/brand.svg";
import brand2 from "@/assets/images/company/brand2.svg";
import brand3 from "@/assets/images/company/brand3.svg";
import brand4 from "@/assets/images/company/brand4.svg";
import brand5 from "@/assets/images/company/brand5.svg";
import brand6 from "@/assets/images/company/brand6.svg";
import brand7 from "@/assets/images/company/brand7.svg";
import Container from "@/components/container";

const companies = [
  { name: "airbnb", logo: brand, alt: "Airbnb logo" },
  { name: "Booking.com", logo: brand2, alt: "Booking.com logo" },
  { name: "Vrbo", logo: brand3, alt: "Vrbo logo" },
  { name: "Tripadvisor", logo: brand4, alt: "Tripadvisor logo" },
  { name: "agoda", logo: brand5, alt: "Agoda logo" },
  { name: "Expedia", logo: brand6, alt: "Expedia logo" },
  { name: "HomeToGo", logo: brand7, alt: "HomeToGo logo" },
];

export default function TrustedCompanies() {
  return (
    <section className="w-full mt-8 md:mt-12 bg-white">
      {/* Trusted by heading */}
      <p className="text-center text-xs md:text-[16px] font-semibold px-4">
        Trusted by leaders in 50+ industries
      </p>

      {/* Company logos */}
      <div className="bg-light mt-5 md:mt-8 py-4 md:py-4">
        <Container>
          <div className="flex items-center justify-between w-full gap-6 md:gap-8 lg:gap-12 px-4">
            {companies.map((company) => (
              <div key={company.name}>
                <Image
                  src={company.logo}
                  alt={company.alt}
                  width={80}
                  height={30}
                  className="w-auto h-6 md:h-7 lg:h-8 object-contain"
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
