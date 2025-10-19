export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} David Afonso Shepherd ·
        {" "}Built with Next.js & Tailwind · <a className="underline" href="https://github.com/your-github">GitHub</a>
      </div>
    </footer>
  );
}
