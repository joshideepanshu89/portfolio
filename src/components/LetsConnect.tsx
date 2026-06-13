"use client";

import { Handshake } from "lucide-react";
import Link from "next/link";

export default function LetsConnect() {

  const email = "your.email@example.com"; 

  return (
    <section id="connect" className=" md:py-10 px-4">
      <div className="max-w-6xl mx-auto bg-(--background-light) rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left border border-(--primary-20) hover:border-(--primary) ">
        
        {/* Left: Icon & Text */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="p-4 bg-(--background) rounded-2xl border border-(--primary-20) text-(--primary) shadow-lg shadow-(--primary-20)/10">
            <Handshake size={48} strokeWidth={1.5} />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-(--text) text-xl md:text-2xl font-semibold tracking-tight">
              Open to Full Stack Developer Opportunities in Germany
            </h3>
            <p className="text-(--foreground) text-base md:text-lg opacity-80">
              Let’s build something impactful together.
            </p>
          </div>
        </div>

        {/* Right: Action Button */}
        <Link 
          href="mailto:joshideepanshu89@gmail.com"
          className="group flex items-center gap-3 bg-(--primary) hover:brightness-110 text-(--background) font-bold md:px-8 md:py-4 px-6 py-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-(--primary-20)/20 whitespace-nowrap"
        >
          Let’s Connect
        </Link>
      </div>
    </section>
  );
}