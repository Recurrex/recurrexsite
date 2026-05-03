import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { RotatingBadge } from "@/components/site/RotatingBadge";
import { CREW } from "@/data/crew";

const ORDER = [
  "aritraachakraborty",
  "joymukherjee",
  "ankitkabiratna",
  "abirbanik",
  "mainaksaha",
];

const teaser = (s: string) => {
  const clean = s.replace(/\s+/g, " ").trim();
  return clean.length > 160 ? clean.slice(0, 157).trimEnd() + "…" : clean;
};

const CrewPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="container py-12 md:py-20 max-w-6xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <header className="mt-8 animate-fade-in">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Technical Roster
          </p>
          <h1
            className="mt-3 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
            style={{ fontFamily: "Inter, 'SF Pro Display', system-ui, sans-serif" }}
          >
            Meet the <span className="text-brand-gradient">Crew</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Five operators. One collective. Click any profile to open their full
            portfolio.
          </p>
        </header>

        <section className="mt-12 grid gap-5 sm:grid-cols-2">
          {ORDER.map((slug) => {
            const m = CREW[slug];
            if (!m) return null;
            return (
              <Link
                key={slug}
                to={`/crew/${slug}`}
                className="group relative flex items-center gap-5 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-[hsl(var(--brand-3))]/50 hover:bg-muted hover:backdrop-blur-xl hover:shadow-[0_0_40px_-10px_hsl(var(--brand-3)/0.5)]"
              >
                {/* Avatar */}
                <span className="relative shrink-0">
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-[hsl(var(--brand-3))]/40 blur-md animate-breathing-glow"
                  />
                  <span className="relative block h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border-2 border-[hsl(var(--brand-3))]/80 transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </span>
                </span>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h2
                    className="truncate text-lg sm:text-xl font-bold text-foreground"
                    style={{
                      fontFamily:
                        "Inter, 'SF Pro Display', system-ui, sans-serif",
                    }}
                  >
                    {m.name}
                  </h2>
                  <p className="mt-0.5 text-sm font-semibold text-[hsl(var(--brand-2))]">
                    {m.role}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-muted-foreground line-clamp-2">
                    {teaser(m.summary)}
                  </p>
                </div>
              </Link>
            );
          })}
        </section>
      </main>

      <Footer />
      <RotatingBadge />
      <ThemeToggle />
    </div>
  );
};

export default CrewPage;