import aritraaPhoto from "@/assets/crew/aritraa-chakraborty.jpg";
import joyPhoto from "@/assets/crew/joy-mukherjee.jpg";
import ankitPhoto from "@/assets/crew/ankit-kabiratna.jpg";

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
  "aritraachakraborty": {
    slug: "aritraachakraborty",
    name: "Aritraa Chakraborty",
    pronouns: "he/him",
    role: "AI Engineer",
    photo: aritraaPhoto,
    summary:
      "I'm Aritraa, an AI Enthusiast and Researcher dedicated to building the next generation of intelligent systems. With an interest in software engineering and AI/ML research, I bridge the gap between complex algorithms and production-grade applications. I thrive on turning ambitious ideas into functional, scalable code.",
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
      { label: "mail", href: "aritraa4work@gmail.com", icon: "mail" },
    ],
  },
  "joymukherjee": {
    slug: "joymukherjee",
    name: "Joy Mukherjee",
    pronouns: "he/him",
    role: "Full Stack Developer",
    photo: joyPhoto,
    summary:
      "I'm Joy Mukherjee, a Full Stack Developer and Computer Science undergraduate at the Institute of Engineering and Management. I specialize in building practical, scalable solutions that address real-world problems. With a strong foundation in both frontend and backend technologies, I focus on creating applications that are efficient, user-centric, and impactful.",
    skills: [
      { group: "Languages", items: ["Python", "SQL"] },
      { group: "Frontend", items: ["React"] },
      { group: "Backend & Database", items: ["Firebase", "Firestore"] },
      { group: "Tools & Version Control", items: ["Git"] },
      { group: "Core", items: ["Problem Solving"] },
    ],
    education: [
      {
        level: "B.Tech - Computer Science and Application",
        institution: "Institute of Engineering and Management",
        period: "2025 — Present",
      },
      {
        level: "Higher Secondary",
        institution: "DAV Model School, Durgapur",
        period: "2023 — 2025",
      },
      {
        level: "Primary & Secondary",
        institution: "St. Xavier's School, Durgapur",
        period: "2011 — 2023",
      },
    ],
    experience: [],
    projects: [
      {
        name: "Career Compass",
        description:
          "A backend-driven platform designed to guide students in choosing the right courses and colleges by analyzing their strengths and weaknesses. Focused on delivering personalized and data-driven recommendations.",
      },
      {
        name: "Velo",
        description:
          "An AI-powered triage platform that identifies everyday service issues (such as electrical or appliance failures), compares market prices, enables user negotiation, and dispatches services based on provider acceptance.",
      },
    ],
    interests: ["Full Stack Development", "Problem Solving", "Open Source"],
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/joy-mukherjee-4b9b08374",
        icon: "linkedin",
      },
      { label: "GitHub", href: "https://github.com/JoyMukherjee3012", icon: "github" },
      { label: "mail", href: "mailto:joymukh3012@gmail.com", icon: "mail" },
    ],
  },
};