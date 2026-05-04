"use client";

export function Footer() {

  return (
    <footer className="mt-10 md:mt-20 py-5 border-t border-(--primary-20)">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Left Side: Brand & Status */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-(--text) font-bold tracking-tight text-lg">
              Deepanshu <span className="text-(--primary)">Joshi</span>
            </span>
            <span className="text-xs opacity-50 uppercase tracking-[0.1em] mt-1">
              Full Stack Developer • Germany
            </span>
          </div>

          {/* Right Side: Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm opacity-60">
              &copy; 2025 All rights reserved.
            </p>
            <p className="text-[11px] opacity-40 mt-1">
              Built with Next.js & Tailwind CSS
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}