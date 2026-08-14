export default function SkillPill({ skill }: { skill: string }) {
  return (
    <span className="px-3 py-1 text-xs rounded-full border transition-colors cursor-default bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300 dark:bg-[#1db9541a] dark:text-[#1DB954] dark:border-[#1db95433] dark:hover:bg-[#1db9544d] dark:hover:border-[#1db95480]">
      {skill}
    </span>
  );
}
