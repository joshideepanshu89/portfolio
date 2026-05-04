"use client";

import Image from "next/image";

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
    <section id="techstack" className="py-10 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-(--primary) text-xl font-bold tracking-[0.2em] uppercase mb-4">
            Tech Stack
          </h2>
          <p className="text-(--text) text-base md:text-2xl font-medium opacity-90">
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-y-8 md:gap-12 items-center">
          {TECH_DATA.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col items-center gap-4 transition-all duration-300"
            >
              {/* Icon Container with Glassmorphism effect */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl  border border-(--primary-20) group-hover:border-(--primary) group-hover:bg-(--primary-20) transition-all duration-300 group-hover:-translate-y-2">
  <Image
    src={`/images/icons/${item.icon}`}
    alt={`${item.name} logo`}
    width={48} // 12 * 4 (Tailwind w-12)
    height={48}
    className="object-contain"
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