"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  
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

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-gray-200">
      <nav className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">David Afonso Shepherd</Link>
        <ul className="flex items-center gap-6 text-sm">
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
      </nav>
    </header>
  );
}
