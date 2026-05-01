import { Trophy } from "lucide-react";

const ACHIEVEMENTS = [
  {
    title: "IEEE EDS Code2Console Game Development Competition 2026",
    detail: "1st Runner-Up",
  },
];

export const Achievements = () => (
  <section id="achievements" className="container py-20 md:py-28 scroll-mt-20">
    <div className="flex items-end justify-between gap-6 flex-wrap">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">03 / Achievements</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">Milestones</h2>
      </div>
      <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-border to-transparent" />
    </div>

    <ul className="mt-12 space-y-4">
      {ACHIEVEMENTS.map((a) => (
        <li
          key={a.title}
          className="group relative flex items-start gap-5 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card"
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-brand-gradient" />
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-gradient text-white">
            <Trophy className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <p className="font-display text-lg sm:text-xl font-semibold leading-snug">{a.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{a.detail}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);
