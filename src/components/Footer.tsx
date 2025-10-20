export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-12 sm:mt-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 text-xs sm:text-sm text-gray-500">
          <span>© {new Date().getFullYear()} David Afonso Shepherd</span>
          <span className="hidden sm:inline mx-2">·</span>
          <span>Built with Next.js & Tailwind</span>
          <span className="hidden sm:inline mx-2">·</span>
          <a className="underline hover:text-blue-600" href="https://github.com/your-github">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
