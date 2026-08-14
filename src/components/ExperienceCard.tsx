import Image from "next/image";
import type { ExperienceRole } from "@/data/experience";
import SkillPill from "@/components/SkillPill";
import LengthChip from "@/components/LengthChip";
import { CARD_CLASSNAME, CARD_ACCENT_BAR_CLASSNAME } from "@/components/cardStyles";

type ExperienceCardProps = {
  role: ExperienceRole;
};

export default function ExperienceCard({ role }: ExperienceCardProps) {
  return (
    <li className={CARD_CLASSNAME}>
      <div className={CARD_ACCENT_BAR_CLASSNAME}></div>
      <div className="p-4 sm:p-5 md:p-6">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6">
          {/* Left: Content */}
          <div className="flex-1 flex flex-col justify-between min-w-0">
            <div>
              <div className="mb-3 grid grid-cols-[1fr_auto] items-start gap-x-3 gap-y-2">
                <h3 className="font-bold text-base sm:text-lg leading-tight text-gray-900 min-w-0 dark:text-[#EAEAEA]">{role.title}</h3>
                <LengthChip>{role.length}</LengthChip>
                <div className="col-span-2 flex items-center gap-3">
                  <Image
                    src={`/logos${role.logo}`}
                    alt={`${role.org} logo`}
                    width={40}
                    height={40}
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded-lg flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    {role.link ? (
                      <a
                        href={role.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-[var(--accent)] font-medium hover:underline break-words"
                      >
                        {role.org}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base text-[var(--accent)] font-medium break-words">{role.org}</p>
                    )}
                  </div>
                </div>
              </div>
              <ul className="space-y-2 leading-[1.6]">
                {role.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 items-start text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    <span className="text-[var(--accent)] flex-shrink-0">•</span>
                    <span className="text-left leading-[1.6]">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills at bottom of left column */}
            {!!role.skills?.length && (
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {role.skills.map((skill, i) => (
                  <SkillPill key={i} skill={skill} />
                ))}
              </div>
            )}
          </div>

          {/* Right: Personal Image */}
          {role.image && (
            <div className="flex-shrink-0 flex items-center justify-center sm:justify-start">
              <Image
                src={`/experiences${role.image}`}
                alt={`${role.title} at ${role.org}`}
                width={320}
                height={240}
                className="w-full max-w-[480px] sm:w-48 md:w-56 lg:w-60 aspect-[4/3] object-cover rounded-xl"
              />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}


