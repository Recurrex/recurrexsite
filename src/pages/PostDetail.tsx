import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { POSTS, RECURREX_LOGO } from "@/data/posts";

const PostDetail = () => {
  const { id } = useParams();
  const post = POSTS.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container py-24 text-center">
          <p className="text-muted-foreground">Post not found.</p>
          <Link to="/posts" className="mt-4 inline-block text-brand-gradient">
            ← Back to posts
          </Link>
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="container py-12 md:py-20 max-w-3xl"
      >
        <Link
          to="/posts"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to posts
        </Link>

        <article className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <header className="flex items-center justify-between gap-3 px-6 pt-6">
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={post.authorPhoto}
                alt={post.author}
                className="h-11 w-11 rounded-full object-cover ring-2 ring-border"
              />
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate">{post.author}</p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Recurrex · {post.dateLabel}
                </p>
              </div>
            </div>
            <img
              src={RECURREX_LOGO}
              alt="Recurrex"
              className="h-9 w-9 rounded-full object-cover shadow-glow"
            />
          </header>

          <div className="px-6 pt-5">
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              {post.title}
            </h1>
          </div>

          {post.images[0] && (
            <div className="mt-5 w-full bg-muted">
              <img src={post.images[0]} alt={post.title} className="w-full h-auto object-cover" />
            </div>
          )}

          <div className="px-6 py-6 space-y-4 text-base leading-relaxed text-muted-foreground whitespace-pre-line">
            {post.caption}
          </div>

          {post.images[1] && (
            <div className="w-full bg-muted">
              <img src={post.images[1]} alt={`${post.title} 2`} className="w-full h-auto object-cover" />
            </div>
          )}

          {post.projectLink && (
            <div className="px-6 py-6">
              <Link
                to={post.projectLink.to}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium shadow-card transition-all hover:-translate-y-0.5 hover:shadow-glow"
              >
                {post.projectLink.label}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          )}
        </article>
      </motion.main>
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default PostDetail;
