import logoImg from "@/assets/recurrex-logo.jpg";

export const Logo = ({ className = "" }: { className?: string }) => (
  <a href="#top" className={`group inline-flex items-center gap-2 ${className}`} aria-label="Recurrex home">
    <img
      src={logoImg}
      alt="Recurrex logo"
      className="h-10 w-10 rounded-full object-cover shadow-glow"
    />
    <span className="font-display text-lg font-semibold tracking-tight hidden sm:inline">
      Recur<span className="text-brand-gradient">rex</span>
    </span>
  </a>
);
