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
    <div className="overflow-hidden flex items-center">
      <div className="flex items-center animate-scroll whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center text-sm sm:text-base md:text-lg opacity-80 whitespace-nowrap">
            {item}
            <span className="mx-1 sm:mx-2">·</span>
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
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
