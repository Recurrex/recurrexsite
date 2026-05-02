import { Link } from "react-router-dom";

const MEMBERS = [
  { slug: "aritraachakraborty", name: "Aritraa Chakraborty", role: "AI Engineer", initials: "AC" },
  { slug: "joymukherjee", name: "Joy Mukherjee", role: "Full Stack Developer", initials: "JM" },
  { slug: "ankit-kabiratna", name: "Ankit Kabiratna", role: "Frontend Developer", initials: "AK" },
  { slug: "abir-banik", name: "Abir Banik", role: "Robotics & IoT Engineer", initials: "AB" },
  { slug: "mainak-saha", name: "Mainak Saha", role: "Backend Developer", initials: "MS" },
];

export const Crew = () => (
  <section id="crew" className="container py-20 md:py-28 scroll-mt-20">
    <SectionHeader eyebrow="01 / Crew" title="The collective" />
    <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {MEMBERS.map((m) => (
        <Link
          key={m.slug}
          to={`/crew/${m.slug}`}
          className="group gradient-border relative flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card transition-transform hover:-translate-y-1"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-gradient text-sm font-semibold text-white">
            {m.initials}
          </span>
          <span className="min-w-0">
            <span className="block font-medium leading-tight truncate">{m.name}</span>
            <span className="block text-xs text-muted-foreground truncate">{m.role}</span>
          </span>
        </Link>
      ))}
    </div>
  </section>
);

const SectionHeader = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="flex items-end justify-between gap-6 flex-wrap">
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">{title}</h2>
    </div>
    <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-border to-transparent" />
  </div>
);
