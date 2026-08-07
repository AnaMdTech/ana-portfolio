import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#09090B] text-white py-12 xl:py-32 lg:py-32 flex flex-col gap-12 xl:gap-50 overflow-hidden">
      {/* Massive Signature Heading */}
      <h1 className="px-8 text-7xl lg:text-[180px] xl:text-[250px] lg:px-2 font-medium tracking-tight">
        let&apos;s connect
      </h1>

      <div className="px-8 xl:px-14 lg:px-[24px] xl:max-w-[1280px] mx-auto flex flex-col xl:flex-row w-full xl:justify-around gap-12">
        {/* CTA Column */}
        <div className="flex flex-col gap-6 xl:gap-10 xl:w-1/2">
          <h2 className="text-3xl xl:text-4xl text-[#545456]">
            Ready to create something{" "}
            <span className="text-white">awesome together?</span>
          </h2>
          <Link
            href="/contact"
            className="w-full text-center xl:w-1/3 lg:w-1/5 md:w-1/4 cursor-pointer hover:bg-transparent transition-all duration-300 border-2 border-gray-500 text-xl rounded-full bg-[rgba(255,255,255,0.1)] backdrop-blur py-3 px-6"
          >
            Let&apos;s connect
          </Link>
        </div>

        {/* Links & Socials Grid */}
        <div className="flex justify-between gap-8 xl:gap-80">
          {/* Pages Column */}
          <div className="flex flex-col gap-4 w-1/2">
            <p className="text-blue-600 text-xl font-medium mb-1.5">Pages</p>
            <Link
              href="/work"
              className="text-xl xl:text-2xl font-medium hover:rotate-3 transition-all duration-300 ease-in-out hover:scale-110 inline-block w-max"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-xl xl:text-2xl font-medium hover:rotate-3 transition-all duration-300 ease-in-out hover:scale-110 inline-block w-max"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-xl xl:text-2xl font-medium hover:rotate-3 transition-all duration-300 ease-in-out hover:scale-110 inline-block w-max"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-xl xl:text-2xl font-medium hover:rotate-3 transition-all duration-300 ease-in-out hover:scale-110 inline-block w-max"
            >
              Contact
            </Link>
          </div>

          {/* Socials Column */}
          <div className="flex flex-col gap-4 w-1/2">
            <p className="text-blue-600 text-xl mb-1.5 font-medium">Socials</p>
            <a
              href="https://www.instagram.com/anamdtech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl xl:text-2xl font-medium hover:rotate-3 transition-all duration-300 ease-in-out hover:scale-110 inline-block w-max"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/ana-mohammed-78443a286/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl xl:text-2xl font-medium hover:rotate-3 transition-all duration-300 ease-in-out hover:scale-110 inline-block w-max"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/AnaMdTech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl xl:text-2xl font-medium hover:rotate-3 transition-all duration-300 ease-in-out hover:scale-110 inline-block w-max"
            >
              Github
            </a>
            <a
              href="https://web.facebook.com/anamdtech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl xl:text-2xl font-medium hover:rotate-3 transition-all duration-300 ease-in-out hover:scale-110 inline-block w-max"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Author Bar */}
      <div className="flex flex-col justify-between px-8 xl:px-24 xl:text-xl md:text-left md:px-6 leading-16 xl:flex-row">
        <p className="text-[#626263e6]">
          Built in <span className="text-white font-bold">React</span> · Made by{" "}
          <a
            href="https://github.com/AnaMdTech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold hover:underline"
          >
            Ana Md
          </a>
        </p>
        <p className="text-[#626263e6] leading-6">
          © 2026 AnaMd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}