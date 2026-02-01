"use client";

import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about-section relative mt-[20vh] px-4 md:px-8 overflow-hidden scroll-mt-20 pb-0">
      <div className="max-w-7xl mx-auto">
        {/* Header - Centered */}
        <div className="relative mt-10 md:mt-20 -mb-[10px] flex justify-center z-0">
          {/* Header Text */}
          <div className="text-left relative z-10">
            <p className="font-mynerve text-xl md:text-2xl text-[#2C2C2C] -mb-6">
              Let's meet the
            </p>
            <h2 
              className="font-bagel text-6xl md:text-8xl lg:text-[130px] text-[#64AB7B] leading-none"
              style={{ 
                textShadow: '4px 4px 8px rgba(100, 171, 123, 0.3)'
              }}
            >
              DESIGNER
            </h2>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center">
          
          {/* Column 1 - Left Text */}
          <div className="font-mynerve text-lg md:text-2xl text-[#2C2C2C] space-y-6 order-2 md:order-1">
            {/* Block 1 */}
            <div className="space-y-1">
              <p className="opacity-65">
                <span className="relative inline-block px-1 mx-1">
                  <span className="relative z-10 opacity-100 text-black font-bold">I am Priyanka,</span>
                  <Image 
                    src="/priyanka.svg" 
                    alt="highlight" 
                    fill 
                    className="absolute inset-0 -z-10 object-fill scale-110" 
                  />
                </span>
              </p>
              <p className="opacity-65">
                Product Designer with{" "}
                <span className="relative inline-block px-1 mx-1">
                  <span className="relative z-10 opacity-100 text-black font-bold">3+ years</span>
                  <Image 
                    src="/yoe.svg" 
                    alt="highlight" 
                    fill 
                    className="absolute inset-0 -z-10 object-fill scale-110" 
                  />
                </span>{" "}
                of experience.
              </p>
            </div>

            {/* Block 2 */}
            <div className="space-y-1">
              <p className="opacity-65">
                Currently{" "}
                <span className="relative inline-block px-1 mx-1">
                  <span className="relative z-10 opacity-100 text-black font-bold">@Everquint</span>
                  <Image 
                    src="/everquint.svg" 
                    alt="highlight" 
                    fill 
                    className="absolute inset-0 -z-10 object-fill scale-110" 
                  />
                </span>
              </p>
              <p className="opacity-65">[2022 – Present]</p>
            </div>

            {/* Block 3 */}
            <p className="opacity-65">
              <span className="relative inline-block px-1 mx-1">
                <span className="relative z-10 opacity-100 text-black font-bold">📍Bengaluru (Open to Relocation)</span>
                <Image 
                  src="/blr.svg" 
                  alt="highlight" 
                  fill 
                  className="absolute inset-0 -z-10 object-fill scale-110" 
                />
              </span>
            </p>
          </div>

          {/* Column 2 - Center Image */}
          <div className="relative order-1 md:order-2">
            <div className="relative w-full md:w-[450px] lg:w-[550px]">
              {/* Main Image */}
              <div className="relative w-full rounded-3xl overflow-hidden bg-transparent">
                <Image
                  src="/My Image.png"
                  alt="Priyanka"
                  width={550}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Column 3 - Right Text */}
          <div className="font-mynerve text-lg md:text-2xl text-[#2C2C2C] space-y-6 order-3">
            {/* Tool Icons */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-12 h-12 md:w-14 md:h-14 transition-all duration-300 ease-out hover:scale-125 hover:rotate-6 hover:drop-shadow-xl cursor-pointer">
                <Image src="/Figma.svg" alt="Figma" fill className="object-contain" />
              </div>
              <div className="relative w-12 h-12 md:w-14 md:h-14 transition-all duration-300 ease-out hover:scale-125 hover:-rotate-6 hover:drop-shadow-xl cursor-pointer">
                <Image src="/Loveable.svg" alt="Loveable" fill className="object-contain" />
              </div>
              <div className="relative w-12 h-12 md:w-14 md:h-14 transition-all duration-300 ease-out hover:scale-125 hover:rotate-6 hover:drop-shadow-xl cursor-pointer">
                <Image src="/Notion.svg" alt="Notion" fill className="object-contain" />
              </div>
              <div className="relative w-12 h-12 md:w-14 md:h-14 transition-all duration-300 ease-out hover:scale-125 hover:-rotate-6 hover:drop-shadow-xl cursor-pointer">
                <Image src="/Gemini.svg" alt="Gemini" fill className="object-contain" />
              </div>
              <div className="relative w-12 h-12 md:w-14 md:h-14 transition-all duration-300 ease-out hover:scale-125 hover:rotate-6 hover:drop-shadow-xl cursor-pointer">
                <Image src="/Protopie.svg" alt="Protopie" fill className="object-contain" />
              </div>
            </div>

            {/* Block 1 */}
            <div className="space-y-1">
              <p className="opacity-65">My Expertise: Understanding of</p>
              <p className="opacity-65">
                <span className="relative inline-block px-1 mx-1">
                  <span className="relative z-10 opacity-100 text-black font-bold">B2B SaaS & complex systems.</span>
                  <Image 
                    src="/b2b.svg" 
                    alt="highlight" 
                    fill 
                    className="absolute inset-0 -z-10 object-fill scale-110" 
                  />
                </span>
              </p>
            </div>

            {/* Block 2 */}
            <p className="opacity-65">
              I{" "}
              <span className="relative inline-block px-1 mx-1">
                <span className="relative z-10 opacity-100 text-black font-bold">learn fast & adapt easily</span>
                <Image 
                  src="/skill.svg" 
                  alt="highlight" 
                  fill 
                  className="absolute inset-0 -z-10 object-fill scale-110" 
                />
              </span>{" "}
              to challenges beyond my niche.
            </p>

            {/* CTA Section */}
            <div className="mt-8 space-y-4">
              <p className="font-shantell font-medium text-base md:text-lg text-[#2C2C2C]">
                Have an exciting opportunity?
                <br />
                I'd love to connect.!
              </p>
              <a 
                href="https://www.linkedin.com/in/priyankapattnaik628/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-[#fffcf5] border-2 border-[#674305] rounded-xl font-shantell font-semibold text-sm md:text-base text-[#674305] hover:bg-[#674305] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg w-fit"
              >
                Let's Chat
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Grass decoration at bottom - Full width */}
      <div className="absolute bottom-0 left-0 w-full h-auto z-20 pointer-events-none">
        <Image
          src="/grass.png"
          alt="Grass decoration"
          width={1920}
          height={200}
          className="w-full object-cover"
        />
      </div>
    </section>
  );
}
