"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import brand from "@/assets/images/company/brand.svg";
import brand2 from "@/assets/images/company/brand2.svg";
import brand3 from "@/assets/images/company/brand3.svg";
import brand4 from "@/assets/images/company/brand4.svg";
import brand5 from "@/assets/images/company/brand5.svg";
import brand6 from "@/assets/images/company/brand6.svg";
import brand7 from "@/assets/images/company/brand7.svg";
import Container from "@/components/container";
import "swiper/css";
import "./Brand.css";

const companies = [
  { name: "airbnb", logo: brand, alt: "Airbnb logo" },
  { name: "Booking.com", logo: brand2, alt: "Booking.com logo" },
  { name: "Vrbo", logo: brand3, alt: "Vrbo logo" },
  { name: "Tripadvisor", logo: brand4, alt: "Tripadvisor logo" },
  { name: "agoda", logo: brand5, alt: "Agoda logo" },
  { name: "Expedia", logo: brand6, alt: "Expedia logo" },
  { name: "HomeToGo", logo: brand7, alt: "HomeToGo logo" },
];

// দুইবার duplicate করো যাতে loop smooth হয়
const duplicated = [...companies, ...companies];

export default function Brand() {
  return (
    <section className="w-full mt-8 md:mt-12 lg:mt-16 bg-white">
      {/* Heading */}
      <p
        className="text-center text-xs sm:text-sm md:text-base font-semibold px-4"
        style={{ color: "var(--text-secondary)" }}
      >
        Trusted by leaders in 50+ industries
      </p>

      {/* Slider wrapper */}
      <div
        className="mt-4 md:mt-6 py-4 md:py-5 lg:py-6"
        style={{ backgroundColor: "var(--bg-light, #f9f9f9)" }}
      >
        <div className="relative w-full overflow-hidden">
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{
              width: "clamp(40px, 8vw, 100px)",
              background:
                "linear-gradient(to right, var(--bg-light, #f9f9f9), transparent)",
            }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{
              width: "clamp(40px, 8vw, 100px)",
              background:
                "linear-gradient(to left, var(--bg-light, #f9f9f9), transparent)",
            }}
          />

          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={0}
            loop={true}
            allowTouchMove={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={4000}
            className="trusted-swiper"
          >
            {duplicated.map((company, index) => (
              <SwiperSlide key={`${company.name}-${index}`}>
                <div
                  className="flex items-center justify-center"
                  style={{
                    padding: "0 clamp(16px, 3vw, 40px)",
                  }}
                >
                  <Image
                    src={company.logo}
                    alt={company.alt}
                    width={120}
                    height={40}
                    className="object-contain opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{
                      width: "auto",
                      height: "clamp(18px, 3vw, 36px)",
                    }}
                    priority={index < 2}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
