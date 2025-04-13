
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Certifications = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="section-container">
          <h1 className="text-4xl font-bold mb-8">Certifications</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Coming soon: My professional certifications in cloud technologies.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Certifications;
