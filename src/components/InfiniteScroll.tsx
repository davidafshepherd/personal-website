"use client";

export default function InfiniteScroll() {
  const items = [
    "Python",
    "SQL",
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
    "Git",
    "Docker",
    "AWS",
    "Linux",
    "UML",
    "LaTeX",
    "NumPy",
    "Pandas",
    "Scikit-Learn",
    "PyTorch",
    "TensorFlow",
    "Keras",
    "Matplotlib",
    "Seaborn",
    "Data Visualisation",
    "Prompt Engineering",
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
