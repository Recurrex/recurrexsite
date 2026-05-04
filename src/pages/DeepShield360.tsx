import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ShieldCheck,
  Cpu,
  Camera,
  Lock,
  AlertTriangle,
  Network,
  Mail,
} from "lucide-react";
import { Calendar, User, Tag } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { RotatingBadge } from "@/components/site/RotatingBadge";
import ds360Hero from "@/assets/ds360-hero.jpg";
import ds360Architecture from "@/assets/ds360-architecture.png";
import ds360Dashboard from "@/assets/ds360-dashboard.jpg";
import ds360Login from "@/assets/ds360-login.jpg";

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
  {
    title: "System Architecture",
    caption: "End-to-end ingestion → AI → alerting flowchart",
    image: ds360Architecture,
    alt: "Deep Shield 360 system architecture flow diagram",
  },
  {
    title: "AI Detection Mockup",
    caption: "Live frame with bounding boxes & confidence scores",
    image: ds360Dashboard,
    alt: "Deep Shield 360 command center landing interface",
  },
  {
    title: "Dashboard UI Sneak-Peek",
    caption: "Operator command-center interface",
    image: ds360Login,
    alt: "Deep Shield 360 operator DS-ID provisioning screen",
  },
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
              Category: <span className="text-foreground">AI/ML</span>
            </span>
          </div>
        </header>

        {/* Hero placeholder */}
        <figure className="mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300">
          <img
            src={ds360Hero}
            alt="Deep Shield 360 cinematic command vault with neon shield emblem"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </figure>

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

        {/* Author / sign-off */}
        <section className="mt-16 animate-fade-in rounded-2xl border border-border bg-card/60 p-6 sm:p-8 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Authored by
          </p>
          <p className="mt-2 font-display text-xl font-bold">Aritraa Chakraborty</p>
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

export default DeepShield360;