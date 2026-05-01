export const SplatterBackdrop = () => (
  <svg
    viewBox="0 0 600 600"
    className="absolute inset-0 h-full w-full -z-10 opacity-90 mix-blend-screen dark:mix-blend-screen"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="g1" cx="30%" cy="35%" r="50%">
        <stop offset="0%" stopColor="hsl(var(--brand-1))" stopOpacity="0.9" />
        <stop offset="100%" stopColor="hsl(var(--brand-1))" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="g2" cx="65%" cy="40%" r="45%">
        <stop offset="0%" stopColor="hsl(var(--brand-3))" stopOpacity="0.85" />
        <stop offset="100%" stopColor="hsl(var(--brand-3))" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="g3" cx="50%" cy="75%" r="50%">
        <stop offset="0%" stopColor="hsl(var(--brand-4))" stopOpacity="0.8" />
        <stop offset="100%" stopColor="hsl(var(--brand-4))" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="g4" cx="20%" cy="70%" r="40%">
        <stop offset="0%" stopColor="hsl(var(--brand-2))" stopOpacity="0.8" />
        <stop offset="100%" stopColor="hsl(var(--brand-2))" stopOpacity="0" />
      </radialGradient>
      <filter id="goo">
        <feGaussianBlur stdDeviation="22" />
      </filter>
    </defs>
    <g filter="url(#goo)">
      <circle cx="180" cy="200" r="140" fill="url(#g1)" />
      <circle cx="400" cy="240" r="160" fill="url(#g2)" />
      <circle cx="320" cy="430" r="170" fill="url(#g3)" />
      <circle cx="140" cy="420" r="120" fill="url(#g4)" />
      <circle cx="470" cy="430" r="80" fill="url(#g1)" />
      <circle cx="80" cy="300" r="60" fill="url(#g3)" />
    </g>
    {/* speckles */}
    <g opacity="0.7">
      {Array.from({ length: 22 }).map((_, i) => {
        const cx = (i * 73) % 600;
        const cy = (i * 131) % 600;
        const r = 2 + (i % 5);
        const fills = ["hsl(var(--brand-1))", "hsl(var(--brand-2))", "hsl(var(--brand-3))", "hsl(var(--brand-4))"];
        return <circle key={i} cx={cx} cy={cy} r={r} fill={fills[i % 4]} opacity={0.6} />;
      })}
    </g>
  </svg>
);
