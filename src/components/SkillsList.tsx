import skills from "@/data/skills";


export default function SkillsList() {
  const doubledSkills = [...skills, ...skills];

  return (
    <div className="text-sm sm:text-base md:text-lg text-gray-700 flex items-center gap-3 sm:gap-4 dark:text-gray-300">
      {/* Label */}
      <span className="font-medium whitespace-nowrap">Proficient in</span>

      {/* Skills */}
      <div className="flex-1 min-w-0 overflow-hidden sm:flex-none sm:max-w-md md:max-w-lg">
        <div className="flex animate-scroll whitespace-nowrap">
          {doubledSkills.map((skill, i) => (
            <span key={i} className="inline-flex items-center opacity-80">
              {skill}
              <span className="mx-1 sm:mx-2">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
