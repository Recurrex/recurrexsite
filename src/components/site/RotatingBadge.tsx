import logoImg from "@/assets/recurrex-logo.jpg";

export const RotatingBadge = () => (
  <a
    href="#top"
    aria-label="Recurrex — Turning Vision into Code"
    className="fixed bottom-5 left-5 z-40 grid h-28 w-28 place-items-center sm:h-32 sm:w-32"
  >
    <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow">
      <defs>
        <path
          id="rec-circle"
          d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
        />
        <linearGradient id="rec-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--brand-1))" />
          <stop offset="50%" stopColor="hsl(var(--brand-3))" />
          <stop offset="100%" stopColor="hsl(var(--brand-4))" />
        </linearGradient>
      </defs>
      <text
        fill="url(#rec-grad)"
        style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", fontWeight: 600, letterSpacing: "4px" }}
      >
        <textPath href="#rec-circle" startOffset="0">
          TURNING VISION INTO CODE • TURNING VISION INTO CODE •
        </textPath>
      </text>
    </svg>
    <img
      src={logoImg}
      alt="Recurrex logo"
      className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover shadow-glow ring-2 ring-white/10"
    />
  </a>
);
