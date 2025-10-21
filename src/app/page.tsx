import Image from "next/image";
import projects from "@/data/projects";
import experience from "@/data/experience";
import ProjectCard from "@/components/ProjectCard";
import InfiniteScroll from "@/components/InfiniteScroll";
import ExperienceCard from "@/components/ExperienceCard";

export default function HomePage() {
  return (
    <>
      {/* Home Section */}
      <section className="h-[calc(100vh-3.5rem)] flex items-center justify-center -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20">
        <div className="flex flex-col items-start gap-4 sm:gap-6 md:gap-8 w-full">
          <div className="space-y-4 sm:space-y-6 text-left w-full">
          <div className="space-y-1">
              <p className="text-base sm:text-lg md:text-xl text-gray-600">Hi! My name is</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">David Afonso Shepherd</h1>
          </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 leading-relaxed">
              Full-Stack Software Engineer · Machine Learning Engineer
            </h2>
            <div className="text-sm sm:text-base md:text-lg text-gray-700 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <span className="font-medium whitespace-nowrap">Proficient in</span>
              <div className="w-full sm:max-w-md md:max-w-lg overflow-hidden">
              <InfiniteScroll />
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-12 sm:py-16 md:py-20 flex items-center">
        <div className="w-full space-y-6 sm:space-y-8">
          {/* Title */}
          <div className="flex items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">1. About Me</h1>
            <div className="h-0.5 bg-gradient-to-r from-blue-600 to-transparent flex-1"></div>
          </div>

          {/* Content with text and image */}
          <div className="flex flex-row gap-4 sm:gap-6 md:gap-8 items-start">
            {/* Left side - Text box */}
            <div className="flex-1">
              <div className="border border-gray-200 rounded-2xl p-4 sm:p-6 md:p-8 bg-gray-50 space-y-4 text-sm sm:text-base text-justify">
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
            <div className="flex-shrink-0">
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
            <div className="flex gap-2 sm:gap-4">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/david-afonso-shepherd-986b10295/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 border border-gray-200 rounded-xl px-3 sm:px-4 py-2 sm:py-3 bg-white hover:bg-gray-50 hover:border-blue-600 transition-all group"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-xs sm:text-sm font-medium group-hover:text-blue-600 transition-colors">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/davidafshepherd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 border border-gray-200 rounded-xl px-3 sm:px-4 py-2 sm:py-3 bg-white hover:bg-gray-50 hover:border-gray-900 transition-all group"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
                <span className="text-xs sm:text-sm font-medium group-hover:text-gray-900 transition-colors">GitHub</span>
              </a>
            </div>
            <div className="h-0.5 bg-gradient-to-l from-blue-600 to-transparent flex-1"></div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-12 sm:py-16 md:py-20 flex items-center">
        <div className="w-full space-y-8 sm:space-y-10">
          {/* Title */}
          <div className="flex items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">2. Experience</h1>
            <div className="h-0.5 bg-gradient-to-r from-blue-600 to-transparent flex-1"></div>
          </div>

          {/* Internships Subsection */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600">Internships</h2>
            <ul className="space-y-4 sm:space-y-6">
              {experience.filter(role => role.category === 'internship').map((role) => (
                <ExperienceCard key={role.title + role.org} role={role} />
                        ))}
                      </ul>
                    </div>
                    
          {/* University Ventures Subsection */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600">University Ventures</h2>
            <ul className="space-y-4 sm:space-y-6">
              {experience.filter(role => role.category === 'university_ventures').map((role) => (
                <ExperienceCard key={role.title + role.org} role={role} />
              ))}
            </ul>
          </div>

          {/* Extra-curriculars Subsection */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600">Extracurricular Activities</h2>
            <ul className="space-y-4 sm:space-y-6">
              {experience.filter(role => role.category === 'extracurricular').map((role) => (
                <ExperienceCard key={role.title + role.org} role={role} />
              ))}
            </ul>
          </div>

          {/* Volunteering Subsection */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600">Volunteering</h2>
            <ul className="space-y-4 sm:space-y-6">
              {experience.filter(role => role.category === 'volunteering').map((role) => (
                <ExperienceCard key={role.title + role.org} role={role} />
              ))}
            </ul>
            {experience.filter(role => role.category === 'volunteering').length === 0 && (
              <p className="text-gray-500 text-sm italic">No volunteering experience yet.</p>
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-12 sm:py-16 md:py-20 flex items-center">
        <div className="w-full space-y-6 sm:space-y-8">
          {/* Title */}
          <div className="flex items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">3. Projects</h1>
            <div className="h-0.5 bg-gradient-to-r from-blue-600 to-transparent flex-1"></div>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
