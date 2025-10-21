type Project = {
  slug: string;
  name: string;
  tagline: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border rounded-2xl p-4 sm:p-5 h-full flex flex-col hover:shadow-lg transition-shadow">
      <h2 className="font-semibold text-base sm:text-lg">{project.name}</h2>
      <p className="text-xs sm:text-sm text-gray-700 mt-1 leading-relaxed">{project.tagline}</p>
      <div className="mt-3 text-xs text-gray-500 leading-relaxed">{project.stack.join(" · ")}</div>
      <div className="mt-auto pt-4 flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
        {project.links.map((l) => (
          <a
            key={l.href}
            className="underline hover:text-blue-600"
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={l.label}
          >
            {l.label}
          </a>
        ))}
      </div>
    </article>
  );
}
