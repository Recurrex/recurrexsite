import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/site/ThemeToggle";

const Placeholder = () => {
  const { slug } = useParams();
  const name = (slug ?? "")
    .split("-")
    .map((s) => s[0]?.toUpperCase() + s.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-20">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>
        <div className="mt-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Project</p>
          <h1 className="mt-2 font-display text-5xl font-bold">{name || "Project"}</h1>
          <p className="mt-6 text-muted-foreground">
            Project details page coming soon.
          </p>
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Placeholder;
