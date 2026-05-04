import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Lightbulb,
  Users,
  Wrench,
  Trophy,
  Briefcase,
  Globe,
  MapPin,
  Rocket,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { RotatingBadge } from "@/components/site/RotatingBadge";
import { SocialIcons } from "@/components/site/SocialIcons";

const CREW = [
  "Aritraa Chakraborty",
  "Mainak Saha",
  "Abir Banik",
  "Ankit Kabiratna",
  "Joy Mukherjee",
];

const ABOUT_PROJECTS = [
  {
    name: "Silence Game",
    desc: "A high-stakes survival game built with HTML, vanilla JavaScript, and CSS3.",
    to: "/projects/silence-game",
  },
  {
    name: "Deep Shield 360",
    desc: "An AIML-driven video analysis software for intelligent surveillance and insights.",
    to: "/projects/deepsheild360",
  },
  {
    name: "Velo",
    desc: "An intelligent \"Snap & Dispatch\" platform developed by Recurrex.",
    to: "/projects/velo",
  },
  {
    name: "Future Innovations",
    desc: "We are constantly ideating our next build to tackle global issues.",
    to: "/projects",
  },
];

const MILESTONES = [
  "IEEE EDS Code2Console Game Development Competition 2026 — 🥈 1st Runner-Ups.",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="container py-12 md:py-20 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        {/* Hero */}
        <header className="mt-8 animate-fade-in">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">About</p>
          <h1 className="mt-3 flex items-center gap-3 text-5xl sm:text-6xl lg:text-7xl font-medium italic tracking-tight" style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}>
            <Rocket className="h-10 w-10 sm:h-12 sm:w-12 text-brand-gradient" />
            <span className="text-brand-gradient">Recurrex</span>
          </h1>
          <p className="mt-6 font-display text-xl sm:text-2xl font-semibold">
            Turning Vision into Code.
          </p>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Recurrex is a dynamic collective of innovators, engineers, and creators.
            We are a high-performance team that thrives on participating in global
            competitions and building technical solutions to real-world challenges.
            From rapid prototyping in 48-hour hackathons to developing long-term
            innovative projects, our mission is to build technology that makes a
            difference.
          </p>
        </header>

        <Divider />

        {/* What We Do */}
        <Section icon={<Lightbulb className="h-5 w-5" />} title="What We Do">
          <p className="text-muted-foreground leading-relaxed">
            We explore the boundaries of <strong className="text-foreground">AI</strong>,{" "}
            <strong className="text-foreground">Software Engineering</strong>, and{" "}
            <strong className="text-foreground">Modern Web Development</strong>. Our
            projects are born from curiosity and a drive to solve complex problems
            through clean code and creative thinking.
          </p>
        </Section>

        <Divider />

        {/* The Collective */}
        <Section icon={<Users className="h-5 w-5" />} title="The Collective">
          <ul className="grid gap-2 sm:grid-cols-2">
            {CREW.map((name) => (
              <li key={name}>
                <Link
                  to="/crew"
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-foreground/40 hover:bg-muted"
                >
                  <span className="h-2 w-2 rounded-full bg-brand-gradient" />
                  <span className="font-medium">{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Divider />

        {/* Projects in Development */}
        <Section icon={<Wrench className="h-5 w-5" />} title="Projects in Development">
          <ul className="space-y-3">
            {ABOUT_PROJECTS.map((p) => (
              <li key={p.name}>
                <Link
                  to={p.to}
                  className="block rounded-xl border border-border bg-card p-4 transition-colors hover:border-foreground/40 hover:bg-muted"
                >
                  <p className="font-display font-semibold">{p.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Divider />

        {/* Milestones */}
        <Section icon={<Trophy className="h-5 w-5" />} title="Milestone Highlights">
          <ul className="space-y-2">
            {MILESTONES.map((m) => (
              <li
                key={m}
                className="relative overflow-hidden rounded-xl border border-border bg-card p-4 pl-5"
              >
                <span className="absolute left-0 top-0 h-full w-1 bg-brand-gradient" />
                <p className="text-sm sm:text-base">{m}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Divider />

        {/* Work With Us */}
        <Section icon={<Briefcase className="h-5 w-5" />} title="Work With Us">
          <p className="text-muted-foreground leading-relaxed">
            We are a talent-driven group available for technical consulting and
            rapid product prototyping. If you have a problem that needs an
            innovative solution, let&apos;s build it together.
          </p>
        </Section>

        <Divider />

        {/* Follow Us */}
        <Section icon={<Globe className="h-5 w-5" />} title="Follow Us">
          <SocialIcons />
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            Based in: <span className="text-foreground font-medium">India</span>
          </p>
        </Section>

        <p className="mt-16 text-center font-display text-lg italic text-muted-foreground">
          Innovate. Build. Solve.
        </p>
      </main>

      <Footer />
      <RotatingBadge />
      <ThemeToggle />
    </div>
  );
};

const Divider = () => (
  <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
);

const Section = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="animate-fade-in">
    <h2 className="flex items-center gap-3 font-display text-2xl sm:text-3xl font-bold">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-gradient text-white">
        {icon}
      </span>
      {title}
    </h2>
    <div className="mt-5">{children}</div>
  </section>
);

export default About;