import React from "react";
import Image from "next/image";
import { testimonials } from "@/data.js";

const bgColors = ["bg-[#9DDDFF]", "bg-[#FFF59D]", "bg-[#C3FF9D]", "bg-[#FF9DC7]"];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <h2 className="text-[42px] md:text-[54px] text-[#674305] text-center mb-4" style={{ fontFamily: 'Sunday Romantic' }}>
        The Story Behind the Screens
      </h2>
      <p className="font-murecho text-lg text-[#2C2C2C]/70 text-center max-w-3xl mx-auto mb-16">
        Behind every polished screen is a designer who cares deeply about the people using it. Here's what collaborators have shared about working together.
      </p>

      {/* Sticky Note Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`${bgColors[index % 4]} p-6 rounded-lg shadow-md ${
              index % 2 === 0 ? "-rotate-1" : "rotate-2"
            } hover:rotate-0 hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer`}
          >
            {/* Quote */}
            <p className="font-caveat text-3xl text-[#2C2C2C] leading-snug mb-6">
              "{testimonial.quote}"
            </p>

            {/* Job Title */}
            <p className="font-murecho text-xs text-[#2C2C2C]/80 mt-auto">
              {testimonial.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
