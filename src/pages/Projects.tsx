
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="section-container">
          <h1 className="text-4xl font-bold mb-8">Projects</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Coming soon: A showcase of my cloud engineering and DevOps projects.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
