import experience from "@/data/experience";

export default function ExperiencePage() {
  return (
    <section className="py-8 sm:py-12 space-y-6 sm:space-y-8">
      <h1 className="text-2xl sm:text-3xl font-bold">Experience</h1>
      <ul className="space-y-4 sm:space-y-6">
        {experience.map((role) => (
          <li key={role.title} className="p-4 sm:p-5 rounded-2xl border">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
              <h2 className="font-semibold text-sm sm:text-base">{role.title} · {role.org}</h2>
              <span className="text-xs text-gray-500 whitespace-nowrap">{role.length}</span>
            </div>
            <p className="mt-2 text-sm sm:text-base text-gray-700">{role.summary}</p>
            <ul className="mt-3 list-disc pl-5 text-xs sm:text-sm space-y-1">
              {role.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
            {role.links?.length ? (
              <div className="mt-3 flex flex-wrap gap-3 text-xs sm:text-sm">
                {role.links.map((l) => <a key={l.href} className="underline hover:text-blue-600" href={l.href}>{l.label}</a>)}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
