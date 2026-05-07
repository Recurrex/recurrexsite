import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import CrewMember from "./pages/CrewMember.tsx";
import Crew from "./pages/Crew.tsx";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import ProjectsGallery from "./pages/Projects.tsx";
import DeepShield360 from "./pages/DeepShield360.tsx";
import Velo from "./pages/Velo.tsx";
import About from "./pages/About.tsx";
import Posts from "./pages/Posts.tsx";
import PostDetail from "./pages/PostDetail.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/crew/:slug" element={<CrewMember />} />
          <Route path="/projects" element={<ProjectsGallery />} />
          <Route path="/projects/deepsheild360" element={<DeepShield360 />} />
          <Route path="/projects/velo" element={<Velo />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
