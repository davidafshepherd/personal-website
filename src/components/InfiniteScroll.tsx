"use client";

export default function InfiniteScroll() {
  const items = [
    "Python",
    "Java",
    "C#",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Docker",
    "AWS",
    "SQL",
    "Haskell",
    "Scikit-Learn",
    "PyTorch",
    "Tensorflow",
    "Keras",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "LaTeX",
    "Data Visualisation",
    "Prompt Engineering",
    "Linux",
    "Git",
    "UML",
  ];

  return (
    <div className="overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-block text-lg opacity-80 whitespace-nowrap">
            {item}
            <span className="mx-1">·</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
