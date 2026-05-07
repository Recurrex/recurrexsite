import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Zap,
  Network,
  Layers,
  Mail,
  Lock,
  Github,
  Linkedin,
  Calendar,
  User,
  Tag,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { RotatingBadge } from "@/components/site/RotatingBadge";
import veloHero from "@/assets/velo-hero.png";
import veloLogin from "@/assets/velo-login.jpg";
import veloDispatch from "@/assets/velo-dispatch.jpg";
import veloReport from "@/assets/velo-report.jpg";

const DATE_CREATED = "5 May 2026";

const PILLARS = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Rapid Deployment",
    desc: "Built on React + FastAPI for a lightweight, responsive experience. In a crisis, there's no room for loading screens.",
  },
  {
    icon: <Network className="h-5 w-5" />,
    title: "Intelligent Coordination",
    desc: "Centralised, real-time communication keeps responders and those in need synced — cutting through the fog of war.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Scalable Architecture",
    desc: "Backend engineered to absorb traffic spikes — from localized incidents to large-scale emergencies — without losing data integrity.",
  },
];

const DIAGRAMS = [
  {
    title: "Velo — Critical Response Protocol",
    caption: "Cover concept: speed, terrain, and coordinated response.",
    image: veloHero,
    alt: "Velo critical response protocol cover concept",
  },
  {
    title: "Authentication Gateway",
    caption: "Dual-role login — request help or operate as a Pro.",
    image: veloLogin,
    alt: "Velo dual-role authentication screen",
  },
  {
    title: "Dispatch Command",
    caption: "Pro-side urgent request card with one-tap accept.",
    image: veloDispatch,
    alt: "Velo dispatch platform urgent request card",
  },
  {
    title: "Report an Issue",
    caption: "User captures the issue with live camera evidence.",
    image: veloReport,
    alt: "Velo report issue capture screen",
  },
];

const LockedNote = ({
  label,
  icon,
}: {
  label: string;
  icon: React.ReactNode;
}) => {
  const [unlocked, setUnlocked] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setUnlocked(true)}
      className="group flex w-full items-center justify-between gap-4 rounded-xl border border-border bg-card/60 p-4 text-left backdrop-blur transition-all hover:-translate-y-0.5 hover:border-foreground/40 hover:shadow-glow"
    >
      <span className="flex items-center gap-3">
        <span
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-white"
          style={{ background: "var(--gradient-brand)" }}
        >
          {icon}
        </span>
        <span className="font-display font-semibold">{label}</span>
      </span>
      <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
        <Lock className="h-4 w-4" />
        {unlocked ? "Sign in to access" : "Locked"}
      </span>
    </button>
  );
};

const Velo = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      <main className="container py-12 md:py-20 max-w-4xl">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <header className="mt-8 animate-fade-in">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Tech Briefing
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Velo
            </h1>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  style={{ background: "hsl(var(--brand-3))" }}
                />
                <span
                  className="relative inline-flex h-2.5 w-2.5 rounded-full"
                  style={{ background: "hsl(var(--brand-3))" }}
                />
              </span>
              Critical Response Protocol
            </span>
          </div>

          <p className="mt-5 text-lg text-muted-foreground">
            Redefining crisis response for the modern age.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Date Created: <span className="text-foreground">{DATE_CREATED}</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4" />
              Lead: <span className="text-foreground">Team Recurrex</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Tag className="h-4 w-4" />
              Category: <span className="text-foreground">Crisis Response</span>
            </span>
          </div>
        </header>

        {/* Hero */}
        <figure className="mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300">
          <img
            src={veloHero}
            alt="Velo — A Critical Response Protocol"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </figure>

        {/* Intro */}
        <Section heading="Every Second Counts">
          <p>
            In an emergency, every second isn't just a unit of time — it's a
            critical window where the right information can save a life. While
            we live in an era of instant communication, our crisis management
            systems often struggle with the lag of fragmented data and slow
            deployment. That is where{" "}
            <strong className="text-foreground">Velo</strong> comes in.
          </p>
        </Section>

        <Section heading="What is Velo?">
          <p>
            Velo is a rapid crisis response application engineered to bridge
            the gap between the onset of an emergency and the arrival of
            professional aid. Built with a focus on speed, reliability, and
            intuitive coordination, Velo serves as a high-stakes command
            center that fits in your pocket.
          </p>
          <p className="mt-4">
            The name itself — derived from the root for{" "}
            <em className="text-foreground">"velocity"</em> — reflects the
            project's core mission: to accelerate the flow of help.
          </p>
        </Section>

        {/* Pillars */}
        <Section heading="The Core Pillars">
          <ul className="space-y-3">
            {PILLARS.map((p) => (
              <li
                key={p.title}
                className="flex items-start gap-4 rounded-xl border border-border bg-card/60 p-4 backdrop-blur transition-colors hover:border-foreground/40"
              >
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-white"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {p.icon}
                </span>
                <div>
                  <p className="font-display font-semibold">{p.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Diagrams */}
        <Section heading="Visual Briefing">
          <div className="grid gap-5 sm:grid-cols-2">
            {DIAGRAMS.map((d) => (
              <figure
                key={d.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-card">
                  <img
                    src={d.image}
                    alt={d.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="border-t border-border p-4">
                  <p className="font-display font-semibold">{d.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{d.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* Notes */}
        <Section heading="Notes">
          <div className="space-y-3">
            <LockedNote label="GitHub Repo" icon={<Github className="h-5 w-5" />} />
            <LockedNote
              label="LinkedIn Post for Velo"
              icon={<Linkedin className="h-5 w-5" />}
            />
          </div>
        </Section>

        {/* Author / sign-off */}
        <section className="mt-16 animate-fade-in rounded-2xl border border-border bg-card/60 p-6 sm:p-8 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Authored by
          </p>
          <p className="mt-2 font-display text-xl font-bold">Joy Mukherjee</p>
          <p className="mt-1 text-sm text-muted-foreground">Recurrex</p>

          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

          <p className="text-base text-muted-foreground">
            Any queries? Feel free to contact us.
          </p>
          <a
            href="mailto:recurrex.ofc@gmail.com"
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:shadow-glow"
          >
            <Mail className="h-4 w-4" />
            recurrex.ofc@gmail.com
          </a>
        </section>
      </main>

      <Footer />
      <RotatingBadge />
      <ThemeToggle />
    </div>
  );
};

const Section = ({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) => (
  <section className="mt-14 animate-fade-in">
    <h2 className="font-display text-2xl sm:text-3xl font-bold">
      <span className="text-brand-gradient">{heading}</span>
    </h2>
    <div className="mt-5 text-base leading-relaxed text-muted-foreground">
      {children}
    </div>
  </section>
);

export default Velo;
