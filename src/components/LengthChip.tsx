export default function LengthChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap px-3 py-1 rounded-full border bg-[var(--length-chip-bg)] border-[var(--length-chip-border)] dark:text-gray-400">
      {children}
    </span>
  );
}
