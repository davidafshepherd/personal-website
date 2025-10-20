import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="py-8 sm:py-12 space-y-6 sm:space-y-8">
      <h1 className="text-2xl sm:text-3xl font-bold">Selected Projects</h1>
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </section>
  );
}
