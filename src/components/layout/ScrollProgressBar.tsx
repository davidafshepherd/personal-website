"use client";

import { useEffect, useState } from "react";


export default function ScrollProgressBar() {
  // Scroll progress as a percentage (0-100), used to size the bar.
  const [scrollProgress, setScrollProgress] = useState(0);


  // Track scroll position and update scroll progress.
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;
      const scrollY = window.scrollY;

      const scrollPercent = 0 < scrollableHeight ? (scrollY / scrollableHeight) * 100 : 0;
      setScrollProgress(scrollPercent);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="fixed top-0 inset-x-0 h-1 z-200 pointer-events-none">
      <div
        className="h-full bg-linear-to-r from-(--accent-600) via-(--accent-500) to-(--accent-400)"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
