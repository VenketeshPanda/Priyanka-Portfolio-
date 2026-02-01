import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative -mt-1">
      {/* Wavy Top Border */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden -mt-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16"
        >
          <path
            d="M0,0 C150,60 350,0 600,30 C850,60 1050,0 1200,30 L1200,120 L0,120 Z"
            fill="#64AB7B"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="bg-[#64AB7B] pt-24 pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-10 lg:gap-20">
            {/* Left Column - Headings */}
            <div className="flex flex-col text-left w-full flex-1">
              <h2 className="font-shantell font-semibold text-[clamp(24px,4.5vw,48px)] leading-[1.2] text-white/30 whitespace-nowrap">
                Thanks for scrolling my work!
              </h2>
              <p className="font-shantell font-medium text-[clamp(14px,2.2vw,24px)] leading-[1.2] text-white mt-4 whitespace-nowrap">
                My inbox is open. Feel free to drop by and say hi :)
              </p>
            </div>

            {/* Right Column - Contact Links */}
            <div className="flex flex-col space-y-6">
              {/* Email */}
              <a
                href="mailto:priyankauxwork@gmail.com"
                className="flex items-center gap-4 group hover:opacity-80 transition-opacity"
              >
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image
                    src="/gmail.svg"
                    alt="Email"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-shantell font-medium text-lg md:text-[20px] text-white underline underline-offset-4">
                  priyankauxwork@gmail.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+917008477954"
                className="flex items-center gap-4 group hover:opacity-80 transition-opacity"
              >
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image
                    src="/Phone.svg"
                    alt="Phone"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-shantell font-medium text-lg md:text-[20px] text-white underline underline-offset-4">
                  +91 7008477954
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/priyankapattnaik628/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group hover:opacity-80 transition-opacity"
              >
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image
                    src="/LinkedIn.svg"
                    alt="LinkedIn"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-shantell font-medium text-lg md:text-[20px] text-white underline underline-offset-4">
                  LinkedIn
                </span>
              </a>

              {/* Resume */}
              <a
                href="https://drive.google.com/file/d/1QJb13yeApdYb4WHAMejU9j3jQtmKk8P-/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group hover:opacity-80 transition-opacity"
              >
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image
                    src="/Resume.svg"
                    alt="Resume"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-shantell font-medium text-lg md:text-[20px] text-white underline underline-offset-4">
                  View Resume
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
