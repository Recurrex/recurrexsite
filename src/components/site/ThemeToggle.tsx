import { Lightbulb } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggle}
      aria-pressed={!isDark}
      aria-label="Toggle theme"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full border border-border bg-card text-foreground shadow-card transition-all hover:scale-110 animate-pulse-glow"
    >
      <Lightbulb
        className={`h-6 w-6 transition-all duration-300 ${
          isDark ? "text-muted-foreground" : "text-yellow-400 fill-yellow-300"
        }`}
      />
    </button>
  );
};
