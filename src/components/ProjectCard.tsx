import Image from "next/image";

import type { Project } from "@/data/projects";


// Get the Open Graph image for a GitHub repository.
function getGithubOpenGraphImage(link?: string): string | undefined {
  if (!link) return undefined;

  try {
    const url = new URL(link);
    if (url.hostname !== "github.com") return undefined;

    const [, owner, repo] = url.pathname.split("/");
    if (!owner || !repo) return undefined;

    return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
  } catch {
    return undefined;
  }
}


export default function ProjectCard({ project }: { project: Project }) {
  // Resolve the project image.
  const isHttpLink = !!project.link && /^https?:\/\//.test(project.link);
  const providedImage = project.image?.trim() ? `/projects${project.image}` : undefined;
  const imageSrc = providedImage ?? getGithubOpenGraphImage(project.link);

  return (
    <article className="relative rounded-2xl border-2 border-gray-200 bg-white overflow-hidden dark:border-[#282828] dark:bg-[#181818] h-full">
      <div className="absolute top-0 left-0 w-1 h-full bg-(--accent)" />
      <div className="p-4 sm:p-5 md:p-6 h-full flex flex-col">
        {/* Content */}
        <div className="flex flex-col min-w-0 space-y-2 sm:space-y-4">
          {/* Header */}
          <div className="grid grid-cols-[1fr_auto] items-center gap-3">
            <h3 className="font-bold text-base sm:text-lg leading-none text-gray-900 min-w-0 dark:text-[#EAEAEA]">
              {isHttpLink ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-(--accent) transition-colors"
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>

            <span className="text-xs sm:text-sm leading-none text-gray-500 whitespace-nowrap px-3 py-2 rounded-full border bg-(--length-chip-bg) border-(--length-chip-border) dark:text-gray-400">
              {project.length}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-[1.6]">
            {project.description.split(/(##.*?##|\*\*.*?\*\*)/).map((part, i) => {
              const isBold = 
                (part.startsWith("##") && part.endsWith("##")) || 
                (part.startsWith("**") && part.endsWith("**"));

                if (isBold) {
                  return (
                    <span key={i} className="text-black dark:text-white font-bold">{part.slice(2, -2)}</span>
                  );
                }

                return part;
              })}
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 flex items-center justify-center mt-3 sm:mt-4 mb-3 sm:mb-4 min-h-40 sm:min-h-45">
          {imageSrc &&
            (isHttpLink ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-3/4 aspect-video overflow-hidden rounded-xl"
              >
                <Image
                  src={imageSrc}
                  alt={`${project.name} project`}
                  fill
                  sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:brightness-50 hover:scale-105 transition-all duration-300"
                />
              </a>
            ) : (
              <div className="relative w-3/4 aspect-video overflow-hidden rounded-xl">
                <Image
                  src={imageSrc}
                  alt={`${project.name} project`}
                  fill
                  sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
        </div>

        {/* Skills */}
        {project.stack.length > 0 && (
          <div className={`flex flex-wrap justify-center gap-2 ${imageSrc ? "" : "mt-3 sm:mt-4"}`}>
            {project.stack.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full border cursor-default bg-(--skills-chip-bg) text-(--skills-chip-text) border-(--skills-chip-border)"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
