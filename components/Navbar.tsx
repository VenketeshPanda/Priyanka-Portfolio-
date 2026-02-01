"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  // Scroll Spy - Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -100px 0px',
      threshold: 0.2, // 20% of section must be visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe sections
    const sections = ['home', 'projects', 'about'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Cleanup
    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Smooth Scroll Function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4 md:px-12 md:py-6 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('home')} 
          className="cursor-pointer hover:scale-105 transition-transform"
        >
          <Image src="/Logo.svg" alt="Logo" width={40} height={40} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" />
        </button>

        {/* Navigation Icons */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Home Icon */}
          <button 
            onClick={() => scrollToSection('home')} 
            className={`cursor-pointer transition-all duration-300 ${
              activeSection === 'home' 
                ? 'opacity-100 scale-110' 
                : 'opacity-50 hover:opacity-100 hover:scale-105'
            }`}
          >
            <Image src="/Home Icon.svg" alt="Home" width={24} height={24} className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Project Icon */}
          <button 
            onClick={() => scrollToSection('projects')} 
            className={`cursor-pointer transition-all duration-300 ${
              activeSection === 'projects' 
                ? 'opacity-100 scale-110' 
                : 'opacity-50 hover:opacity-100 hover:scale-105'
            }`}
          >
            <Image src="/Project Icon .svg" alt="Projects" width={24} height={24} className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* About Me Icon */}
          <button 
            onClick={() => scrollToSection('about')} 
            className={`cursor-pointer transition-all duration-300 ${
              activeSection === 'about' 
                ? 'opacity-100 scale-110' 
                : 'opacity-50 hover:opacity-100 hover:scale-105'
            }`}
          >
            <Image src="/aboutme.svg" alt="About Me" width={24} height={24} className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Resume Link */}
          <a 
            href="https://drive.google.com/file/d/1QJb13yeApdYb4WHAMejU9j3jQtmKk8P-/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300"
          >
            <Image src="/Resume Icon.svg" alt="Resume" width={24} height={24} className="w-5 h-5 md:w-6 md:h-6" />
            <span className="hidden md:inline font-shantell text-lg font-light text-[#2c2c2c]">
              Resume
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
