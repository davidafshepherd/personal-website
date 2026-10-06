import Image from "next/image";

import type { Experience } from "@/data/experiences";


export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="relative p-4 sm:p-5 md:p-6 rounded-2xl border-2 border-gray-200 bg-white overflow-hidden dark:border-[#282828] dark:bg-[#181818]">
      <div className="absolute top-0 left-0 w-1 h-full bg-(--accent)" />
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6">
        {/* Content */}
        <div className="flex-1 flex flex-col justify-between min-w-0">
          <div>
            {/* Header */}
            <div className="mb-3 grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-2">
              <h3 className="font-bold text-base sm:text-lg leading-none text-gray-900 min-w-0 dark:text-[#EAEAEA]">
                {experience.title}
              </h3>

              <span className="text-xs sm:text-sm leading-none text-gray-500 whitespace-nowrap px-3 py-2 rounded-full border bg-(--length-chip-bg) border-(--length-chip-border) dark:text-gray-400">
                {experience.length}
              </span>

              <div className="col-span-2 flex items-center gap-3">
                <Image
                  src={`/logos${experience.logo}`}
                  alt={`${experience.org} logo`}
                  width={40}
                  height={40}
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded-lg shrink-0"
                />

                <div className="min-w-0 flex-1">
                  {experience.link ? (
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-(--accent) font-medium hover:underline wrap-break-word"
                    >
                      {experience.org}
                    </a>
                  ) : (
                    <p className="text-sm sm:text-base text-(--accent) font-medium wrap-break-word">
                      {experience.org}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Highlights */}
            <ul className="space-y-2 leading-[1.6]">
              {experience.highlights.map((h, i) => (
                <li key={i} className="flex gap-2 items-start text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  <span className="text-(--accent) shrink-0">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          {experience.skills?.length && (
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {experience.skills.map((skill, i) => (
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

        {/* Image */}
        {experience.image && (
          <div className="group/image shrink-0 flex items-center justify-center cursor-pointer">
            <Image
              src={`/experiences${experience.image}`}
              alt={`${experience.title} at ${experience.org}`}
              width={320}
              height={240}
              className="w-full max-w-120 sm:w-48 md:w-56 lg:w-60 aspect-4/3 object-cover rounded-xl group-hover/image:invisible"
            />

            <div className="fixed inset-0 z-50 hidden group-hover/image:flex items-center justify-center pointer-events-none">
              <Image
                src={`/experiences${experience.image}`}
                alt={`${experience.title} at ${experience.org}`}
                width={1280}
                height={960}
                className="max-w-[75vw] max-h-[75vh] w-auto h-auto object-contain rounded-xl border-3 border-gray-200 dark:border-[#383838]"              
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
