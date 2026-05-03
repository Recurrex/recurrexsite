import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, UploadCloud } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { RotatingBadge } from "@/components/site/RotatingBadge";
import { PROJECTS } from "@/data/projects";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  const fallbackName = (slug ?? "")
    .split("-")
    .map((s) => s[0]?.toUpperCase() + s.slice(1))
    .join(" ");

  const name = project?.name ?? fallbackName ?? "Project";
  const desc = project?.desc ?? "";
  const hue = project?.hue ?? "from-brand-1/30 to-brand-3/30";

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      <main className="container py-12 md:py-20 max-w-3xl">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        {/* Title */}
        <header className="mt-8 animate-fade-in">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Project</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {name}
          </h1>
          {desc && (
            <p className="mt-5 text-lg text-muted-foreground">{desc}</p>
          )}

          {/* Metadata */}
          {project && (
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Created {formatDate(project.createdAt)}
              </span>
              <span className="inline-flex items-center gap-2">
                <UploadCloud className="h-4 w-4" />
                Uploaded {formatDate(project.uploadedAt)}
              </span>
            </div>
          )}
        </header>

        {/* Featured image placeholder */}
        <div
          className={`mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${hue} transition-colors duration-300`}
        >
          <div className="grid h-full w-full place-items-center">
            <span className="font-display text-5xl font-bold text-foreground/10">
              {name.split(" ")[0]}
            </span>
          </div>
        </div>

        {/* Blog body — content blocks (placeholders for future content) */}
        <article className="mt-12 space-y-10">
          <Block heading="Overview">
            <p>
              Add the project overview here. This block is a placeholder ready
              for future content — describe the problem, the audience, and the
              outcome you are aiming for.
            </p>
          </Block>

          <ImagePlaceholder caption="Featured image / screenshot" />

          <Block heading="Approach">
            <p>
              Drop in the technical approach, key decisions, and stack details.
              You can stack as many of these text blocks as needed.
            </p>
          </Block>

          <ImagePlaceholder caption="Diagram or in-progress shot" />

          <Block heading="Notes">
            <p>
              Use this section for anything else — links, credits, reflections,
              or follow-up plans.
            </p>
          </Block>
        </article>
      </main>

      <Footer />
      <RotatingBadge />
      <ThemeToggle />
    </div>
  );
};

const Block = ({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) => (
  <section className="animate-fade-in">
    <h2 className="font-display text-2xl sm:text-3xl font-bold">{heading}</h2>
    <div className="mt-4 text-base leading-relaxed text-muted-foreground">
      {children}
    </div>
  </section>
);

const ImagePlaceholder = ({ caption }: { caption: string }) => (
  <figure className="overflow-hidden rounded-2xl border border-border bg-muted transition-colors duration-300">
    <div className="aspect-[16/9] w-full grid place-items-center">
      <span className="text-sm text-muted-foreground">{caption}</span>
    </div>
  </figure>
);

export default ProjectDetail;
