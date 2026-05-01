import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { SocialIcons } from "./SocialIcons";

type NavItem = { label: string; href: string; to?: string };
const NAV: NavItem[] = [
  { label: "Home", href: "/#top" },
  { label: "Crew", href: "/#crew" },
  { label: "Projects", href: "/#projects" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Posts", href: "/#posts" },
  { label: "Connect", href: "/#connect" },
  { label: "About", href: "/about", to: "/about" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <nav className="hidden lg:flex items-center gap-5 text-sm text-muted-foreground">
          {NAV.map((n) =>
            n.to ? (
              <Link
                key={n.label}
                to={n.to}
                className="relative transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-brand-gradient after:transition-all hover:after:w-full"
              >
                {n.label}
              </Link>
            ) : (
              <a
                key={n.label}
                href={n.href}
                className="relative transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-brand-gradient after:transition-all hover:after:w-full"
              >
                {n.label}
              </a>
            )
          )}
        </nav>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className="flex-1 lg:flex-none flex justify-center">
          <Logo />
        </div>

        <div className="hidden md:block">
          <SocialIcons size="sm" />
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container flex flex-col py-4 gap-1">
            {NAV.map((n) =>
              n.to ? (
                <Link
                  key={n.label}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {n.label}
                </Link>
              ) : (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {n.label}
                </a>
              )
            )}
            <div className="pt-3 px-3 md:hidden">
              <SocialIcons size="sm" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
