import Image from "next/image";

import ExperienceCard from "@/components/ExperienceCard";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import ProjectCard from "@/components/ProjectCard";
import SkillsList from "@/components/SkillsList";
import experiences from "@/data/experiences";
import projects from "@/data/projects";


// Social links.
const SOCIAL_LINKS = [
  { key: "linkedin", href: "https://www.linkedin.com/in/david-afonso-shepherd-986b10295/", label: "LinkedIn", Icon: LinkedInIcon },
  { key: "github", href: "https://github.com/davidafshepherd", label: "GitHub", Icon: GitHubIcon },
  { key: "email", href: "mailto:davidafonsoshepherd@gmail.com", label: "Email", Icon: MailIcon },
];

// Experience categories.
const EXPERIENCE_CATEGORIES = [
  { key: "internship", title: "Internships" },
  { key: "university_ventures", title: "University Initiatives" },
  { key: "extracurricular", title: "Extracurricular Activities" },
  { key: "volunteering", title: "Volunteering" },
];

// Project categories.
const PROJECT_CATEGORIES = [
  { key: "recent", title: "Recent Projects" },
  { key: "university", title: "University Projects" },
  { key: "web-mobile", title: "Web / Mobile Development" },
  { key: "java", title: "Java" },
  { key: "python-ml", title: "Python / Machine Learning" },
  { key: "unity-csharp", title: "Unity / C#" },
];


export default function HomePage() {
  return (
    <>
      {/* Home section */}
      <section id="home" className="h-[calc(100vh-3.5rem)] flex items-center -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20">
        <div className="space-y-4 sm:space-y-6 w-full">
          <div className="space-y-1">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">Hi! My name is</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">David Afonso Shepherd</h1>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 leading-tight dark:text-green-500">
            Software Engineer · Machine Learning Engineer
          </h2>
          <SkillsList />
        </div>
      </section>

      {/* About section */}
      <section id="about" className="min-h-screen py-12 sm:py-16 md:py-20 flex items-center scroll-mt-6 sm:scroll-mt-0">
        <div className="w-full space-y-6 sm:space-y-8">
          {/* Title */}
          <div className="flex items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">1. About Me</h1>
            <div className="h-0.5 bg-linear-to-r from-(--accent) to-transparent flex-1" />
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center md:items-stretch">
            {/* Text */}
            <div className="flex-1">
              <div className="border border-gray-200 rounded-2xl p-3 sm:p-5 md:p-8 bg-gray-50 space-y-3 sm:space-y-4 text-sm sm:text-base dark:border-[#282828] dark:bg-[#181818] dark:text-gray-300">
                <p>
                  Welcome to my website! My name is David Afonso Shepherd and I&apos;m a MEng Computer 
                  Science Graduate with First Class Honours from the University of Southampton.
                </p>
                <p>
                  I&apos;ve previously interned with JPMorganChase and Spotify, and served as President of the 
                  Artificial Intelligence society at the University of Southampton. I was also part of FLARE-X - a 
                  joint venture between the University of Southampton, the University of Texas at Austin and the 
                  University of Edinburgh - competing in the $11 million XPRIZE Wildfire Competition.
                </p>
                <p>
                  Recently, I worked with a team of engineers to develop SmartCart v3 - an augmented meal cart designed 
                  to help prevent malnutrition in hospital patients by monitoring their food intake - for the University 
                  Hospital Southampton NHS FT.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="hidden md:flex shrink-0 items-center justify-center self-center">
              <Image
                src="/avatar.jpg"
                alt="David Afonso Shepherd"
                width={1070}
                height={1427}
                priority
                className="rounded-2xl w-40 lg:w-60 h-auto"
              />
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex flex-wrap gap-2 sm:gap-4">
              {SOCIAL_LINKS.map(l => (
                <a
                  key={l.key}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 sm:gap-3 border border-gray-200 rounded-xl px-3 sm:px-4 py-2 sm:py-3 bg-white hover:bg-gray-50 transition-colors group dark:border-[#282828] dark:bg-[#181818] dark:hover:bg-[#202020] hover:border-blue-600 dark:hover:border-[#1DB954]"
                >
                  <l.Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-(--accent) dark:group-hover:text-[#1DB954]" />
                  <span className="text-xs sm:text-sm font-medium transition-colors group-hover:text-blue-600 dark:group-hover:text-[#1DB954]">
                    {l.label}
                  </span>
                </a>
              ))}
            </div>
            <div className="h-0.5 bg-linear-to-l from-(--accent) to-transparent flex-1 min-w-8" />
          </div>
        </div>
      </section>

      {/* Experience section */}
      <section id="experience" className="min-h-screen py-12 sm:py-16 md:py-20 flex items-center scroll-mt-6 sm:scroll-mt-0">
        <div className="w-full space-y-8 sm:space-y-10">
          {/* Title */}
          <div className="flex items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">2. Experience</h1>
            <div className="h-0.5 bg-linear-to-r from-(--accent) to-transparent flex-1" />
          </div>

          {/* Content */}
          {EXPERIENCE_CATEGORIES.map((c, i) => {
            const categoryExperiences = experiences.filter((experience) => experience.category === c.key);
            if (categoryExperiences.length === 0) return null;

            return (
              <div key={c.key} className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-(--accent)">{`2.${i + 1} ${c.title}`}</h2>
                <ul className="space-y-4 sm:space-y-6">
                  {categoryExperiences.map((experience) => (
                    <li key={experience.title + experience.org}>
                      <ExperienceCard experience={experience} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects section */}
      <section id="projects" className="min-h-screen py-12 sm:py-16 md:py-20 flex items-center scroll-mt-6 sm:scroll-mt-0">
        <div className="w-full space-y-8 sm:space-y-10">
          {/* Title */}
          <div className="flex items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">3. Projects</h1>
            <div className="h-0.5 bg-linear-to-r from-(--accent) to-transparent flex-1" />
          </div>

          {/* Content */}
          {PROJECT_CATEGORIES.map((c, i) => {
            const categoryProjects = projects.filter((project) => project.category === c.key);
            if (categoryProjects.length === 0) return null;

            return (
              <div key={c.key} className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-(--accent)">{`3.${i + 1} ${c.title}`}</h2>
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  {categoryProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Congratulations message */}
      <section className="py-4 text-center">
        <p className="text-gray-600 dark:text-gray-300">
          Congratulations! You&apos;ve made it to the end :)
        </p>
      </section>
    </>
  );
}
