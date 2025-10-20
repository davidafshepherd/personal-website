export default function ContactPage() {
  return (
    <section className="py-8 sm:py-12 space-y-4 sm:space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold">Get in touch</h1>
      <div className="space-y-3 text-sm sm:text-base">
        <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <span className="font-medium">Email:</span> 
          <a className="underline hover:text-blue-600 break-all" href="mailto:you@domain.com">you@domain.com</a>
        </p>
        <p className="flex flex-col sm:flex-row sm:items-center gap-2">
          <span className="font-medium">Links:</span> 
          <span className="flex flex-wrap gap-2">
            <a className="underline hover:text-blue-600" href="https://github.com/your-handle">GitHub</a>
            <span className="hidden sm:inline">·</span>
            <a className="underline hover:text-blue-600" href="https://www.linkedin.com/in/your-handle">LinkedIn</a>
          </span>
        </p>
      </div>
      {/* Optional: formspree or a Next.js API route for a contact form */}
    </section>
  );
}
