import { ArrowDown } from "lucide-react";
import { SplatterBackdrop } from "./SplatterBackdrop";

export const Hero = () => (
  <section id="top" className="relative">
    <div className="container grid gap-10 py-12 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28">
      <div className="relative mx-auto w-full max-w-md aspect-square animate-fade-in">
        <SplatterBackdrop />
        <img
          src="/placeholder.svg"
          alt="Recurrex hero portrait"
          className="relative h-full w-full object-contain drop-shadow-2xl"
        />
      </div>

      <div className="animate-fade-in [animation-delay:120ms]">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
          Recurrex is a{" "}
          <span className="text-brand-gradient">dynamic collective</span> of
          innovators, engineers, and creators.
        </h1>

        <a
          href="#crew"
          className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors"
        >
          Scroll to explore
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </div>
  </section>
);
