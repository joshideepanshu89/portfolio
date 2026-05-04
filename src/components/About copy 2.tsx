"use client";

import {
  ChartNoAxesCombined,
  Code2,
  LucideIcon,
  ShieldCheck,
  SquareChartGantt,
} from "lucide-react";

interface Feature {
  title: string;
  desc: string;
  icon: LucideIcon;
}

const FEATURES: Feature[] = [
  {
    title: "Production Ready",
    desc: "Built and deployed real-world applications on VPS.",
    icon: Code2,
  },
  {
    title: "Secure & Reliable",
    desc: "Authentication, data validation, and best practices.",
    icon: ShieldCheck,
  },
  {
    title: "Performance Focused",
    desc: "Optimized applications for speed, SEO, and user experience.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "End-to-End Ownership",
    desc: "From idea to deployment — I handle everything.",
    icon: SquareChartGantt,
  },
];

export default function About() {
  return (
    <section id="about" className="bg-(--background-light) py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-(--primary) text-xl font-bold tracking-[0.2em] uppercase mb-4">
            About Me
          </h2>
          <p className="text-(--text) text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            I build complete digital products independently — from UI/UX and
            frontend to backend APIs and deployment.
          </p>
          <p className="text-sm md:text-base mt-2 opacity-80">
            I focus on clean architecture, performance, and real-world impact.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col gap-4 p-6 transition-all duration-300 bg-(--background) rounded-2xl border border-gray-800/50 hover:border-(--primary-20) hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-(--primary-20)"
            >
              {/* Icon Container - TechStack Style Sync */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-900/50 border border-gray-800 text-(--primary) group-hover:bg-(--primary-20) transition-all duration-300">
                <item.icon size={30} strokeWidth={1.5} />
              </div>

              <div>
                <h3 className="text-(--text) font-bold text-lg mb-2 group-hover:text-(--primary) transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-70">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}