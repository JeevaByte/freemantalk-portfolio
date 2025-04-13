
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CertificationsTeaser from "@/components/home/CertificationsTeaser";
import CTA from "@/components/home/CTA";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <FeaturedProjects />
        <CertificationsTeaser />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
