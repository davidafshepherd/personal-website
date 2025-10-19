import Image from "next/image";

export default function HomePage() {
  return (
    <section className="grid gap-8 md:grid-cols-[160px,1fr] items-start">
      <Image src="/avatar.png" alt="David Afonso Shepherd" width={160} height={160} className="rounded-2xl" />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{`Hi, I'm David — 4th-year MEng Computer Science`}</h1>
        <p>
          {`I build ML/RL systems and polished frontends. President of AISoc (2024/25). Recent work includes `}
          <strong>multi-agent wildfire suppression (RL)</strong>
          {`, `}
          <strong>GTZAN music genre classification</strong>
          {` and a `}
          <strong>Spotify Engineering internship</strong>
          {`.`}
</p>
        <p className="text-gray-600">
          {`I care about practical impact, strong engineering, and clear communication.
          Below you'll find selected projects and experience.`} 
        </p>
        <div className="flex gap-3 text-sm">
          <a className="underline" href="/projects">Projects</a>
          <a className="underline" href="/experience">Experience</a>
          <a className="underline" href="/contact">Contact</a>
        </div>
      </div>
    </section>
  );
}
