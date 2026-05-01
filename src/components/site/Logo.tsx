export const Logo = ({ className = "" }: { className?: string }) => (
  <a href="#top" className={`group inline-flex items-center gap-2 ${className}`} aria-label="Recurrex home">
    <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-gradient text-white font-display font-bold shadow-glow">
      R
    </span>
    <span className="font-display text-lg font-semibold tracking-tight hidden sm:inline">
      Recur<span className="text-brand-gradient">rex</span>
    </span>
  </a>
);
