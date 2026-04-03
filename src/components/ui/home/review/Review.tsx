"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Review.css";
import { reviews } from "@/data/review";
import { Stars } from "./star";

export default function Review() {
  return (
    <section className="w-full bg-white pb-12 md:pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2
          className="text-xl sm:text-2xl md:text-4xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Check Our Clients{" "}
          <span style={{ color: "var(--primary)" }}>Review</span>
        </h2>
        <p
          className="text-xs md:text-sm leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides={true}
          speed={1000}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="review-slider"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <div className="review-card rounded-2xl transition-all duration-700">
                {/* Mobile layout (image on top) */}
                <div className="block md:hidden">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="w-14 h-14 rounded-full overflow-hidden mb-3"
                      style={{ backgroundColor: "var(--border-default)" }}
                    >
                      <Image
                        src={r.img}
                        alt={r.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full">
                      <h4
                        className="font-bold text-base"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {r.name}
                      </h4>
                      <p
                        className="text-xs md:text-sm leading-relaxed mt-1"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {r.text}
                      </p>
                      <div className="flex justify-center mt-2">
                        <Stars count={r.rating} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop layout (image on left) */}
                <div className="hidden md:flex md:gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className="w-14 h-14 rounded-full overflow-hidden"
                      style={{ backgroundColor: "var(--border-default)" }}
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
                  <div className="flex-1 min-w-0">
                    <h4
                      className="font-bold text-base"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {r.name}
                    </h4>
                    <p
                      className="text-sm leading-relaxed mt-1"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {r.text}
                    </p>
                    <Stars count={r.rating} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
