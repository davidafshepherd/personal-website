import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-bold">Selected Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </section>
  );
}
