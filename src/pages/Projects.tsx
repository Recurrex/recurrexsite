import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { RotatingBadge } from "@/components/site/RotatingBadge";
import { PROJECTS } from "@/data/projects";

const ProjectsGallery = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      <main className="container py-12 md:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <header className="mt-8 max-w-3xl animate-fade-in">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Gallery</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
            Projects
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground">
            A growing showcase of what the Recurrex collective is shipping.
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="group gradient-border relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className={`relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br ${p.hue}`}>
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display text-5xl font-bold text-foreground/10">
                    {p.name.split(" ")[0]}
                  </span>
                </div>
                <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-foreground/60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="flex flex-col gap-3 p-5">
                <div>
                  <h2 className="font-display text-xl font-bold">{p.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-brand-gradient">
                  Click to view more
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
      <RotatingBadge />
      <ThemeToggle />
    </div>
  );
};

export default ProjectsGallery;
