export default function ContactPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Get in touch</h1>
      <p>Email: <a className="underline" href="mailto:you@domain.com">you@domain.com</a></p>
      <p>Links: <a className="underline" href="https://github.com/your-handle">GitHub</a> · <a className="underline" href="https://www.linkedin.com/in/your-handle">LinkedIn</a></p>
      {/* Optional: formspree or a Next.js API route for a contact form */}
    </section>
  );
}
