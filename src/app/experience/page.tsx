import experience from "@/data/experience";
import ExperienceCard from "@/components/ExperienceCard";

export default function ExperiencePage() {
  return (
    <section className="py-8 sm:py-12 space-y-6 sm:space-y-8">
      <h1 className="text-2xl sm:text-3xl font-bold">Experience</h1>
      <ul className="space-y-4 sm:space-y-6">
        {experience.map((role) => (
          <ExperienceCard key={role.title + role.org} role={role as any} />
        ))}
      </ul>
    </section>
  );
}
