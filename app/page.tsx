"use client";

import { useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark, mounted]);

  return (
    <main className="relative">
      {/* Dark mode toggle */}
      <button
        onClick={() => setDark((d) => !d)}
        aria-label="Toggle dark mode"
        className="
          fixed top-5 right-5 z-50 p-2.5 rounded-full
          bg-white/70 dark:bg-[#1E1B2E]/70 backdrop-blur
          border border-[#C7CBF5] dark:border-[#3D3A6B]
          text-[#4361EE] dark:text-[#C7CBF5]
          hover:scale-110 transition-transform shadow-sm
        "
      >
        {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      <HeroSection />
    </main>
  );
}
