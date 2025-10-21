"use client";
import { useEffect, useRef, useState } from "react";
import { SOCIAL_LINKS } from "@/components/Social";

// icons are imported from shared Social.tsx

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Initialize from DOM after mount and keep in sync with external changes
  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setIsDark(root.classList.contains('dark'));
    sync();
    const mo = new MutationObserver(sync);
    mo.observe(root, { attributes: true, attributeFilter: ['class'] });
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'theme') sync();
    };
    window.addEventListener('storage', onStorage);
    return () => {
      mo.disconnect();
      window.removeEventListener('storage', onStorage);
    };
  }, []);
  
  // Close menu when clicking outside menu or toggle
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      // Ignore clicks within the navbar/header area so empty navbar taps don't close
      if (headerRef.current?.contains(target)) return;
      const clickedToggle = toggleRef.current?.contains(target);
      const clickedMenu = menuRef.current?.contains(target);
      if (!clickedToggle && !clickedMenu) {
        setIsMenuOpen(false);
      }
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    const listenerOptions: AddEventListenerOptions = { capture: true };

    document.addEventListener("click", handleOutside, listenerOptions);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("click", handleOutside, listenerOptions);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isMenuOpen]);
  
  
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains('dark');
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch {}
    const root = document.documentElement;
    const body = document.body;
    root.classList.toggle('dark', next);
    body.classList.toggle('dark', next);
    // Temporarily disable transitions so all colors swap at once
    root.classList.add('theme-switching');
    body.classList.add('theme-switching');
    window.setTimeout(() => {
      root.classList.remove('theme-switching');
      body.classList.remove('theme-switching');
    }, 150);
    setIsDark(next);
  };

  return (
    <header ref={headerRef} className={`sticky top-0 z-[120] backdrop-blur-md border-b transition-all duration-300 relative ${
      isScrolled 
        ? 'bg-white/90 border-gray-200 shadow-lg shadow-gray-200/50 dark:bg-[#121212]/90 dark:border-[#282828] dark:shadow-black/30' 
        : 'bg-white/80 border-gray-200/50 dark:bg-[#121212]/80 dark:border-[#282828]/60'
    }`}>
      <nav className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-14 grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center">
        {/* Left: Name */}
        <a 
          href="#" 
          onClick={scrollToTop}
          className="font-semibold text-sm sm:text-base hover:text-[var(--accent)] transition-colors cursor-pointer z-10 justify-self-start whitespace-nowrap min-w-0"
        >
          David Afonso Shepherd
        </a>
        
        {/* Middle: Social Icons (md and up) */}
        <div className="hidden md:flex items-center justify-center gap-2 justify-self-center">
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? "_blank" : undefined}
              rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
              className={`p-2 rounded-lg transition-colors duration-200 ${label === 'GitHub' 
                ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-[#1DB954] dark:hover:bg-[#1db9541a]' 
                : 'text-gray-600 hover:text-[var(--accent)] hover:bg-[var(--accent-50)] dark:text-gray-300 dark:hover:text-[#1DB954] dark:hover:bg-[#1db9541a]'}`}
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
        
        {/* Right: Links + Theme toggle + Mobile menu */}
        <div className="flex items-center gap-2 justify-self-end">
          <ul className="hidden sm:flex items-center gap-2 z-10">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleSmoothScroll(e, l.href)}
                  className="px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 cursor-pointer dark:text-gray-300 dark:hover:text-[#1DB954] dark:hover:bg-[#1db9541a]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title="Toggle theme"
            className="p-2 rounded-lg transition-colors z-10 text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-[#1DB954] dark:hover:bg-[#1db9541a] cursor-pointer"
          >
            {/* Moon (light mode) */}
            <svg className="w-5 h-5 block dark:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
            {/* Sun (dark mode) */}
            <svg className="w-5 h-5 hidden dark:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <line x1="12" y1="2" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="22" />
              <line x1="2" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="22" y2="12" />
              <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
              <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
              <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
              <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
            </svg>
          </button>

          <button
            className="sm:!hidden p-2 rounded-lg transition-colors z-10 text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-green-500 dark:hover:bg-green-950/50 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            ref={toggleRef}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] pointer-events-none sm:!hidden">
          {/* overlay below navbar only */}
          <div
            className="absolute inset-x-0 top-14 bottom-0 bg-black/0 pointer-events-auto"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 top-14 z-[70] bg-white border-t border-gray-200 shadow-lg pointer-events-auto dark:bg-[#181818] dark:border-[#282828]"
            ref={menuRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto max-w-5xl px-4 py-3 space-y-4">
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-400">Connect</p>
              <div className="grid grid-cols-3 gap-2 place-items-center">
                {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? "_blank" : undefined}
                    rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className={`p-2 rounded-lg transition-colors duration-200 ${label === 'GitHub' 
                      ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-[#1DB954] dark:hover:bg-[#1db9541a]' 
                      : 'text-gray-600 hover:text-[var(--accent)] hover:bg-[var(--accent-50)] dark:text-gray-300 dark:hover:text-[#1DB954] dark:hover:bg-[#1db9541a]'}`}
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-400">Navigate</p>
              <ul className="flex flex-col divide-y divide-gray-100 overflow-hidden rounded-xl border border-gray-100 dark:divide-[#282828] dark:border-[#282828]">
            {links.map(l => (
                  <li key={l.href} className="relative">
                <a
                  href={l.href}
                      onClick={(e) => { handleSmoothScroll(e, l.href); setIsMenuOpen(false); }}
                      className="absolute inset-0"
                      aria-label={l.label}
                    />
                    <span className="block w-full px-6 py-2.5 text-sm font-medium leading-5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 dark:text-gray-300 dark:hover:text-[#1DB954] dark:hover:bg-[#1db9541a]">
                  {l.label}
                    </span>
              </li>
            ))}
          </ul>
        </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
