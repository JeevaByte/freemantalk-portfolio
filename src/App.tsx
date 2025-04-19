import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import LoadingSpinner from "@/components/ui/loading-spinner";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";

// Lazy load components
const IndexLazy = lazy(() => import("@/pages/Index"));
const AboutLazy = lazy(() => import("@/pages/About"));
const ProjectsLazy = lazy(() => import("@/pages/Projects"));
const BlogLazy = lazy(() => import("@/pages/Blog"));
const BlogPostLazy = lazy(() => import("@/pages/BlogPost"));
const CertificationsLazy = lazy(() => import("@/pages/Certifications"));
const ContactLazy = lazy(() => import("@/pages/Contact"));
const NotFoundLazy = lazy(() => import("@/pages/NotFound"));
const AuthLazy = lazy(() => import("@/pages/Auth"));
const ProfileLazy = lazy(() => import("@/pages/Profile"));
const ProtectedRouteLazy = lazy(() => import("@/components/auth/ProtectedRoute"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<IndexLazy />} />
              <Route path="/about" element={<AboutLazy />} />
              <Route path="/projects" element={<ProjectsLazy />} />
              <Route path="/blog" element={<BlogLazy />} />
              <Route path="/blog/:slug" element={<BlogPostLazy />} />
              <Route path="/certifications" element={<CertificationsLazy />} />
              <Route path="/contact" element={<ContactLazy />} />
              <Route path="/auth" element={<AuthLazy />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRouteLazy>
                    <ProfileLazy />
                  </ProtectedRouteLazy>
                }
              />
              <Route path="*" element={<NotFoundLazy />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
