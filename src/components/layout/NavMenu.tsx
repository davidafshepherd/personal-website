interface Props {
  socialLinks: {
    key: string;
    href: string;
    label: string;
    Icon: React.FC<{ className?: string }>;
  }[];
  navLinks: {
    key: string;
    href: string;
    label: string;
  }[];
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void; 
}


export default function NavMenu({ socialLinks, navLinks, onNavigate }: Props) {
  return (
    <div className="absolute inset-x-0 top-14 z-70 bg-white border-t border-gray-200 shadow-lg dark:bg-[#181818] dark:border-[#282828]">
      <div className="mx-auto max-w-5xl px-4 py-3 space-y-4">
        {/* Social links */}
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-wider text-gray-400">Connect</p>
          <div className="grid grid-cols-3 gap-2 place-items-center">
            {socialLinks.map(l => (
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
        </div>

        {/* Navigation links */}
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-wider text-gray-400">Navigate</p>
          <ul className="flex flex-col divide-y divide-gray-100 overflow-hidden rounded-xl border border-gray-100 dark:divide-[#282828] dark:border-[#282828]">
            {navLinks.map(l => (
              <li key={l.key} className="relative">
                <a
                  href={l.href}
                  onClick={(e) => onNavigate(e, l.href) }
                  aria-label={l.label}
                  className="absolute inset-0"
                />
                <span className="block w-full px-6 py-2.5 text-sm font-medium leading-5 text-gray-700 hover:text-(--accent) hover:bg-(--accent-50) transition-colors duration-200 dark:text-gray-300">
                  {l.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
