import Image from "next/image";
import projects from "@/data/projects";
import experience from "@/data/experience";
import ProjectCard from "@/components/ProjectCard";
import InfiniteScroll from "@/components/InfiniteScroll";

export default function HomePage() {
  return (
    <>
      {/* Home Section */}
      <section className="h-screen flex items-center -mt-14">
        <div className="flex items-center gap-12 w-full">
          <div className="space-y-6">
          <div className="space-y-1">
            <p className="text-xl text-gray-600">Hi! My name is</p>
            <h1 className="text-4xl font-bold">David Afonso Shepherd</h1>
          </div>
          <h2 className="text-2xl font-semibold text-blue-600">Full-Stack Software Engineer · Machine Learning Engineer</h2>
          <div className="text-lg text-gray-700 flex items-center">
            <span className="mr-4">Proficient in</span>
            <div className="w-120">
              <InfiniteScroll />
            </div>
          </div>
          </div>
          
          {/* Logo Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Image src="/uniLogo.png" alt="Logo 1" width={80} height={80} className="rounded-lg" />
            <Image src="/socLogo.png" alt="Logo 2" width={80} height={80} className="rounded-lg" />
            <Image src="/jpmc.png" alt="Logo 3" width={80} height={80} className="rounded-lg" />
            <Image src="/spotify.png" alt="Logo 4" width={80} height={80} className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="space-y-8">
          <h1 className="text-2xl font-bold">About Me</h1>
          <div className="grid gap-8 md:grid-cols-[200px,1fr] items-start">
            <Image src="/avatar.jpg" alt="David Afonso Shepherd" width={200} height={200} className="rounded-2xl" />
            <div className="space-y-4">
              <p>
                {`I build ML/RL systems and polished frontends. President of AISoc (2024/25). Recent work includes `}
                <strong>multi-agent wildfire suppression (RL)</strong>
                {`, `}
                <strong>GTZAN music genre classification</strong>
                {` and a `}
                <strong>Spotify Engineering internship</strong>
                {`.`}
              </p>
              <p className="text-gray-600">
                {`I care about practical impact, strong engineering, and clear communication.
                Below you'll find selected projects and experience.`} 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20">
        <div className="space-y-8">
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
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20">
        <div className="space-y-8">
          <h1 className="text-2xl font-bold">Selected Projects</h1>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Get in touch</h1>
          <p>Email: <a className="underline" href="mailto:you@domain.com">you@domain.com</a></p>
          <p>Links: <a className="underline" href="https://github.com/your-handle">GitHub</a> · <a className="underline" href="https://www.linkedin.com/in/your-handle">LinkedIn</a></p>
        </div>
      </section>
    </>
  );
}
