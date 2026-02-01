"use client";

import React from "react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden gap-4 md:gap-8 px-4">
      {/* Cloud Container with Text */}
      <div className="relative w-[95%] max-w-4xl mx-auto">
        {/* Aspect Ratio Container (707:415 = ~58.7%) */}
        <div className="relative w-full" style={{ paddingBottom: '58.7%' }}>
          {/* Cloud SVG */}
          <svg 
            viewBox="0 0 707 415" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="absolute inset-0 w-full h-full animate-breathe origin-center"
          >
            <path d="M506.5 0C578.573 0 637 58.4268 637 130.5C637 137.192 636.494 143.766 635.522 150.188C677.032 163.842 707 202.921 707 249C707 306.438 660.438 353 603 353C575.514 353 550.518 342.336 531.924 324.921C519.395 368.287 479.402 400 432 400C409.952 400 389.506 393.138 372.682 381.435C351.168 402.21 321.835 415 289.5 415C242.939 415 202.598 388.481 182.875 349.784C163.802 371.957 135.542 386 104 386C46.5624 386 0 339.438 0 282C0 233.296 33.48 192.412 78.6807 181.105C73.0866 167.508 70 152.615 70 137C70 72.935 121.935 21 186 21C224.556 21 258.718 39.8106 279.811 68.7549C295.806 52.2553 318.205 42 343 42C363.151 42 381.721 48.7737 396.556 60.168C419.753 23.9812 460.326 0 506.5 0Z" fill="#5BA874"/>
          </svg>

          {/* Text Content Overlaid on Cloud */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-[8%] py-[10%]">
            <h1 className="text-[5.5vw] md:text-[48px] lg:text-[64px] font-shantell font-medium text-white text-center mb-1 md:mb-2 whitespace-nowrap">
              Hey, I&apos;m Priyanka :)
            </h1>
            <p className="text-[3.5vw] md:text-[20px] lg:text-[24px] font-murecho text-white text-center w-[80%]">
              I design data-heavy interfaces for complex digital products.
            </p>
          </div>
        </div>
      </div>

      {/* Open to Work Badge - Below Cloud */}
      <div className="flex items-center justify-center gap-2 md:gap-3 text-[#24763F] font-shantell text-[10px] px-2 py-1 md:text-[18px] md:px-4 md:py-2 mx-auto">
        <div className="relative">
          <span className="flex h-2 w-2 md:h-3 md:w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-primary-green"></span>
          </span>
        </div>
        <span>Open to Work</span>
        <span>•</span>
        <span>Joining Immediately</span>
      </div>

      {/* Scroll Indicator - Fixed at Bottom */}
      <div 
        onClick={() => scrollToSection('projects')}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
      >
        <span className="text-[14px] md:text-[18px] font-shantell text-dark-text text-center">See my work</span>
        <svg
          className="w-5 h-5 text-dark-text animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
