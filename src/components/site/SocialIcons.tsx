import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import type { ReactNode } from "react";

const XIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden="true">
    <path d="M18.244 2H21l-6.52 7.45L22.5 22h-6.84l-5.36-6.99L4.2 22H1.44l6.98-7.97L1.5 2h6.99l4.84 6.4L18.244 2Zm-1.2 18h1.86L7.05 4H5.1l11.94 16Z" />
  </svg>
);

type Social = { href: string; label: string; Icon: (p: { className?: string }) => ReactNode };

export const socials: Social[] = [
  { href: "https://github.com/Recurrex", label: "GitHub", Icon: (p) => <Github className={p.className} /> },
  { href: "https://linkedin.com/company/recurrexhq/", label: "LinkedIn", Icon: (p) => <Linkedin className={p.className} /> },
  { href: "https://instagram.com/recurrex", label: "Instagram", Icon: (p) => <Instagram className={p.className} /> },
  { href: "https://x.com/recurrex", label: "X", Icon: (p) => <XIcon className={p.className} /> },
  { href: "https://facebook.com/recurrex", label: "Facebook", Icon: (p) => <Facebook className={p.className} /> },
];

export const SocialIcons = ({ size = "md" }: { size?: "sm" | "md" }) => {
  const sz = size === "sm" ? "h-9 w-9" : "h-10 w-10";
  const ic = size === "sm" ? "h-4 w-4" : "h-[18px] w-[18px]";
  return (
    <div className="flex items-center gap-2">
      {socials.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`${sz} relative grid place-items-center rounded-full bg-card text-foreground border border-border transition-all duration-200 hover:-translate-y-0.5 hover:text-accent hover:border-transparent gradient-border`}
        >
          <Icon className={ic} />
        </a>
      ))}
    </div>
  );
};
