import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    slug: "deep-shield-360",
    name: "Deep Shield 360",
    desc: "AIML-driven video analysis software for surveillance intelligence.",
    hue: "from-brand-1/30 to-brand-2/30",
  },
  {
    slug: "velo",
    name: "Velo",
    desc: "Rapid crisis-response requirement matching for professionals.",
    hue: "from-brand-3/30 to-brand-4/30",
  },
  {
    slug: "silence-game",
    name: "Silence Game",
    desc: "An atmospheric HTML & CSS browser game.",
    hue: "from-brand-2/30 to-brand-3/30",
  },
];

export const Projects = () => (
  <section id="projects" className="container py-20 md:py-28 scroll-mt-20">
    <div className="flex items-end justify-between gap-6 flex-wrap">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">02 / Projects</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">Things we've built</h2>
      </div>
      <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-border to-transparent" />
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((p) => (
        <Link
          key={p.slug}
          to={`/projects/${p.slug}`}
          className="group gradient-border relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1"
        >
          <div className={`relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br ${p.hue}`}>
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-display text-5xl font-bold text-foreground/10">{p.name.split(" ")[0]}</span>
            </div>
            <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-foreground/60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <div className="p-5">
            <h3 className="font-display text-xl font-bold">{p.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  </section>
);
