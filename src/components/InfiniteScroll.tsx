"use client";

export default function InfiniteScroll() {
  const items = [
    "Python",
    "Java",
    "C#",
    "Haskell",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Scikit-Learn",
    "PyTorch",
    "TensorFlow",
    "Keras",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Docker",
    "AWS",
    "Linux",
    "Git",
    "SQL",
    "UML",
    "Data Visualisation",
    "Prompt Engineering",
    "LaTeX",
  ];

  return (
    <div className="overflow-hidden flex items-center">
      <div className="flex items-center animate-scroll whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center text-sm sm:text-base md:text-lg opacity-80 whitespace-nowrap">
            {item}
            <span className="mx-1 sm:mx-2">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
