import aritraaPhoto from "@/assets/crew/aritraa-chakraborty.jpg";
import joyPhoto from "@/assets/crew/joy-mukherjee.jpg";
import ankitPhoto from "@/assets/crew/ankit-kabiratna.jpg";
import mainakPhoto from "@/assets/crew/mainak-saha.jpg";

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
      { label: "LeetCode", href: "https://leetcode.com/u/JoyMukherjee/", icon: "leetcode" },
      { label: "X", href: "https://x.com/Joy_3012_", icon: "x" },
      { label: "mail", href: "mailto:joymukh3012@gmail.com", icon: "mail" },
    ],
  },
  "ankitkabiratna": {
    slug: "ankitkabiratna",
    name: "Ankit Kabiratna",
    pronouns: "he/him",
    role: "Frontend Developer",
    photo: ankitPhoto,
    summary:
      "I'm Ankit, an Electronics and Communication Engineering undergraduate at Institute of Engineering and Management with a strong interest in software development and problem-solving. I focus on building practical, efficient solutions while developing a solid foundation in programming and core computer science concepts. With an interest in both software and embedded systems, I aim to bridge the gap between hardware and software by creating scalable and impactful real-world applications.",
    skills: [
      { group: "Languages", items: ["Python", "C++", "SQL", "CSS", "Java"] },
      { group: "Core CS", items: ["Data Structures (Basics)", "Algorithms (Beginner)", "Problem Solving"] },
      { group: "Tools", items: ["Git", "Arduino"] },
    ],
    education: [
      {
        level: "B.Tech - Electronics and Communication Engineering",
        institution: "Institute of Engineering and Management",
        period: "2025 — Present",
      },
      {
        level: "School",
        institution: "Sudhir Memorial Institute",
        period: "2011 — 2025",
      },
    ],
    experience: [],
    projects: [
      {
        name: "Velo",
        description:
          "Contributed to frontend development of an AI-powered service platform — built UI components, improved user experience, and worked on creating responsive and user-friendly interfaces.",
      },
      {
        name: "Fire Detection System",
        description:
          "An Arduino-based system designed to detect fire hazards using sensors and trigger real-time alerts through a buzzer system.",
      },
    ],
    interests: ["Software Development", "Embedded Systems", "Problem Solving"],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ankit-kabiratna-389323368", icon: "linkedin" },
      { label: "GitHub", href: "https://github.com/ankitkabiratna07", icon: "github" },
      { label: "Instagram", href: "https://www.instagram.com/a_n_kit_22", icon: "instagram" },
      { label: "mail", href: "mailto:ankitkabiratna193@gmail.com", icon: "mail" },
    ],
  },
  "mainaksaha": {
    slug: "mainaksaha",
    name: "Mainak Saha",
    pronouns: "he/him",
    role: "Hardware Engineer",
    photo: mainakPhoto,
    summary:
      "I'm Mainak, a hardware enthusiast and aspiring Electronics Engineer with a deep fascination for computer architecture and embedded systems. I specialize in bridging the gap between software and physical components, with practical experience in Arduino prototyping and low-level programming in C and Python. From troubleshooting motherboard circuitry to building custom electronics, I thrive on understanding how complex systems operate from the silicon up.",
    skills: [
      { group: "Languages", items: ["Python", "C", "HTML", "CSS"] },
      { group: "Core CS", items: ["Problem Solving"] },
      { group: "Tools", items: ["Git", "Arduino"] },
      { group: "Domain", items: ["Computer Architecture"] },
    ],
    education: [
      {
        level: "B.Tech - Electronics and Communication Engineering",
        institution: "Institute of Engineering and Management",
        period: "2025 — Present",
      },
      {
        level: "School",
        institution: "Jadavpur Vidyapith",
        period: "2011 — 2025",
      },
    ],
    experience: [],
    projects: [
      {
        name: "Deep-Shield 360",
        description:
          "An AI/ML-driven project focused on advanced video analysis and security.",
      },
      {
        name: "Silence: Demon Realm",
        description:
          "An interactive, JavaScript-based system (HTML/JS) demonstrating real-time logic handling and complex user interaction design.",
      },
    ],
    interests: [
      "Embedded Systems & Robotics",
      "Electronics Engineering & PC Hardware Research",
      "Hardware-level Troubleshooting & System Assembly",
    ],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/mainak-saha-7169a3389", icon: "linkedin" },
      { label: "GitHub", href: "https://github.com/MainakSaha22", icon: "github" },
      { label: "Instagram", href: "https://www.instagram.com/lost.world_22s", icon: "instagram" },
      { label: "mail", href: "mailto:sahamainak59@gmail.com", icon: "mail" },
    ],
  },
};