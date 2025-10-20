"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-gray-200 bg-white/80">
      <nav className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-sm sm:text-base">David Afonso Shepherd</Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleSmoothScroll(e, l.href)}
                className="hover:underline cursor-pointer"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white">
          <ul className="mx-auto max-w-5xl px-4 sm:px-6 py-4 space-y-3">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleSmoothScroll(e, l.href)}
                  className="block py-2 text-base hover:text-blue-600 cursor-pointer"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
