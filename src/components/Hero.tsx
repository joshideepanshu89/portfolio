"use client";

import { useEffect, useState } from "react";
import {
  Server,
  CloudUpload,
  Code2,
  ArrowRight,
  Download,
  LucideIcon,
} from "lucide-react";

// Interface for cleaner data management
interface HeroStat {
  icon: LucideIcon;
  title: string;
  description: string;
}

const HERO_STATS: HeroStat[] = [
  { icon: Code2, title: "Build", description: "Scalable apps" },
  { icon: Server, title: "Develop", description: "Robust APIs" },
  { icon: CloudUpload, title: "Deploy", description: "Live on VPS" },
];

export default function Hero() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Initial check
    setTheme(
      document.documentElement.classList.contains("light") ? "light" : "dark",
    );

    const observer = new MutationObserver(() => {
      setTheme(
        document.documentElement.classList.contains("light") ? "light" : "dark",
      );
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex flex-wrap gap-x-15 gap-y-0 justify-center items-center px-3 md:py-18 py-3">
      {/* Hero Image - Theme Based */}
      <div className="">
        <img
          src={
            theme === "dark"
              ? "/images/Hero_Dark.png"
              : "/images/Hero_Light.png"
          }
          alt="Hero Illustration"
          className="w-full max-w-[450px] object-contain"
        />
      </div>

      {/* Middle Stats - Desktop Only */}
      <div className="hidden md:grid gap-8">
        {HERO_STATS.map((item, idx) => (
          <div key={idx} className="flex items-center gap-5 group">
            <div className="border-2 border-(--primary-20) text-(--primary) p-3 rounded-2xl ">
              <item.icon size={32} />
            </div>
            <div>
              <div className="text-(--primary) text-xl font-bold">
                {item.title}
              </div>
              <div className="text-(--foreground) text-sm">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Content - Main Text */}
      <div className="max-[1240px]:text-center">
        <div className="space-y-2 mb-6">
          <h1 className="text-(--text) text-3xl md:text-[40px] font-semibold leading-tight">
            Full Stack Developer
          </h1>
          <h2 className="text-(--primary) text-xl md:text-3xl font-medium">
            (React Focused)
          </h2>
        </div>

        <p className="text-(--foreground) md:text-lg max-w-md mx-auto lg:mx-0">
          Based in Germany — I build scalable, production-ready web applications from frontend to
          backend.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap max-[1240px]:justify-center  items-center gap-4 mt-10 mb-10 md:mb-0 ">
          <a
            href="#projects"
            className="flex items-center gap-2 border-2 border-(--primary) bg-(--primary) text-(--background) font-bold md:px-6 md:py-3 px-3 py-2 rounded-xl "
          >
            View Work <ArrowRight size={20} />
          </a>

          <a
            href="/Deepanshu_Joshi_Full_Stack_Developer.pdf"
            download="Deepanshu_Joshi_CV.pdf"
            target="_blank"
            className="flex items-center gap-2 border-2 border-(--primary) text-(--primary) font-bold md:px-6 md:py-3 px-3 py-2 rounded-xl "
          >
            Download CV <Download size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
