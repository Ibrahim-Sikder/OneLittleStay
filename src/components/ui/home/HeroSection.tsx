"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
import logo from "@/assets/images/logo/logo2.png";
import logo2 from "@/assets/images/logo/logo3.png";
import logo3 from "@/assets/images/logo/logo4.png";
import logo4 from "@/assets/images/logo/logo5.png";
import dot from "@/assets/images/dot/dot.png";
import dot2 from "@/assets/images/dot/dot2.png";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-[clamp(40px,10vw,72px)] min-h-[clamp(350px,45vh,550px)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b from-[#ec3c6a14] to-transparent z-[1]" />

      <div className="pointer-events-none absolute inset-0 z-[2] opacity-60 bg-[linear-gradient(to_right,#dcdcdc_1px,transparent_1px),linear-gradient(to_bottom,#dcdcdc_1px,transparent_1px)] bg-[size:clamp(60px,8vw,90px)_clamp(60px,7vw,80px)]" />

      <div className="hidden sm:block absolute top-[12%] left-[25%] -rotate-12 z-[5]">
        <Image
          src={logo}
          alt=""
          aria-hidden="true"
          className="w-12 md:w-16 lg:w-24 h-auto"
        />
      </div>

      <div className="hidden sm:block absolute top-[12%] right-[25%] rotate-6 z-[5]">
        <Image
          src={logo4}
          alt=""
          aria-hidden="true"
          className="w-12 md:w-16 lg:w-24 h-auto"
        />
      </div>

      <div className="hidden sm:block absolute bottom-[15%] left-[28%] -rotate-6 z-[5]">
        <Image
          src={logo3}
          alt=""
          aria-hidden="true"
          className="w-12 md:w-16 lg:w-[70px] h-auto"
        />
      </div>

      <div className="hidden sm:block absolute bottom-[15%] right-[28%] rotate-12 z-[5]">
        <Image
          src={logo2}
          alt=""
          aria-hidden="true"
          className="w-12 md:w-16 lg:w-[70px] h-auto"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 py-[clamp(10px,3vw,70px)]">
        <Image
          src={dot}
          alt=""
          aria-hidden="true"
          className="hidden sm:block w-3 h-3 mb-5"
        />

        <h1 className="text-[clamp(24px,4.8vw,40px)] font-semibold leading-[1.2] text-primary mb-3">
          Airbnb Assistants For <br />
          <span className="font-normal text-xl ">Property Management</span>
        </h1>

        <p className="max-w-[530px] text-[clamp(14px,3.5vw,15px)] leading-[1.6] text-secondary mb-[clamp(28px,6vw,34px)] px-[clamp(16px,5vw,32px)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <Button
          href="#"
          size="custom"
          customPadding="clamp(11px,3vw,13px) clamp(28px,6vw,34px)"
          customFontSize="clamp(14px,3.5vw,15px)"
          icon={<span>→</span>}
          iconPosition="right"
          className="mb-4 py-2 md:py-3 px-3 md:px-4 text-sm "
        >
          Schedule A Meeting
        </Button>

        <Link
          href="#"
          className="text-sm text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          See Pricing
        </Link>

        <Image
          src={dot2}
          alt=""
          aria-hidden="true"
          className="hidden sm:block w-3 h-3 mt-5"
        />
      </div>
    </section>
  );
}
