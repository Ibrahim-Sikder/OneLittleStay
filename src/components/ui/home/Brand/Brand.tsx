"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import brand from "@/assets/images/company/brand.svg";
import brand2 from "@/assets/images/company/brand2.svg";
import brand3 from "@/assets/images/company/brand3.svg";
import brand4 from "@/assets/images/company/brand4.svg";
import brand5 from "@/assets/images/company/brand5.svg";
import brand6 from "@/assets/images/company/brand6.svg";
import brand7 from "@/assets/images/company/brand7.svg";
import Container from "@/components/container";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
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

export default function Brand() {
  return (
    <section className="w-full mt-8 md:mt-12 lg:mt-16 bg-white">
      <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg font-semibold px-4">
        Trusted by leaders in 50+ industries
      </p>

      <div className="bg-light mt-4 md:mt-6 lg:mt-8 py-4 md:py-5 lg:py-6">
        <Container>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-r from-light to-transparent z-10 pointer-events-none"></div>

            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-l from-light to-transparent z-10 pointer-events-none"></div>

            <Swiper
              modules={[Autoplay, FreeMode]}
              spaceBetween={16}
              slidesPerView="auto"
              freeMode={{
                enabled: true,
                sticky: false,
                momentum: true,
                momentumBounce: true,
                momentumBounceRatio: 1,
              }}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                stopOnLastSlide: false,
              }}
              speed={5000}
              loop={true}
              breakpoints={{
                320: {
                  spaceBetween: 12,
                },
                640: {
                  spaceBetween: 20,
                },
                768: {
                  spaceBetween: 24,
                },
                1024: {
                  spaceBetween: 32,
                },
              }}
              className="trusted-swiper"
            >
              {companies.map((company) => (
                <SwiperSlide key={company.name}>
                  <div className="flex items-center justify-center px-2">
                    <Image
                      src={company.logo}
                      alt={company.alt}
                      width={120}
                      height={40}
                      className="w-auto h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 object-contain opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer"
                      priority={
                        company.name === "airbnb" ||
                        company.name === "Booking.com"
                      }
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </div>
    </section>
  );
}
