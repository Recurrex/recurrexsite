import { Mail } from "lucide-react";
import { SocialIcons } from "./SocialIcons";

export const Footer = () => (
  <footer id="connect" className="border-t border-border bg-card/40 mt-10">
    <div className="container py-14 grid gap-10 md:grid-cols-2 md:items-start">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Connect on social</p>
        <div className="mt-4">
          <SocialIcons />
        </div>
      </div>

      <div className="md:text-right">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Say hello</p>
        <a
          href="mailto:recurrex.ofc@gmail.com"
          className="mt-4 inline-flex items-center gap-2 font-display text-2xl sm:text-3xl font-semibold hover:text-brand-gradient transition-colors"
        >
          <Mail className="h-5 w-5" />
          recurrex.ofc@gmail.com
        </a>
      </div>
    </div>

    <div className="border-t border-border">
      <p className="container py-6 text-center text-xs text-muted-foreground">
        © 2026 Recurrex. All Rights Reserved.
      </p>
    </div>
  </footer>
);
