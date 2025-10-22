import Image from "next/image";

type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  length: string;
  highlights: string[];
  image: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative rounded-2xl border-2 border-gray-200 bg-white hover:border-[var(--accent)] hover:shadow-lg transition-colors duration-300 overflow-hidden dark:border-[#282828] dark:bg-[#181818]">
      <div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent)]"></div>
      <div className="p-4 sm:p-5 md:p-6">
        <div className="flex flex-col gap-4 sm:gap-5">
          {/* Content */}
          <div className="flex-1 flex flex-col min-w-0">
            <div className="mb-6 flex justify-end">
              <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap px-3 py-1 rounded-full border bg-[var(--length-chip-bg)] border-[var(--length-chip-border)] dark:text-gray-400">{project.length}</span>
            </div>
            <div className="mb-2">
              <h3 className="font-bold text-base sm:text-lg leading-tight text-gray-900 min-w-0 dark:text-[#EAEAEA]">{project.name}</h3>
            </div>
            
            {/* Description */}
            <div className="mb-4">
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-[1.6] text-left">
                {project.highlights.join(' ')}
              </p>
            </div>

            {/* Skill Cards */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full border transition-colors cursor-default bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300 dark:bg-[#1db9541a] dark:text-[#1DB954] dark:border-[#1db95433] dark:hover:bg-[#1db9544d] dark:hover:border-[#1db95480]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Project Image - Below content */}
          <div className="flex justify-center">
            <Image
              src={project.image}
              alt={`${project.name} project`}
              width={320}
              height={240}
              className="w-full aspect-[4/3] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
