import Image from "next/image";
import projects from "@/data/projects";
import experience from "@/data/experience";
import ProjectCard from "@/components/ProjectCard";
import InfiniteScroll from "@/components/InfiniteScroll";
import ExperienceCard from "@/components/ExperienceCard";
import { SOCIAL_LINKS } from "@/components/Social";

export default function HomePage() {
  return (
    <>
      {/* Home Section */}
      <section className="h-[calc(100vh-3.5rem)] flex items-center justify-center -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20">
        <div className="flex flex-col items-start gap-4 sm:gap-6 md:gap-8 w-full">
          <div className="space-y-4 sm:space-y-6 text-left w-full">
          <div className="space-y-1">
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">Hi! My name is</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">David Afonso Shepherd</h1>
          </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 leading-tight dark:text-green-500">
              Full-Stack Software Engineer · Machine Learning Engineer
            </h2>
            <div className="text-sm sm:text-base md:text-lg text-gray-700 flex flex-row items-center gap-3 sm:gap-4 dark:text-gray-300">
              <span className="font-medium whitespace-nowrap">Proficient in</span>
              <div className="flex-1 min-w-0 overflow-hidden sm:flex-none sm:max-w-md md:max-w-lg max-[380px]:scale-90">
              <InfiniteScroll />
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-12 sm:py-16 md:py-20 flex items-center scroll-mt-6 sm:scroll-mt-0">
        <div className="w-full space-y-6 sm:space-y-8">
          {/* Title */}
          <div className="flex items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">1. About Me</h1>
            <div className="h-0.5 bg-gradient-to-r from-[var(--accent)] to-transparent flex-1"></div>
          </div>

          {/* Content with text and image */}
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center md:items-stretch">
            {/* Left side - Text box */}
            <div className="flex-1">
              <div className="border border-gray-200 rounded-2xl p-3 sm:p-5 md:p-8 bg-gray-50 space-y-3 sm:space-y-4 text-sm sm:text-base text-left dark:border-[#282828] dark:bg-[#181818] dark:text-gray-300">
                <p>
                  Welcome to my website! My name is <span className="font-semibold">David Afonso Shepherd</span> and I&apos;m a <span className="font-semibold">final-year MEng Computer Science</span> student at the <span className="font-semibold">University of Southampton</span>.
                </p>
                <p>
                  I&apos;ve previously interned with <span className="font-semibold">JPMorgan Chase & Co</span> and <span className="font-semibold">Spotify</span>, and served as <span className="font-semibold">President</span> of the <span className="font-semibold">Artificial Intelligence society</span> at the University of Southampton. I was also part of <span className="font-semibold">FLARE-X</span> - a joint venture between the University of Southampton, the University of Texas at Austin and the University of Edinburgh - competing in the <span className="font-semibold">$11 million XPRIZE Wildfire Competition</span>.
                </p>
                <p>
                  Currently, I&apos;m working with a team of engineers to develop <span className="font-semibold">SmartCart v3</span> - an augmented meal cart designed to help prevent malnutrition in hospital patients by monitoring their food intake - for the <span className="font-semibold">University Hospital Southampton NHS FT</span>.
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto self-center md:self-auto mt-4 md:mt-0">
              <Image 
                src="/avatar.jpg" 
                alt="David Afonso Shepherd" 
                width={240} 
                height={240} 
                className="rounded-2xl w-24 sm:w-32 md:w-40 lg:w-[240px] h-auto" 
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex gap-2 sm:gap-4 flex-wrap">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? "_blank" : undefined}
                  rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-2 sm:gap-3 border border-gray-200 rounded-xl px-3 sm:px-4 py-2 sm:py-3 bg-white hover:bg-gray-50 transition-colors group dark:border-[#282828] dark:bg-[#181818] dark:hover:bg-[#202020] hover:border-blue-600 dark:hover:border-[#1DB954]`}
                >
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-[var(--accent)] group-hover:text-blue-600 dark:group-hover:text-[#1DB954]`} />
                  <span className={`text-xs sm:text-sm font-medium transition-colors group-hover:text-blue-600 dark:group-hover:text-[#1DB954]`}>{label}</span>
                </a>
              ))}
            </div>
            <div className="h-0.5 bg-gradient-to-l from-[var(--accent)] to-transparent flex-1 min-w-[32px]"></div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-12 sm:py-16 md:py-20 flex items-center scroll-mt-6 sm:scroll-mt-0">
        <div className="w-full space-y-8 sm:space-y-10">
          {/* Title */}
          <div className="flex items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">2. Experience</h1>
            <div className="h-0.5 bg-gradient-to-r from-[var(--accent)] to-transparent flex-1"></div>
          </div>

          {[
            { key: 'internship', title: 'Internships' },
            { key: 'university_ventures', title: 'University Initiatives' },
            { key: 'extracurricular', title: 'Extracurricular Activities' },
            { key: 'volunteering', title: 'Volunteering' },
          ].map(({ key, title }, i) => {
            const roles = experience.filter(role => role.category === key);
            return (
              <div key={key} className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-[var(--accent)]">{`2.${i + 1} ${title}`}</h2>
            <ul className="space-y-4 sm:space-y-6">
                  {roles.map(role => (
                <ExperienceCard key={role.title + role.org} role={role} />
                        ))}
                      </ul>
                {key === 'volunteering' && roles.length === 0 && (
              <p className="text-gray-500 text-sm italic dark:text-gray-400">No volunteering experience yet.</p>
            )}
          </div>
            );
          })}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-12 sm:py-16 md:py-20 flex items-center scroll-mt-6 sm:scroll-mt-0">
        <div className="w-full space-y-8 sm:space-y-10">
          {/* Title */}
          <div className="flex items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">3. Projects</h1>
            <div className="h-0.5 bg-gradient-to-r from-[var(--accent)] to-transparent flex-1"></div>
          </div>

          {[
            { key: 'recent', title: 'Recent Projects' },
            { key: 'python-ml', title: 'Python/ML' },
            { key: 'java', title: 'Java' },
            { key: 'unity-csharp', title: 'Unity/C#' },
          ].map(({ key, title }, i) => {
            const categoryProjects = projects.filter(project => project.category === key);
            return (
              <div key={key} className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-[var(--accent)]">{`3.${i + 1} ${title}`}</h2>
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  {categoryProjects.map(project => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
                {categoryProjects.length === 0 && (
                  <p className="text-gray-500 text-sm italic dark:text-gray-400">No projects in this category yet.</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Congratulations Message */}
      <section className="py-4">
        <div className="text-center">
          <p className="text-base text-gray-600 dark:text-gray-300">
            Congratulations! You&apos;ve made it to the end :)
          </p>
        </div>
      </section>
    </>
  );
}
