"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

import { GitHubIcon, HamburgerIcon, LinkedInIcon, MailIcon, MoonIcon, SunIcon } from "@/components/Icons";
import NavMenu from "@/components/layout/NavMenu";


// Social links.
const SOCIAL_LINKS = [
  { key: "linkedin", href: "https://www.linkedin.com/in/david-afonso-shepherd-986b10295/", label: "LinkedIn", Icon: LinkedInIcon },
  { key: "github", href: "https://github.com/davidafshepherd", label: "GitHub", Icon: GitHubIcon },
  { key: "email", href: "mailto:davidafonsoshepherd@gmail.com", label: "Email", Icon: MailIcon },
];

// Navigation links.
const NAV_LINKS = [
  { key: "about", href: "#about", label: "About" },
  { key: "experience", href: "#experience", label: "Experience" },
  { key: "projects", href: "#projects", label: "Projects" },
];


export default function NavBar() {
  // Theme state.
  const { theme, setTheme } = useTheme();

  // Navbar state.
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);


  // Check if page has been scrolled more than 10px.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(10 < window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  // Close mobile navigation menu when clicking outside the menu.
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!headerRef.current?.contains(target)) setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMenuOpen]);
  

  // Scroll smoothly to the top of the page.
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  // Scroll smoothly to the selected section.
  const scrollToLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-120 backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 border-gray-200 shadow-lg shadow-gray-200/50 dark:bg-[#121212]/90 dark:border-[#282828] dark:shadow-black/30' 
          : 'bg-white/80 border-gray-200/50 dark:bg-[#121212]/80 dark:border-[#282828]/60'
      }`}
    >
      {/* Navigation bar */}
      <nav className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-14 grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center">
        {/* Name */}
        <a 
          href="#" 
          onClick={scrollToTop}
          className="font-semibold text-sm sm:text-base hover:text-(--accent) transition-colors justify-self-start whitespace-nowrap"
        >
          David Afonso Shepherd
        </a>
        
        {/* Social links */}
        <div className="hidden md:flex items-center justify-center gap-2 justify-self-center">
          {SOCIAL_LINKS.map(l => (
            <a
              key={l.key}
              href={l.href}
              target={l.href.startsWith('http') ? "_blank" : undefined}
              rel={l.href.startsWith('http') ? "noopener noreferrer" : undefined}
              aria-label={l.label}
              className="p-2 rounded-lg transition-colors duration-200 text-gray-600 hover:text-(--accent) hover:bg-(--accent-50) dark:text-gray-300"
            >
              <l.Icon />
            </a>
          ))}
        </div>
        
        {/* Navigation links + Toggle theme button + Hamburger button */}
        <div className="flex items-center gap-2 justify-self-end">
          {/* Navigation links */}
          <ul className="hidden sm:flex items-center gap-2">
            {NAV_LINKS.map(l => (
              <li key={l.key}>
                <a
                  href={l.href}
                  onClick={(e) => scrollToLink(e, l.href)}
                  aria-label={l.label}
                  className="px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-(--accent) hover:bg-(--accent-50) rounded-lg transition-colors duration-200 dark:text-gray-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Toggle theme button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className="p-2 rounded-lg transition-colors text-gray-700 hover:text-(--accent) hover:bg-(--accent-50) dark:text-gray-300 cursor-pointer"
          >
            <MoonIcon className="w-5 h-5 dark:hidden" />
            <SunIcon className="w-5 h-5 hidden dark:block" />
          </button>

        {/* Hamburger button */}
          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="sm:hidden! p-2 rounded-lg transition-colors text-gray-700 hover:text-(--accent) hover:bg-(--accent-50) dark:text-gray-300 cursor-pointer"
          >
            <HamburgerIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile navigation menu */}
      {isMenuOpen && <NavMenu socialLinks={SOCIAL_LINKS} navLinks={NAV_LINKS} onNavigate={scrollToLink} />}
    </header>
  );
}
