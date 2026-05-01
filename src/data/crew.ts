import aritraaPhoto from "@/assets/crew/aritraa-chakraborty.jpg";

export type SocialLink = {
  label: string;
  href: string;
  icon:
    | "github"
    | "linkedin"
    | "instagram"
    | "x"
    | "facebook"
    | "leetcode"
    | "mail"
    | "globe";
};

export type EducationItem = {
  level: string;
  institution: string;
  detail?: string;
  period: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period?: string;
  bullets: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
};

export type CrewMemberData = {
  slug: string;
  name: string;
  pronouns?: string;
  role: string;
  photo: string;
  summary: string;
  skills: { group: string; items: string[] }[];
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  interests?: string[];
  socials: SocialLink[];
};

export const CREW: Record<string, CrewMemberData> = {
  "aritraa-chakraborty": {
    slug: "aritraa-chakraborty",
    name: "Aritraa Chakraborty",
    pronouns: "he/him",
    role: "AI Engineer",
    photo: aritraaPhoto,
    summary:
      "I'm Aritraa, an AI Enthusiast and Researcher dedicated to building the next generation of intelligent systems. With an interest in software engineering and AI/ML research, I bridge the gap between complex algorithms and production-grade applications. I thrive on turning ambitious ideas into functional, scalable code.
Contact : aritraa4work@gmail.com",
    skills: [
      { group: "Languages", items: ["Python", "C", "SQL"] },
      { group: "AI / ML", items: ["Deep Learning", "PyTorch"] },
      { group: "Tools", items: ["Git", "GitHub"] },
      { group: "Core CS", items: ["Data Structures & Algorithms", "System Design"] },
    ],
    education: [
      {
        level: "B.Tech - Electronics & Communication Engineering (CS Focused)",
        institution: "Institute of Engineering and Management",
        period: "2025 — Present",
      },
      {
        level: "Higher Secondary",
        institution: "Aditya Academy Secondary",
        period: "2019 — 2025",
      },
      {
        level: "Primary & Secondary",
        institution: "Welland Goldsmith School, Patuli",
        period: "2011 — 2019",
      },
    ],
    experience: [
      {
        role: "Python Programming Intern",
        company: "CodeAlpha",
        bullets: [
          "Worked on various Python-based projects, focusing on backend logic and automation.",
          "Received a Letter of Recommendation for consistent performance.",
        ],
      },
    ],
    projects: [
      {
        name: "Financer",
        description:
          "A comprehensive personal finance tracker hosted on GitHub, designed to help users monitor expenses, manage budgets, and visualize financial data effectively.",
      },
      {
        name: "Deep Shield 360",
        description:
          "An AI/ML-driven video analysis system designed for deepfake detection, leveraging Gemini 1.5 Pro models for high accuracy.",
      },
      {
        name: "Velo",
        description:
          "A rapid crisis response application designed to connect users with professional help instantly during emergencies.",
      },
    ],
    interests: ["AI Research", "Open Source", "System Design", "Reading"],
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com/in/aritraachakraborty", icon: "linkedin" },
      { label: "GitHub", href: "https://github.com/AritraaChakraborty", icon: "github" },
      { label: "LeetCode", href: "https://leetcode.com/u/AritraaChakraborty", icon: "leetcode" },
      { label: "Instagram", href: "https://instagram.com/4ritraa", icon: "instagram" },
      { label: "X", href: "https://x.com/ItsMeArBhai", icon: "x" },
    ],
  },
};