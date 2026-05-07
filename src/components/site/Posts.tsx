import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { POSTS, RECURREX_LOGO } from "@/data/posts";

export const Posts = () => {
  const visible = POSTS.slice(0, 3);

  return (
    <section id="posts" className="container py-20 md:py-28 scroll-mt-20">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">04 / Posts</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            New posts
          </h2>
        </div>
        <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Link
              to="/posts"
              className="group gradient-border relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-center justify-between gap-3 px-5 pt-5">
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={post.authorPhoto}
                    alt={post.author}
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-border"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate">{post.author}</p>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      Recurrex
                    </p>
                  </div>
                </div>
                <img
                  src={RECURREX_LOGO}
                  alt="Recurrex"
                  className="h-8 w-8 rounded-full object-cover shadow-glow"
                />
              </div>

              <div className="px-5 pt-4">
                <h3 className="font-display text-xl font-bold leading-snug">{post.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                  {post.caption}
                </p>
              </div>

              <div className="mt-4 mx-5 mb-5 relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted">
                <img
                  src={post.images[0]}
                  alt={post.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <ArrowUpRight className="absolute right-3 top-3 h-5 w-5 text-foreground/70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          to="/posts"
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
        >
          View all posts
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};