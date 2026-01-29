export type ExperienceRole = {
  title: string;
  org: string;
  length: string;
  category: string;
  logo: string;
  image?: string;
  highlights: string[];
  skills?: string[];
  link?: string;
};

const experience: ExperienceRole[] = [
  {
    title: "Engineering Intern",
    org: "Spotify",
    length: "June 2025 - August 2025",
    category: "internship",
    logo: "/spotify-logo.png",
    image: "/experience-spotify.jpg",
    highlights: [
      "Part of the Learning Mountain Bet, a cross-functional team working on developing courses for Spotify.",
      "Developed 3 prototypes using Next.js, GCS/BigQuery & REST APIs to explore different product use cases.",
      "Built, containerized and deployed an MVP using Next.js, Docker & Backstage for 10+ user research sessions.",
      "Performed prompt engineering and LLM evaluation for another prototype, improving its performance by 30%.",
      "Reviewed code & approved 20+ PRs for the team, which consists entirely of senior, staff and principal level.",
    ],
    skills: ["CI/CD", "Git", "Docker", "Next.js", "REST APIs", "GCP", "Prompt Engineering"],
    link: "https://courses.spotify.com/home",
  },
  {
    title: "Spring Intern",
    org: "JPMorgan Chase & Co.",
    length: "April 2024 - April 2024",
    category: "internship",
    logo: "/jpmc-logo.png",
    image: "/experience-jpmc.jpg",
    highlights: [
      "Worked with a team of 3 interns to promote and increase community involvement in fundraising for Dorset's disability charity 'Diverse Abilities'.",
      "Developed 'Hero's Leaderboard', a web app that promotes charity fundraising through scoreboards and rewards using Flask, HTML5 and CSS.",
    ],
    skills: ["Agile Methodologies", "Git", "Flask", "Python", "HTML5", "CSS"],
    link: "https://www.jpmorganchase.com",
  },
  {
    title: "Software Engineer",
    org: "University Hospital Southampton NHS Foundation Trust",
    length: "October 2025 - January 2026",
    category: "university_ventures",
    logo: "/nhs-logo.png",
    image: "/experience-nhs.jpeg",
    highlights: [
      "Worked with a team of 4 engineers to develop SmartCart v3, an augmented meal cart for in-hospital use.",
      "SmartCart v3 aims to help prevent malnutrition in hospital patients by monitoring their food intake.",
      "Implemented a pipeline for automated food detection and segmentation using Python, OWLv2, SAHI & SAM2.",
      "Built a web dashboard that generates patient nutrient intake reports using Next.js, FastAPI and SQLite.",
      "Achieved a nutrient estimation MAPE of 29%, currently being trialled for potential nationwide NHS rollout.",
    ],
    skills: ["Git", "Next.js", "Python", "FastAPI", "SQLite", "OWLv2", "SAHI", "SAM 2"],
    link: "https://www.uhs.nhs.uk/",
  },
  {
    title: "Machine Learning Researcher",
    org: "XPRIZE Foundation",
    length: "October 2024 - April 2025",
    category: "university_ventures",
    logo: "/xprize-logo.png",
    highlights: [
      "Part of FLARE-X, 1 of the 15 semi-finalist autonomous teams, in the $11M international XPRIZE Wildfire competition.",
      "FLARE-X is a joint venture between the University of Southampton, the University of Texas at Austin and the University of Edinburgh.",
      "Trained a fixed-wing drone to deploy balls of fire extinguisher for optimal wildfire suppression using Python and Reinforcement Learning.",
    ],
    link: "https://www.xprize.org/prizes/wildfire",
  },
  {
    title: "President",
    org: "University of Southampton Artificial Intelligence Society",
    length: "May 2024 - May 2025",
    category: "extracurricular",
    logo: "/aisoc-logo.png",
    image: "/experience-aisoc-president.jpg",
    highlights: [
      "Led a committee of 8 and coordinated the society's divisions (Education, Projects, Partnerships, Marketing).",
      "Organised 20+ ML workshops, talks led by industry experts & other events for the society's 350+ members.",
      "Led fundraising from sponsors, such as IET, Siemens and Cirium, securing £3,000 in funding.",
      "Supervised 10+ student-led ML projects and organised 2 UK-wide AI Hackathons.",
    ],
    link: "https://www.susu.org/groups/artificial-intelligence-society",
  },
  {
    title: "Head of Education",
    org: "University of Southampton Artificial Intelligence Society",
    length: "May 2024 - September 2024",
    category: "extracurricular",
    logo: "/aisoc-logo.png",
    image: "/experience-aisoc-education.jpg",
    highlights: [
      "Led the Education Division, which is responsible for organising the society's bi-weekly ML workshops.",
      "Developed a beginner-friendly curriculum, by simplifying complex models into hands-on workshops.",
      "Covered Neural Networks, CNNs, RNNs, Reinforcement Learning, Natural Language Processing, Generative Adversarial Networks, Diffusion Models and Tree-Based Models.",
    ],
    link: "https://www.susu.org/groups/artificial-intelligence-society",
  },
  {
    title: "Secretary",
    org: "University of Southampton Artificial Intelligence Society",
    length: "May 2023 - May 2024",
    category: "extracurricular",
    logo: "/aisoc-logo.png",
    image: "/experience-aisoc-secretary.jpg",
    highlights: [
      "Managed communications, ensuring effective coordination between the committee, faculty and sponsors.",
      "Helped organise the society's workshops, talks & other events, assisting with the logistics & event planning.",
      "Oversaw meeting agendas, minutes and documentation across the society's 4 divisions.",
    ],
    link: "https://www.susu.org/groups/artificial-intelligence-society",
  },
  {
    title: "Course Representative",
    org: "University of Southampton Students' Union",
    length: "October 2024 - June 2025",
    category: "volunteering",
    logo: "/susu-logo.png",
    highlights: [
      "Gathered views and concerns from over 250 Computer Science students and presented these issues effectively to the department.",
      "Collected and analysed data on the 2024-25 modules in order to identify areas for enhancement, ensuring continuous improvement of the degree.",
    ],
    link: "https://www.susu.org",
  },
  {
    title: "Student Mentor",
    org: "Beaumont School",
    length: "September 2021 - May 2022",
    category: "volunteering",
    logo: "/beaumont-logo.png",
    highlights: [
      "Participated in a mentoring program, providing one-on-one support to a Year 10 student.",
      "Assisted with academic tasks, including homework and exam study, while improving the student's attendance and encouraging an open mindset.",
      "Supported the development of essential skills, such as motivation and confidence, contributing to the student's overall well-being and mental health.",
    ],
    link: "https://www.beaumontschool.com",
  }
];
export default experience;
