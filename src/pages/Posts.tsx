import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { POSTS, GALLERY, RECURREX_LOGO } from "@/data/posts";

const PAGE_SIZE = 6;

const Posts = () => {
  const [tab, setTab] = useState<"feed" | "gallery">("feed");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visiblePosts = useMemo(() => POSTS.slice(0, visibleCount), [visibleCount]);
  const hasMore = visibleCount < POSTS.length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="container py-16 md:py-24"
      >
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Posts & Gallery
            </p>
            <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
              Stories from the crew
            </h1>
          </div>
          <div className="inline-flex rounded-full border border-border bg-card p-1 shadow-card">
            {(["feed", "gallery"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 text-sm rounded-full transition-all capitalize ${
                  tab === t
                    ? "bg-brand-gradient text-white shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {tab === "feed" ? (
          <>
            <div className="mt-12 grid gap-6 grid-cols-2 lg:grid-cols-3">
              {visiblePosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                >
                <Link
                  to={`/posts/${post.id}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
                >
                  {/* Top: author */}
                  <header className="flex items-center justify-between gap-3 px-5 pt-5">
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={post.authorPhoto}
                        alt={post.author}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-border"
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
                      className="h-8 w-8 rounded-full object-cover shadow-glow"
                    />
                  </header>

                  {/* Middle: title + date */}
                  <div className="px-5 pt-4">
                    <h2 className="font-display text-xl sm:text-2xl font-bold leading-snug">
                      {post.title}
                    </h2>
                    <p className="mt-1 text-xs text-muted-foreground">{post.dateLabel}</p>
                  </div>

                  {/* Featured image */}
                  <div className="mt-4 relative w-full overflow-hidden bg-muted">
                    <img
                      src={post.images[0]}
                      alt={post.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Bottom: caption */}
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.caption.length > 160 ? post.caption.slice(0, 160).trim() + "…" : post.caption}
                    </p>
                  </div>

                  {/* Optional extra images */}
                  {post.images.length > 1 && (
                    <div className="px-5 pb-5 grid grid-cols-2 gap-3">
                      {post.images.slice(1, 3).map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt={`${post.title} ${idx + 2}`}
                          className="w-full h-40 object-cover rounded-lg border border-border"
                        />
                      ))}
                    </div>
                  )}
                </Link>
                </motion.div>
              ))}
            </div>

            {hasMore && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                  className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium shadow-card transition-all hover:-translate-y-0.5 hover:shadow-glow"
                >
                  <span className="md:hidden">View earlier</span>
                  <span className="hidden md:inline">View more</span>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {GALLERY.map((g, i) => (
              <motion.div
                key={`${g.postId}-${i}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
              >
                <Link
                  to={`/posts/${g.postId}`}
                  className="group relative block overflow-hidden rounded-xl border border-border bg-card shadow-card"
                >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={g.src}
                    alt={g.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white text-sm font-medium">
                  {g.title}
                </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </motion.main>
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default Posts;