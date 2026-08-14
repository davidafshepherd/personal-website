import Image from "next/image";
import SkillPill from "@/components/SkillPill";
import LengthChip from "@/components/LengthChip";
import { CARD_CLASSNAME, CARD_ACCENT_BAR_CLASSNAME } from "@/components/cardStyles";

type Project = {
  slug: string;
  name: string;
  category: string;
  length: string;
  description: string;
  image?: string;
  stack: string[];
  link: string;
};

function getGithubOpenGraphImage(link?: string): string | undefined {
  if (!link) return undefined;
  try {
    const url = new URL(link);
    const host = url.hostname.toLowerCase();
    if (!(host === "github.com" || host.endsWith(".github.com"))) return undefined;
    const [owner, repo] = url.pathname.replace(/^\/+/, "").split("/");
    if (!owner || !repo) return undefined;
    return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
  } catch {
    return undefined;
  }
}

export default function ProjectCard({ project }: { project: Project }) {
  const isHttpLink = !!project.link && /^https?:\/\//.test(project.link);
  const providedImage = project.image && project.image.trim() !== "" ? `/projects${project.image}` : undefined;
  const githubOgImage = providedImage ? undefined : getGithubOpenGraphImage(project.link);
  const imageSrc = providedImage ?? githubOgImage;
  const hasImage = Boolean(imageSrc);

  return (
    <article className={`${CARD_CLASSNAME} h-full`}>
      <div className={CARD_ACCENT_BAR_CLASSNAME}></div>
      <div className="p-4 sm:p-5 md:p-6 h-full">
        <div className="flex flex-col h-full">
          {/* Content */}
          <div className="flex flex-col min-w-0 space-y-2 sm:space-y-3">
            <div className="flex justify-end">
              <LengthChip>{project.length}</LengthChip>
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg leading-tight text-gray-900 min-w-0 dark:text-[#EAEAEA]">
                {isHttpLink ? (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--accent)] transition-colors"
                  >
                    {project.name}
                  </a>
                ) : (
                  <span>{project.name}</span>
                )}
              </h3>
            </div>
            
            {/* Description */}
            <div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-[1.6] text-left">
                {project.description.split(/(##.*?##|\*\*.*?\*\*)/).map((part, i) => {
                  if (part.startsWith('##') && part.endsWith('##')) {
                    return <span key={i} className="text-black dark:text-white font-bold">{part.slice(2, -2)}</span>;
                  }
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <span key={i} className="text-black dark:text-white font-bold">{part.slice(2, -2)}</span>;
                  }
                  return part;
                })}
              </p>
            </div>
          </div>

          {/* Center region for image (always present to push skills to bottom) */}
          <div className="flex-1 flex items-center justify-center mt-3 sm:mt-4 mb-3 sm:mb-4 min-h-[160px] sm:min-h-[180px]">
            {hasImage && (
              isHttpLink ? (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-3/4 aspect-[16/9] overflow-hidden rounded-xl"
                >
                  <Image
                    src={imageSrc as string}
                    alt={`${project.name} project`}
                    fill
                    sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover hover:brightness-50 hover:scale-105 transition-all duration-300"
                  />
                </a>
              ) : (
                <div className="relative w-3/4 aspect-[16/9] overflow-hidden rounded-xl">
                  <Image
                    src={imageSrc as string}
                    alt={`${project.name} project`}
                    fill
                    sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              )
            )}
          </div>

          {/* Skill Cards - Only show if skills exist */}
          {project.stack.length > 0 && (
            <div className={`flex flex-wrap justify-center gap-2 ${hasImage ? '' : 'mt-3 sm:mt-4'}`}>
              {project.stack.map((skill, i) => (
                <SkillPill key={i} skill={skill} />
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
