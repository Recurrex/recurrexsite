import veloCover from "@/assets/velo-hero.png";

export type Project = {
  slug: string;
  name: string;
  desc: string;
  hue: string;
  createdAt: string;
  uploadedAt: string;
  cover?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "deepsheild360",
    name: "Deep Shield 360",
    desc: "AIML-driven video analysis software for surveillance intelligence.",
    hue: "from-brand-1/30 to-brand-2/30",
    createdAt: "2025-08-12",
    uploadedAt: "2025-09-01",
  },
  {
    slug: "velo",
    name: "Velo",
    desc: "Rapid crisis-response requirement matching for professionals.",
    hue: "from-brand-3/30 to-brand-4/30",
    createdAt: "2025-06-20",
    uploadedAt: "2025-07-10",
    cover: veloCover,
  },
  {
    slug: "silence-game",
    name: "Silence Game",
    desc: "An atmospheric HTML & CSS browser game.",
    hue: "from-brand-2/30 to-brand-3/30",
    createdAt: "2025-03-05",
    uploadedAt: "2025-04-01",
  },
];
