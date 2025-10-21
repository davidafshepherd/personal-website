export type ExperienceRole = {
  title: string;
  org: string;
  length: string;
  category: string;
  logo: string;
  image?: string;
  highlights: string[];
  skills?: string[];
  links?: { label: string; url: string }[];
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
      "Part of the Learning Mountain Bet, a cross-functional team working on developing a new vertical (courses) for Spotify;",
      "The LMB consists entirely of senior, staff & principal level and is one of Spotify's most fast-paced & dynamic teams;",
      "Worked on a brand new feature aimed at enhancing the learning experience on Spotify;",
      "Collaborated across several domains (web, backend and AI).",
    ],
    skills: ["CI/CD", "Docker", "Next.js", "APIs", "Prompt Eng", "LLM Evals", "Code Reviews"],
    links: [
      { label: "Spotify", url: "https://courses.spotify.com/home" }
    ],
  },
  {
    title: "Spring Intern",
    org: "JPMorgan Chase & Co.",
    length: "April 2024 - April 2024",
    category: "internship",
    logo: "/jpmc-logo.png",
    image: "/experience-jpmc.jpg",
    highlights: [
      "Worked with a team of 3 interns to promote and increase community involvement in fundraising for Dorset's Disability Charity 'Diverse Abilities';",
      "Developed 'Hero's Leaderboard', a web app that promotes community engagement in fundraising through scoreboards & rewards.",
    ],
    skills: ["Agile Methodologies", "Git", "HTML", "CSS", "Python", "Flask"],
    links: [
      { label: "JPMorgan Chase", url: "https://www.jpmorganchase.com" }
    ],
  },
  {
    title: "Machine Learning Engineer",
    org: "University Hospital Southampton NHS Foundation Trust",
    length: "October 2025 - Present",
    category: "university_ventures",
    logo: "/nhs-logo.png",
    highlights: [
      "I work with a team of 4 engineers to develop and test SmartCart V3, an 'augmented meal cart' for in-hospital use;",
      "SmartCart V3 aims to help prevent malnutrition in hospital patients by monitoring their food intake.",
    ],
    skills: ["Software Engineering", "Machine Learning", "Supervised Learning", "Instance Segmentation"],
    links: [
      { label: "UHS NHS Trust", url: "https://www.uhs.nhs.uk/" }
    ],
  },
  {
    title: "Machine Learning Researcher",
    org: "XPRIZE Foundation",
    length: "October 2024 - April 2025",
    category: "university_ventures",
    logo: "/xprize-logo.png",
    highlights: [
      "Part of FLARE-X, 1 of the 15 autonomous semi-finalist teams, in the $11M international XPRIZE Wildfire competition;",
      "FLARE-X is a joint venture between the University of Southampton, the University of Texas at Austin and the University of Edinburgh;",
      "Using Reinforcement Learning, I trained a fixed-wing drone to allocate balls of fire extinguisher for optimal suppression of wildfire.",
    ],
    skills: ["Machine Learning", "Reinforcement Learning", "Gymnasium", "Stable-Baselines3", "Python"],
    links: [
      { label: "XPRIZE", url: "https://www.xprize.org/prizes/wildfire" }
    ],
  },
  {
    title: "President",
    org: "University of Southampton Artificial Intelligence Society",
    length: "May 2024 – May 2025",
    category: "extracurricular",
    logo: "/aisoc-logo.png",
    image: "/experience-aisoc-president.jpg",
    highlights: [
      "Led a committee of 8 and coordinated the society's 4 divisions (Education, Projects, Partnerships & Marketing);",
      "Organised over 20 ML workshops, talks led by industry experts & other events for the society's 500+ members;",
      "Led fundraising from academic & corporate sponsors, such as IET, Siemens & Cirium;",
      "Supervised over 10 student-led ML projects and organised 2 UK-wide AI Hackathons.",
    ],
    links: [
      { label: "AISoc Website", url: "https://www.susu.org/groups/artificial-intelligence-society" }
    ],
  },
  {
    title: "Head of Education",
    org: "University of Southampton Artificial Intelligence Society",
    length: "May 2024 – September 2024",
    category: "extracurricular",
    logo: "/aisoc-logo.png",
    image: "/experience-aisoc-education.jpg",
    highlights: [
      "Led the society's Education Division. This division is responsible for organising the society's bi-weekly ML workshops;",
      "Developed a beginner-friendly ML curriculum, by simplifying complex models into interactive & hands-on workshops;",
      "Covered Neural Networks, Convolutional Neural Networks, Recurrent Neural Networks, Reinforcement Learning, Natural Language Processing, Generative Adversarial Networks, Diffusion Models and Tree-Based Models.",
    ],
    links: [
      { label: "AISoc Website", url: "https://www.susu.org/groups/artificial-intelligence-society" }
    ],
  },
  {
    title: "Secretary",
    org: "University of Southampton Artificial Intelligence Society",
    length: "May 2023 – May 2024",
    category: "extracurricular",
    logo: "/aisoc-logo.png",
    image: "/experience-aisoc-secretary.jpg",
    highlights: [
      "Managed the society's communications, ensuring effective coordination between the committee, external partners and sponsors;",
      "Supported the organisation of the society's workshops, talks and other events, assisting with the logistics & event planning;",
      "Oversaw meeting agendas, minutes & documentation across the society's 4 divisions.",
    ],
    links: [
      { label: "AISoc Website", url: "https://www.susu.org/groups/artificial-intelligence-society" }
    ],
  },
  {
    title: "Course Representative",
    org: "University of Southampton Students' Union",
    length: "October 2024 – June 2025",
    category: "volunteering",
    logo: "/susu-logo.png",
    highlights: [
      "Gathered views and concerns from over 250 Computer Science students and presented these issues effectively to the department;",
      "Collected and analysed data on the 2024-25 modules in order to make improvements to the degree.",
    ],
    links: [
      { label: "Students' Union", url: "https://www.susu.org" }
    ],
  },
  {
    title: "Student Mentor",
    org: "Beaumont School",
    length: "September 2021 – May 2022",
    category: "volunteering",
    logo: "/beaumont-logo.png",
    highlights: [
      "Participated in a mentoring program, providing one-on-one support to a Year 10 student;",
      "Assisted with academic tasks, including homework & exam study, while improving their attendance and encouraging an open mindset;",
      "Supported the development of essential skills, such as motivation & confidence, contributing to their well-being and mental health.",
    ],
    links: [
      { label: "Beaumont School", url: "https://www.beaumontschool.com" }
    ],
  }
];
export default experience;
