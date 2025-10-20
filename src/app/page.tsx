import Image from "next/image";
import projects from "@/data/projects";
import experience from "@/data/experience";
import ProjectCard from "@/components/ProjectCard";
import InfiniteScroll from "@/components/InfiniteScroll";

export default function HomePage() {
  return (
    <>
      {/* Home Section */}
      <section className="min-h-screen flex items-center py-20 -mt-14">
        <div className="flex flex-col items-start gap-6 sm:gap-8 w-full">
          <div className="space-y-4 sm:space-y-6 text-left w-full">
            <div className="space-y-2">
              <p className="text-base sm:text-lg md:text-xl text-gray-600">Hi! My name is</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">David Afonso Shepherd</h1>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 leading-relaxed">
              Full-Stack Software Engineer · Machine Learning Engineer
            </h2>
            <div className="text-sm sm:text-base md:text-lg text-gray-700 flex flex-col gap-3">
              <span className="font-medium">Proficient in</span>
              <div className="w-full overflow-hidden">
                <InfiniteScroll />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20">
        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-2xl sm:text-3xl font-bold">About Me</h1>
          <div className="flex flex-col md:grid md:grid-cols-[200px,1fr] gap-6 sm:gap-8 items-start">
            <Image 
              src="/avatar.jpg" 
              alt="David Afonso Shepherd" 
              width={200} 
              height={200} 
              className="rounded-2xl w-full max-w-[200px] h-auto mx-auto md:mx-0" 
            />
            <div className="space-y-4 text-sm sm:text-base">
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
      <section id="experience" className="min-h-screen py-12 sm:py-16 md:py-20">
        <div className="space-y-6 sm:space-y-8">
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
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-12 sm:py-16 md:py-20">
        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-2xl sm:text-3xl font-bold">Selected Projects</h1>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-12 sm:py-16 md:py-20">
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold">Get in touch</h1>
          <div className="space-y-3 text-sm sm:text-base">
            <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="font-medium">Email:</span> 
              <a className="underline hover:text-blue-600 break-all" href="mailto:you@domain.com">you@domain.com</a>
            </p>
            <p className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-medium">Links:</span> 
              <span className="flex flex-wrap gap-2">
                <a className="underline hover:text-blue-600" href="https://github.com/your-handle">GitHub</a>
                <span className="hidden sm:inline">·</span>
                <a className="underline hover:text-blue-600" href="https://www.linkedin.com/in/your-handle">LinkedIn</a>
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
