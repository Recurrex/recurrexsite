import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Crew } from "@/components/site/Crew";
import { Projects } from "@/components/site/Projects";
import { Achievements } from "@/components/site/Achievements";
import { Footer } from "@/components/site/Footer";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { RotatingBadge } from "@/components/site/RotatingBadge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Crew />
        <Projects />
        <Achievements />
      </main>
      <Footer />
      <RotatingBadge />
      <ThemeToggle />
    </div>
  );
};

export default Index;
