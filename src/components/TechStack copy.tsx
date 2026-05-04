"use client";

import React from "react";

interface TechItem {
  name: string;
  icon: string;
}

const TECH_DATA: TechItem[] = [
  { name: "React", icon: "react.svg" },
  { name: "Next.js", icon: "nextjs.svg" },
  { name: "TypeScript", icon: "typescript.svg" },
  { name: "Tailwind", icon: "tailwindcss.svg" },
  { name: "Node.js", icon: "nodejs.svg" },
  { name: "Express", icon: "express.svg" },
  { name: "MongoDB", icon: "mongodb.svg" },
  { name: "Git", icon: "git.svg" },
  { name: "Nginx", icon: "nginx.svg" },
  { name: "Ubuntu", icon: "ubuntu.svg" },
];

export default function TechStack() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-(--primary) text-sm font-bold tracking-[0.3em] uppercase mb-4">
            Tech Stack
          </h2>
          <p className="text-(--text) text-xl md:text-2xl font-medium opacity-90">
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-8 md:gap-12 items-center">
          {TECH_DATA.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col items-center gap-4 transition-all duration-300"
            >
              {/* Icon Container with Glassmorphism effect */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-gray-900/50 border border-gray-800 group-hover:border-(--primary-20) group-hover:bg-(--primary-20) transition-all duration-300 group-hover:-translate-y-2">
                <img
                  className="w-10 h-10 md:w-12 md:h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  src={`/images/icons/${item.icon}`}
                  alt={`${item.name} logo`}
                  loading="lazy"
                />
              </div>

              <span className="text-xs md:text-sm font-medium text-(--foreground) opacity-60 group-hover:opacity-100 group-hover:text-(--primary) transition-opacity">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}