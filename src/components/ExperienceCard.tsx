import Image from "next/image";
import type { ExperienceRole } from "@/data/experience";

type ExperienceCardProps = {
  role: ExperienceRole;
};

export default function ExperienceCard({ role }: ExperienceCardProps) {
  return (
    <li className="group relative rounded-2xl border-2 border-gray-200 bg-white hover:border-blue-500 hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-blue-600"></div>
      <div className="p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          {/* Left: Content */}
          <div className="flex-1 flex flex-col justify-between min-w-0">
            <div>
              <div className="mb-3 grid grid-cols-[1fr_auto] items-start gap-x-3 gap-y-2">
                <h3 className="font-bold text-base sm:text-lg text-gray-900 min-w-0">{role.title}</h3>
                <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap bg-gray-100 px-3 py-1 rounded-full">{role.length}</span>
                <div className="col-span-2 flex items-center gap-3">
                  <Image
                    src={role.logo}
                    alt={`${role.org} logo`}
                    width={40}
                    height={40}
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded-lg flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    {role.links && role.links.length > 0 ? (
                      <a
                        href={role.links[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-blue-600 font-medium hover:underline break-words"
                      >
                        {role.org}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base text-blue-600 font-medium break-words">{role.org}</p>
                    )}
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {role.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 text-xs sm:text-sm text-gray-600">
                    <span className="text-blue-600 flex-shrink-0">•</span>
                    <span className="text-justify">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills at bottom of left column */}
            {role.skills && role.skills.length > 0 && (
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {role.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-blue-50 text-blue-700 rounded-full border border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Right: Personal Image */}
          {role.image && (
            <div className="flex-shrink-0 flex items-center">
              <Image
                src={role.image}
                alt={`${role.title} at ${role.org}`}
                width={320}
                height={240}
                className="w-full sm:w-56 md:w-64 lg:w-72 aspect-[4/3] object-cover rounded-xl"
              />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}


