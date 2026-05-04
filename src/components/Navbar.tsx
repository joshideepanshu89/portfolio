"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Jab bhi theme state change hogi, HTML class update ho jayegi
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  // Click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#techstack" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="relative flex justify-between items-center p-5 z-50">
      {/* Logo */}
      <div className="text-xl md:text-2xl font-semibold cursor-pointer">
        <span className="text-(--primary)">&lt;/&gt;</span>
        <span className="text-(--text)">Deepanshu</span>
        <span className="text-(--primary)">.</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-(--foreground) hover:text-(--primary) transition-colors duration-300 font-medium"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Actions (Theme + Menu) */}
      <div className="flex gap-4 items-center">
        {/* Theme Switcher Container */}
        <div className="border border-(--primary) rounded-full p-1 flex gap-1">
          <button
            onClick={() => setTheme("dark")}
            className={`p-2 rounded-full cursor-pointer ${
              theme === "dark" 
                ? "bg-(--primary) text-white shadow-sm" 
                : "text-(--primary-20) hover:text-(--primary)"
            }`}
          >
            <Moon size={16} />
          </button>

          <button
            onClick={() => setTheme("light")}
            className={`p-2 rounded-full cursor-pointer  ${
              theme === "light" 
                ? "bg-(--primary) text-white shadow-sm" 
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            <Sun size={16} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setOpen(!open)} 
          className="lg:hidden text-(--text) hover:text-(--primary) transition-colors"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div
          ref={menuRef}
          className="absolute top-20 right-5 w-64 bg-(--background) border border-gray-800 rounded-2xl shadow-2xl lg:hidden p-6 z-[60] animate-in fade-in zoom-in duration-200"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-(--foreground) hover:text-(--primary) transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}