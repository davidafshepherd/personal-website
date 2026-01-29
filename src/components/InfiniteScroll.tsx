"use client";

export default function InfiniteScroll() {
  const items = [
    "Python",
    "Java",
    "C#",
    "Haskell",
    "SQL",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "MongoDB",
    "HTML5",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Flask",
    "FastAPI",
    "REST API",
    "JUnit",
    "PyTest",
    "Jest",
    "Git",
    "CI/CD",
    "Docker",
    "Linux",
    "AWS",
    "GCP",
    "Jira",
    "UML",
    "LaTeX",
    "NumPy",
    "SciPy",
    "Pandas",
    "Scikit-Learn",
    "PyTorch",
    "TensorFlow",
    "Keras",
    "Matplotlib",
    "Seaborn",
    "Data Visualisation",
    "Prompt Engineering",
    "LLM Evaluation",
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
