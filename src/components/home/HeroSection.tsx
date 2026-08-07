import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-[url('/assets/images/hero.jpg')] object-cover bg-cover bg-center shadow-md shadow-black flex items-center justify-center overflow-hidden">
      {/* Centered Hero Content - mathematically centered at top-1/2 */}
      <div className="absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col items-center gap-8 lg:gap-10 w-11/12 md:w-4/5 lg:w-3/5">
        <div className="flex flex-col items-center gap-5">
          {/* Availability Badge */}
          <p className="relative mb-1 text-sm border border-gray-800 px-4 py-2 rounded-full font-inter before:content-[''] before:w-3 before:h-3 before:bg-green-500 before:rounded-full before:absolute before:left-4 before:top-1/2 before:-translate-y-1/2 pl-9 w-auto max-w-64 bg-black/30 backdrop-blur-sm">
            Open for projects
          </p>

          {/* Headline */}
          <h1 className="text-5xl leading-tight md:text-7xl lg:text-[84px] lg:leading-[94px] font-custom font-bold tracking-tight">
            A creative human from Ethiopia
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-2xl font-custom opacity-70 max-w-xl">
            Creating online &amp; offline experiences.
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="cursor-pointer hover:bg-white hover:text-black transition-all duration-300 border-2 border-gray-500 hover:border-white text-lg lg:text-xl rounded-full bg-[rgba(255,255,255,0.08)] backdrop-blur-md py-3.5 px-9 font-medium text-gray-200 text-center shadow-lg"
        >
          Get in touch
        </Link>
      </div>

      {/* Bottom Gradient Overlay to Blend into Next Section */}
      <div className="absolute z-10 bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[#09090B] pointer-events-none" />
    </section>
  );
}
