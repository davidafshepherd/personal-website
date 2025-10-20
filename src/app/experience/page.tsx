import experience from "@/data/experience";

export default function ExperiencePage() {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-bold">Experience</h1>
      <ul className="space-y-6">
        {experience.map((role) => (
          <li key={role.title} className="p-5 rounded-2xl border">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">{role.title} · {role.org}</h2>
              <span className="text-xs text-gray-500">{role.length}</span>
            </div>
            <p className="mt-2 text-sm text-gray-700">{role.summary}</p>
            <ul className="mt-3 list-disc pl-5 text-sm">
              {role.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
            {role.links?.length ? (
              <div className="mt-3 flex gap-3 text-sm">
                {role.links.map((l) => <a key={l.href} className="underline" href={l.href}>{l.label}</a>)}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
