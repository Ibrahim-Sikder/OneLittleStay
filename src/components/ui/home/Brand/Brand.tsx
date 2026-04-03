"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./Brand.css";
import { companies } from "@/data/brands";

const duplicated = [...companies, ...companies];

export default function Brand() {
  return (
    <section
      aria-labelledby="brand-heading"
      className="w-full mt-8 md:mt-12 lg:mt-16 bg-white"
    >
      <h2
        id="brand-heading"
        className="text-center text-xs sm:text-sm md:text-base font-semibold text-secondary px-4"
      >
        Trusted by leaders in 50+ industries
      </h2>

      <div className="mt-4 md:mt-6 py-4 md:py-5 lg:py-6 bg-light">
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 z-10 pointer-events-none w-[clamp(40px,8vw,100px)] bg-gradient-to-r from-light to-transparent" />
          <div className="absolute inset-y-0 right-0 z-10 pointer-events-none w-[clamp(40px,8vw,100px)] bg-gradient-to-l from-light to-transparent" />

          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            loop
            allowTouchMove
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={3000}
            className="trusted-swiper"
          >
            {duplicated.map((company, index) => (
              <SwiperSlide key={`${company.name}-${index}`}>
                <div className="flex items-center justify-center px-[clamp(16px,3vw,40px)]">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={120}
                    height={40}
                    className="h-[clamp(18px,3vw,36px)] w-auto object-contain opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 ease-out cursor-pointer"
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
