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
      "Part of the Learning Mountain Bet, a cross-functional team working on developing a new vertical (courses) for Spotify.",
      "The LMB consists entirely of senior, staff and principal level and is one of Spotify's most fast-paced and dynamic teams.",
      "Worked on a brand new feature aimed at enhancing the learning experience on Spotify.",
      "Collaborated across several domains (web, backend and AI).",
    ],
    skills: ["CI/CD", "Git", "Docker", "Next.js", "GCP", "REST APIs", "Prompt Engineering"],
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
      "Developed 'Hero's Leaderboard', a web app that promotes charity fundraising through scoreboards and rewards.",
    ],
    skills: ["Agile Methodologies", "Git", "Flask", "Python", "HTML5", "CSS"],
    link: "https://www.jpmorganchase.com",
  },
  {
    title: "Software Engineer",
    org: "University Hospital Southampton NHS Foundation Trust",
    length: "October 2025 - Present",
    category: "university_ventures",
    logo: "/nhs-logo.png",
    highlights: [
      "I work with a team of 4 engineers to develop and test SmartCart v3, an augmented meal cart for in-hospital use.",
      "SmartCart v3 aims to help prevent malnutrition in hospital patients by monitoring their food intake.",
    ],
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
      "Using Reinforcement Learning, I trained a fixed-wing drone to deploy balls of fire extinguisher for optimal wildfire suppression.",
    ],
    link: "https://www.xprize.org/prizes/wildfire",
  },
  {
    title: "President",
    org: "University of Southampton Artificial Intelligence Society",
    length: "May 2024 – May 2025",
    category: "extracurricular",
    logo: "/aisoc-logo.png",
    image: "/experience-aisoc-president.jpg",
    highlights: [
      "Led a committee of 8 and coordinated the society's 4 divisions (Education, Projects, Partnerships and Marketing).",
      "Organised 30+ ML workshops, talks led by industry experts, student-led ML projects, UK-wide AI hackathons and other events for the society's 350+ members.",
      "Led fundraising and oversaw the subsequent spending of sponsorship funds from academic and corporate sponsors.",
    ],
    link: "https://www.susu.org/groups/artificial-intelligence-society",
  },
  {
    title: "Head of Education",
    org: "University of Southampton Artificial Intelligence Society",
    length: "May 2024 – September 2024",
    category: "extracurricular",
    logo: "/aisoc-logo.png",
    image: "/experience-aisoc-education.jpg",
    highlights: [
      "Led the society's Education Division. This division is responsible for organising the society's bi-weekly ML workshops.",
      "Developed a beginner-friendly ML curriculum, by simplifying complex models into interactive and hands-on workshops.",
      "Covered Neural Networks, CNNs, RNNs, Reinforcement Learning, Natural Language Processing, GANs, Diffusion Models and Tree-Based Models.",
    ],
    link: "https://www.susu.org/groups/artificial-intelligence-society",
  },
  {
    title: "Secretary",
    org: "University of Southampton Artificial Intelligence Society",
    length: "May 2023 – May 2024",
    category: "extracurricular",
    logo: "/aisoc-logo.png",
    image: "/experience-aisoc-secretary.jpg",
    highlights: [
      "Managed the society's communications, ensuring effective coordination between the committee, external partners and sponsors.",
      "Supported the organisation of the society's workshops, talks and other events, assisting with the logistics and event planning.",
      "Oversaw meeting agendas, minutes and documentation across the society's divisions.",
    ],
    link: "https://www.susu.org/groups/artificial-intelligence-society",
  },
  {
    title: "Course Representative",
    org: "University of Southampton Students' Union",
    length: "October 2024 – June 2025",
    category: "volunteering",
    logo: "/susu-logo.png",
    highlights: [
      "Gathered views and concerns from over 250 Computer Science students and presented these issues effectively to the department.",
      "Collected and analysed data on the 2024-25 modules in order to identify key areas of improvement for the degree.",
    ],
    link: "https://www.susu.org",
  },
  {
    title: "Student Mentor",
    org: "Beaumont School",
    length: "September 2021 – May 2022",
    category: "volunteering",
    logo: "/beaumont-logo.png",
    highlights: [
      "Participated in a mentoring program, providing one-on-one support to a Year 10 student.",
      "Assisted with academic tasks, including homework & exam study, while improving their attendance and encouraging an open mindset.",
      "Supported the development of essential skills, such as motivation & confidence, contributing to their well-being and mental health.",
    ],
    link: "https://www.beaumontschool.com",
  }
];
export default experience;
