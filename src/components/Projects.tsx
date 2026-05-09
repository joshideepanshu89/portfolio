"use client";
import { ArrowRight, CircleDot, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Projects() {

  const [visibleCount, setVisibleCount] = useState(3);

const projects = [
  {
    title: "Invoician",
    image: "invoician.png",
    alt: "Invoician full stack invoicing system dashboard built with Node.js MongoDB and authentication",
    desc: "Business invoicing and financial management system.",
    link: "https://invoician.com",
    points: [
      "REST APIs for billing workflows",
      "Auth (JWT + Google OAuth)",
      "VPS deployment (Nginx, PM2)",
    ],
    tags: ["Node.js", "MongoDB", "Auth", "VPS"],
  },
  {
    title: "GarageOnCall",
    image: "goc.png",
    alt: "GarageOnCall bike service booking platform with dynamic API based pricing and booking flow",
    desc: "At-home bike service and repair platform.",
    link: "https://garageoncall.com",
    points: [
      "Bike data via external APIs",
      "Dynamic pricing logic",
      "Form-based booking workflow",
    ],
    tags: ["REST API", "MongoDB", "Dynamic UI", "Forms"],
  },
  {
    title: "FluffyTouch",
    image: "fluffy.png",
    alt: "FluffyTouch pet grooming and boarding booking platform with dynamic forms and service system",
    desc: "Pet grooming and boarding service platform.",
    link: "https://fluffytouch.in",
    points: [
      "Component-based service structure",
      "Dynamic form handling",
      "Inquiry and booking flows",
    ],
    tags: ["UI System", "Node.js", "MongoDB", "Forms"],
  },
  {
    title: "Glazma",
    image: "glazma.png",
    alt: "Glazma service booking platform with Redux state management authentication and order tracking system",
    desc: "Men’s grooming service booking platform.",
    link: "https://glazma.com",
    points: [
      "Centralized state using Redux",
      "Auth with user session handling",
      "Order tracking with status updates",
    ],
    tags: ["Redux", "Node.js", "MongoDB", "Auth"],
  },
  {
    title: "BHUMU",
    image: "bhumu.png",
    alt: "BHUMU wellness platform with structured content system reusable UI components and optimized frontend",
    desc: "Wellness and lifestyle content platform.",
    link: "https://bhumu.com",
    points: [
      "Reusable component system",
      "Optimized rendering and routing",
      "Scalable UI structure",
    ],
    tags: ["React", "UI Architecture", "Performance", "SEO"],
  },
  {
    title: "RepairBuddy",
    image: "repairbuddyonline.png",
    alt: "RepairBuddy AC service booking platform with lightweight UI and fast performance",
    desc: "AC service and repair booking platform.",
    link: "https://repairbuddyonline.com",
    points: [
      "Focused service selection UI",
      "Minimal API integration",
      "Fast-loading responsive layout",
    ],
    tags: ["Landing Page", "Performance", "Forms"],
  },
  {
    title: "WeExcel Learning Center",
    image: "weexcel.png",
    alt: "WeExcel Learning Center educational platform with course pages inquiry forms and structured content flow",
    desc: "IELTS coaching and course platform.",
    link: "https://weexcellerningcenter.com",
    points: [
      "Page-based routing system",
      "Form handling for inquiries",
      "Structured content flow",
    ],
    tags: ["Content Pages", "Forms", "UX Flow"],
  },
  {
    title: "Feedbacker",
    image: "feedbacker.png",
    alt: "Feedbacker platform for social growth services with dynamic forms dashboard and multi platform workflows",
    desc: "Social growth and engagement service platform.",
    link: "https://feedbacker.in",
    points: [
      "Conditional input handling",
      "Platform-specific workflows",
      "Dashboard-based request tracking",
    ],
    tags: ["Dynamic Forms", "Node.js", "MongoDB"],
  },
];
  const showAll = visibleCount >= projects.length;

  const handleToggle = () => {
    if (showAll) {
      setVisibleCount(3); 
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    } else {
      setVisibleCount(projects.length); 
    }
  };

  return (
    <section id="projects" className="py-10 md:py-20 bg-(--background-light) px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-10">
          <h2 className="text-(--primary) text-xl font-bold tracking-[0.2em] uppercase mb-4">
            Projects
          </h2>
          <p className="text-(--text) text-base md:text-2xl font-medium max-w-4xl mx-auto leading-tight">
            Real-world Applications & Solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {/* Slice method use kiya hai yahan */}
          {projects.slice(0, visibleCount).map((project) => (
            <div 
              key={project.title} 
              className="group bg-(--background) border border-(--primary-20) rounded-2xl overflow-hidden transition-all duration-300 flex flex-col hover:shadow-xl hover:shadow-(--primary-10)"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={`/images/projects/${project.image}`}
                  alt={project.alt}
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-(--text) font-bold text-xl group-hover:text-(--primary) transition-colors">
                    {project.title}
                  </h3>
                  {project.link !== "#" && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="text-(--primary) p-2 hover:bg-(--primary-20) rounded-full transition-colors"
                    >
                      <ExternalLink size={20}/>
                    </Link>
                  )}
                </div>

                <p className="text-sm opacity-80 mb-4 line-clamp-2">
                  {project.desc}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {project.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-(--foreground) opacity-90">
                      <CircleDot size={14} className="text-(--primary) mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-(--background-light) text-(--primary) text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md border border-(--primary-20)">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Toggle Button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleToggle}
            className="inline-flex items-center gap-2 bg-(--primary) text-(--background) font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-(--primary-20)"
          >
            {showAll ? (
              <>Show Less <ChevronUp size={20} /></>
            ) : (
              <>View All Projects <ChevronDown size={20} /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}