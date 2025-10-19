type Project = {
  slug: string;
  name: string;
  tagline: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border rounded-2xl p-5 h-full flex flex-col">
      <h2 className="font-semibold">{project.name}</h2>
      <p className="text-sm text-gray-700 mt-1">{project.tagline}</p>
      <div className="mt-3 text-xs text-gray-500">{project.stack.join(" · ")}</div>
      <div className="mt-auto pt-4 flex gap-3 text-sm">
        {project.links.map((l) => <a key={l.href} className="underline" href={l.href}>{l.label}</a>)}
      </div>
    </article>
  );
}
