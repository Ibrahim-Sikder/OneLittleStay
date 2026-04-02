"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import review1 from "@/assets/images/client/client2.png";
import review2 from "@/assets/images/client/client3.png";
import review3 from "@/assets/images/client/client4.png";

import "swiper/css";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const reviews = [
  { name: "Jenny Wilson", img: review1, text: LOREM, rating: 4 },
  { name: "Esther Howard", img: review2, text: LOREM, rating: 4 },
  { name: "Robert Fox", img: review3, text: LOREM, rating: 4 },
  { name: "Sarah Johnson", img: review1, text: LOREM, rating: 5 },
  { name: "Michael Brown", img: review2, text: LOREM, rating: 4 },
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
    <section className="w-full bg-white py-16 px-4 sm:px-6 overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto ">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Check Our Clients{" "}
          <span style={{ color: "var(--primary)" }}>Review</span>
        </h2>
        <p
          className="text-sm leading-relaxed"
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
                <div className="flex gap-4">
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

      {/* Custom CSS */}
      <style jsx global>{`
        .review-slider {
          padding: 40px 0 30px 0;
        }

        .review-slider .swiper-slide {
          transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0.4;
          transform: scale(0.82);
        }

        .review-slider .swiper-slide-active {
          opacity: 1;
          transform: scale(1.08);
          z-index: 20;
        }

        .review-slider .swiper-slide-active .review-card {
          background-color: var(--background);
          box-shadow: 10px 30px 50px -15px rgba(0, 0, 0, 0.2);
          padding: 32px 28px;
        }

        .review-slider .swiper-slide:not(.swiper-slide-active) .review-card {
          background-color: var(--bg-light);
          padding: 22px 20px;
        }

        .review-card {
          border-radius: 15px;
          transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          height: 100%;
          cursor: pointer;
        }

        .review-card:hover {
          transform: translateY(-6px);
        }

        @media (min-width: 1024px) {
          .review-slider .swiper-slide {
            width: 380px !important;
          }
        }

        @media (min-width: 1280px) {
          .review-slider .swiper-slide {
            width: 420px !important;
          }
        }
      `}</style>
    </section>
  );
}
