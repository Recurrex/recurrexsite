import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ShieldCheck,
  Cpu,
  Camera,
  Lock,
  AlertTriangle,
  Network,
  LayoutDashboard,
  Sparkles,
  Calendar,
  User,
  Tag,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { RotatingBadge } from "@/components/site/RotatingBadge";

const today = new Date().toLocaleDateString(undefined, {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const STACK = [
  {
    name: "Python",
    desc: "Core language powering the AI/ML pipeline and orchestration logic.",
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    name: "OpenCV",
    desc: "Real-time computer vision for frame analysis and object tracking.",
    icon: <Camera className="h-5 w-5" />,
  },
  {
    name: "FastAPI",
    desc: "High-performance API layer streaming detections to clients.",
    icon: <Network className="h-5 w-5" />,
  },
  {
    name: "Firebase",
    desc: "Realtime data sync, auth, and secure event storage.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

const FEATURES = [
  {
    icon: <Camera className="h-5 w-5" />,
    title: "Multi-Source Ingestion",
    desc: "Unified pipeline ingesting CCTV, drone, and body-cam feeds.",
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Zero-Trust Access",
    desc: "Secure DS-ID + OTP login with session-level verification.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5" />,
    title: "Real-time Threat Detection",
    desc: "Detects weapons and suspicious behavior with instant alerts.",
  },
];

const DIAGRAMS = [
  { title: "System Architecture", caption: "End-to-end ingestion → AI → alerting flowchart" },
  { title: "AI Detection Mockup", caption: "Live frame with bounding boxes & confidence scores" },
  { title: "Dashboard UI Sneak-Peek", caption: "Operator command-center interface" },
  { title: "Recurrex Methodology", caption: "Innovate • Build • Solve" },
];

const DeepShield360 = () => {
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

        {/* Title + live status */}
        <header className="mt-8 animate-fade-in">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Tech Briefing
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Deep-Shield 360
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
              Live Status
            </span>
          </div>

          {/* Metadata row */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Date Created: <span className="text-foreground">{today}</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4" />
              Lead: <span className="text-foreground">Team Recurrex</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Tag className="h-4 w-4" />
              Category: <span className="text-foreground">AI/ML Surveillance</span>
            </span>
          </div>
        </header>

        {/* Hero placeholder */}
        <div className="mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-brand-1/20 via-brand-3/20 to-brand-4/30 backdrop-blur transition-colors duration-300">
          <div className="grid h-full w-full place-items-center">
            <span className="font-display text-5xl sm:text-6xl font-bold text-foreground/10">
              DEEP-SHIELD
            </span>
          </div>
        </div>

        {/* Intro */}
        <Section heading="An Ocean of Video Data">
          <p>
            Every second, the world generates an{" "}
            <strong className="text-foreground">ocean of video data</strong> —
            millions of frames pouring in from CCTV grids, patrol drones, and
            body cams. No human team can watch it all. Critical signals drown
            in noise, and threats slip through unnoticed.
          </p>
          <p className="mt-4">
            <strong className="text-foreground">Deep-Shield 360</strong> is our
            answer: an AI-native surveillance brain that watches every feed in
            parallel, recognises threats the moment they emerge, and routes
            actionable intel to the right responder — instantly.
          </p>
        </Section>

        {/* Tech stack */}
        <Section heading="The Tech Stack">
          <div className="grid gap-4 sm:grid-cols-2">
            {STACK.map((s) => (
              <div
                key={s.name}
                className="group relative overflow-hidden rounded-xl border border-border bg-card/60 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/40 hover:shadow-glow"
              >
                <div
                  className="inline-grid h-9 w-9 place-items-center rounded-lg text-white"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {s.icon}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold">{s.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Key features */}
        <Section heading="Key Features">
          <ul className="space-y-3">
            {FEATURES.map((f) => (
              <li
                key={f.title}
                className="flex items-start gap-4 rounded-xl border border-border bg-card/60 p-4 backdrop-blur transition-colors hover:border-foreground/40"
              >
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-white"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {f.icon}
                </span>
                <div>
                  <p className="font-display font-semibold">{f.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Diagrams */}
        <Section heading="Visual Briefing">
          <div className="grid gap-5 sm:grid-cols-2">
            {DIAGRAMS.map((d, i) => (
              <figure
                key={d.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
              >
                <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-muted to-card">
                  <div className="absolute inset-0 grid place-items-center">
                    {i === 0 && <Network className="h-10 w-10 text-foreground/30" />}
                    {i === 1 && <Camera className="h-10 w-10 text-foreground/30" />}
                    {i === 2 && <LayoutDashboard className="h-10 w-10 text-foreground/30" />}
                    {i === 3 && <Sparkles className="h-10 w-10 text-foreground/30" />}
                  </div>
                  <span className="absolute left-3 top-3 rounded-full bg-background/70 px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur">
                    Placeholder
                  </span>
                </div>
                <figcaption className="border-t border-border p-4">
                  <p className="font-display font-semibold">{d.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{d.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        <p className="mt-16 text-center font-display text-lg italic text-muted-foreground">
          Innovate • Build • Solve
        </p>
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

export default DeepShield360;