import Image from "next/image";

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
  const providedImage = project.image && project.image.trim() !== "" ? project.image : undefined;
  const githubOgImage = providedImage ? undefined : getGithubOpenGraphImage(project.link);
  const imageSrc = providedImage ?? githubOgImage;
  const hasImage = Boolean(imageSrc);

  return (
    <article className="group relative h-full rounded-2xl border-2 border-gray-200 bg-white hover:border-[var(--accent)] hover:shadow-lg transition-colors duration-300 overflow-hidden dark:border-[#282828] dark:bg-[#181818] dark:hover:border-[#1DB954]">
      <div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent)]"></div>
      <div className="p-4 sm:p-5 md:p-6 h-full">
        <div className="flex flex-col h-full">
          {/* Content */}
          <div className="flex flex-col min-w-0 space-y-2 sm:space-y-3">
            <div className="flex justify-end">
              <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap px-3 py-1 rounded-full border bg-[var(--length-chip-bg)] border-[var(--length-chip-border)] dark:text-gray-400">{project.length}</span>
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
                    return <span key={i} className="text-black dark:text-black font-bold">{part.slice(2, -2)}</span>;
                  }
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <span key={i} className="text-black dark:text-black font-bold">{part.slice(2, -2)}</span>;
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
                  className="block w-full"
                >
                  <Image
                    src={imageSrc as string}
                    alt={`${project.name} project`}
                    width={320}
                    height={180}
                    className="w-3/4 aspect-[16/9] object-cover rounded-xl hover:brightness-50 hover:scale-102 transition-all duration-300"
                  />
                </a>
              ) : (
                <Image
                  src={imageSrc as string}
                  alt={`${project.name} project`}
                  width={320}
                  height={180}
                  className="w-3/4 aspect-[16/9] object-cover rounded-xl"
                />
              )
            )}
          </div>

          {/* Skill Cards - Only show if skills exist */}
          {project.stack.length > 0 && (
            <div className={`flex flex-wrap justify-center gap-2 ${hasImage ? '' : 'mt-3 sm:mt-4'}`}>
              {project.stack.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full border transition-colors cursor-default bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300 dark:bg-[#1db9541a] dark:text-[#1DB954] dark:border-[#1db95433] dark:hover:bg-[#1db9544d] dark:hover:border-[#1db95480]"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
