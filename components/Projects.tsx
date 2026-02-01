import React from "react";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    heading: "Bridging the 50% Accuracy Gap in Sales Forecasting",
    subtext: "Financial tools are often great at data but bad at context. We designed a feature that lets sales teams layer their \"human logic\" over any analysis, transforming how the company predicts revenue.",
    date: "Dec 2025",
    tags: ["SYSTEMS THINKING", "INFORMATION ARCHITECTURE", "INTERACTION DESIGN"],
    bg: "#F7F5FF",
    image: "/Project 1.jpg",
    link: "https://www.figma.com/proto/boQQQnDFss5C4Nba5Q6cJ8/Finance-Planning-Case-study?page-id=2679%3A2&node-id=2691-16&viewport=-13%2C55%2C0.05&t=OnaK50f6LLf3CR5B-1&scaling=scale-down-width&content-scaling=fixed",
  },
  {
    id: 2,
    heading: "Empowering Strategic Decisions Through Redesign of Talent Review App",
    subtext: "The existing talent review tool had become a hindrance, obstructing critical organizational discussions rather than facilitating them. I redesigned the experience to transform this frustration into a seamless, empowering journey. The new interface now effectively enables strategic talent planning with clarity and ease.",
    date: "Jul 2025",
    tags: ["HR TECH", "COMPLEX LOGIC MAPPING", "HEURISTIC EVALUATION"],
    bg: "#FFF0F3",
    image: "/Project 2.jpg",
    link: "https://priyankadesignwork.framer.website/portfolio/callibrate",
  },
  {
    id: 3,
    heading: "RAMP Redesign: Streamlining the Legal Risk Resolution Flow",
    subtext: "Identifying legal risk is only half the battle; a clear path to resolution is essential. I redesigned the RAMP Committee Review app to introduce a structured 'Resolution Lifecycle,' guiding stakeholders from detection to final decision. This workflow clarity ensures mitigation plans are actively reviewed and finalized to minimize enterprise liability.",
    date: "Coming Soon",
    tags: ["WORKFLOW MAPPING", "PROCESS OPTIMISATION", "ERM"],
    bg: "#EBF6FF",
    image: "/Project 3.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-8 bg-cream scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-[42px] md:text-[54px] text-text-brown mb-2" style={{ fontFamily: 'Sunday Romantic' }}>
            My Projects
          </h2>
          <p className="font-murecho text-[#2C2C2C] opacity-70 text-base md:text-lg">
            A glimpse of my design work at my previous workspaces
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-16 md:space-y-20">
          {projectsData.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative border-[4px] border-[#674305] rounded-[32px] overflow-visible p-6 md:p-8 transition-transform hover:scale-[1.02] cursor-pointer"
              style={{ backgroundColor: project.bg }}
            >
              {/* Date Badge with Cloud Asset - Top Right Corner */}
              <div className={`absolute -top-8 z-20 w-24 ${
                index % 2 === 0 ? "-right-5" : "-left-5"
              }`}>
                <div className="relative w-full aspect-[24/16] flex items-center justify-center">
                  <Image 
                    src="/Project Cloud Asset.svg" 
                    alt="Date Badge" 
                    fill
                    className={`object-contain ${index % 2 !== 0 ? "scale-x-[-1]" : ""}`}
                  />
                  <span className="relative z-10 font-murecho text-xs text-[#674305] font-medium">
                    {project.date}
                  </span>
                </div>
              </div>

              {/* Card Content - Zig-Zag Layout */}
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-6 min-h-[400px]`}
              >
                {/* Image Section - Framed */}
                <div className="w-full md:w-1/2">
                  <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden shadow-sm bg-white">
                    <Image
                      src={project.image}
                      alt={project.heading}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Text Section - Top/Bottom Split */}
                <div className="w-full md:w-1/2 flex flex-col justify-between min-h-[400px]">
                  {/* Top Group - Content */}
                  <div className="flex-grow">
                    <h3 className="font-murecho font-bold text-3xl md:text-[32px] text-[#674305] mb-4 leading-tight">
                      {project.heading}
                    </h3>
                    <p className="font-murecho text-lg md:text-[18px] text-[#2c2c2c] leading-relaxed">
                      {project.subtext}
                    </p>
                  </div>

                  {/* Bottom Group - Tags */}
                  <div className="flex flex-wrap gap-2 mt-8">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="uppercase text-sm border border-[#674305] text-[#674305] px-4 py-2 rounded-lg font-murecho"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
