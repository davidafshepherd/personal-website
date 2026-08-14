"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const computeProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      return Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
    };

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrollProgress(computeProgress());
        ticking = false;
      });
    };

    setScrollProgress(computeProgress());
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 w-screen h-1 bg-transparent z-[200] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[var(--accent-600)] via-[var(--accent-500)] to-[var(--accent-400)] transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
