import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Newspaper,
  GraduationCap,
  Briefcase,
  Rocket,
  Sparkles,
  Code2,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Globe,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { CREW, type SocialLink } from "@/data/crew";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2H21l-6.52 7.45L22.5 22h-6.84l-5.36-6.99L4.2 22H1.44l6.98-7.97L1.5 2h6.99l4.84 6.4L18.244 2Zm-1.2 18h1.86L7.05 4H5.1l11.94 16Z" />
  </svg>
);

const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.27 5.27 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 3.297c.593.516 1.487.498 2.06-.043.561-.547.518-1.428-.06-1.96l-3.502-3.296a5.55 5.55 0 0 0-2.78-1.29l2.218-2.395c.572-.589.561-1.518-.025-2.097a1.51 1.51 0 0 0-1.052-.434l-.437-.018zM20.811 13.01H10.66a1.43 1.43 0 0 0-1.443 1.422c0 .788.65 1.422 1.443 1.422h10.151c.793 0 1.439-.634 1.439-1.422a1.43 1.43 0 0 0-1.439-1.422z" />
  </svg>
);

const SocialIcon = ({ icon, className }: { icon: SocialLink["icon"]; className?: string }) => {
  switch (icon) {
    case "github":
      return <Github className={className} />;
    case "linkedin":
      return <Linkedin className={className} />;
    case "instagram":
      return <Instagram className={className} />;
    case "x":
      return <XIcon className={className} />;
    case "leetcode":
      return <LeetCodeIcon className={className} />;
    case "mail":
      return <Mail className={className} />;
    default:
      return <Globe className={className} />;
  }
};

const CrewMember = () => {
  const { slug } = useParams();
  const member = slug ? CREW[slug] : undefined;

  if (!member) {
    const fallbackName = (slug ?? "")
      .split("-")
      .map((s) => s[0]?.toUpperCase() + s.slice(1))
      .join(" ");
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="container py-20">
          <Link to="/#crew" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to crew
          </Link>
          <div className="mt-12 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Crew member</p>
            <h1 className="mt-2 font-display text-5xl font-bold">{fallbackName || "Member"}</h1>
            <p className="mt-6 text-muted-foreground">Individual portfolio page coming soon.</p>
          </div>
        </div>
        <Footer />
        <ThemeToggle />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Soft lavender/blue surface harmonized with brand-red accents */}
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-80"
          style={{
            background:
              "radial-gradient(1200px 600px at 10% -10%, hsl(240 60% 92% / 0.7), transparent 60%), radial-gradient(900px 500px at 90% 0%, hsl(260 70% 94% / 0.6), transparent 60%), linear-gradient(180deg, hsl(var(--background)), hsl(var(--background)))",
          }}
        />

        <div className="container py-12 md:py-16">
          <Link
            to="/#crew"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to crew
          </Link>

          {/* Profile header */}
          <section className="mt-8 grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
            <div className="relative mx-auto md:mx-0">
              <div className="absolute -inset-2 rounded-full bg-brand-gradient opacity-70 blur-md animate-spin-slow" aria-hidden />
              <div className="relative h-40 w-40 sm:h-48 sm:w-48 overflow-hidden rounded-full border-4 border-background shadow-card">
                <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{member.role}</p>
              <h1 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
                {member.name}
              </h1>
              {member.pronouns && (
                <p className="mt-2 text-sm text-muted-foreground">({member.pronouns})</p>
              )}
              <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-2">
                {member.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full bg-card text-muted-foreground border border-border transition-all hover:-translate-y-0.5 hover:text-accent hover:border-transparent gradient-border"
                  >
                    <SocialIcon icon={s.icon} className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Professional Summary */}
          <section className="mt-12">
            <SectionTitle icon={<Newspaper className="h-5 w-5" />} title="Professional Summary" />
            <div className="mt-4 rounded-2xl border border-border bg-card/80 p-6 md:p-8 shadow-card backdrop-blur">
              <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                {member.summary}
              </p>
            </div>
          </section>

          {/* Bento grid */}
          <section className="mt-10 grid gap-5 md:grid-cols-6">
            {/* Skills */}
            <Card className="md:col-span-3">
              <CardHeader icon={<Code2 className="h-5 w-5" />} title="Skills" />
              <div className="mt-4 space-y-3">
                {member.skills.map((g) => (
                  <div key={g.group}>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {g.group}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {g.items.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-border bg-background px-3 py-1 text-xs"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Interests */}
            {member.interests && member.interests.length > 0 && (
              <Card className="md:col-span-3">
                <CardHeader icon={<Sparkles className="h-5 w-5" />} title="Interests" />
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.interests.map((i) => (
                    <span
                      key={i}
                      className="rounded-full bg-brand-gradient px-3 py-1 text-xs font-medium text-white"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </Card>
            )}

            {/* Education */}
            <Card className="md:col-span-6">
              <CardHeader icon={<GraduationCap className="h-5 w-5" />} title="Education" />
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {member.education.map((e) => (
                  <div
                    key={e.institution}
                    className="rounded-xl border border-border bg-background/60 p-4"
                  >
                    <div className="flex items-start gap-2">
                      <GraduationCap className="mt-0.5 h-4 w-4 text-accent" />
                      <div className="min-w-0">
                        <p className="font-medium leading-snug">{e.level}</p>
                        <p className="text-sm text-muted-foreground">{e.institution}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{e.period}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Experience */}
            <Card className="md:col-span-3">
              <CardHeader icon={<Briefcase className="h-5 w-5" />} title="Experience" />
              <div className="mt-4 space-y-4">
                {member.experience.map((x) => (
                  <div key={x.role + x.company} className="rounded-xl border border-border bg-background/60 p-4">
                    <p className="font-medium">{x.role}</p>
                    <p className="text-sm text-muted-foreground">
                      {x.company}
                      {x.period ? ` · ${x.period}` : ""}
                    </p>
                    <ul className="mt-2 list-disc pl-5 text-sm text-foreground/85 space-y-1">
                      {x.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>

            {/* Projects */}
            <Card className="md:col-span-3">
              <CardHeader icon={<Rocket className="h-5 w-5" />} title="Projects" />
              <div className="mt-4 space-y-3">
                {member.projects.map((p) => (
                  <div key={p.name} className="rounded-xl border border-border bg-background/60 p-4">
                    <p className="font-medium text-brand-gradient">{p.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </section>
        </div>
      </div>

      <Footer />
      <ThemeToggle />
    </div>
  );
};

const SectionTitle = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center gap-3">
    <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-gradient text-white shadow-glow">
      {icon}
    </span>
    <h2 className="font-display text-2xl sm:text-3xl font-bold">{title}</h2>
  </div>
);

const Card = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <div
    className={`rounded-2xl border border-border bg-card/80 p-6 shadow-card backdrop-blur ${className}`}
  >
    {children}
  </div>
);

const CardHeader = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center gap-2">
    <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-white">
      {icon}
    </span>
    <h3 className="font-display text-lg font-semibold">{title}</h3>
  </div>
);

export default CrewMember;
