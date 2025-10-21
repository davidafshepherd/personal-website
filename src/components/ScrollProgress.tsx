"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    // initialize on mount
    updateScrollProgress();
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-[100]">
      <div
        className="h-full bg-gradient-to-r from-[var(--accent-600)] via-[var(--accent-500)] to-[var(--accent-400)] shadow-lg shadow-[color:var(--accent-500)/0.5] transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
