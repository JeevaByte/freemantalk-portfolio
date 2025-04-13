
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CertificationCard from "@/components/certifications/CertificationCard";
import { certifications } from "@/data/certifications";

const Certifications = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="section-container">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">Certifications</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              My professional certifications in cloud technologies validate my expertise and 
              commitment to maintaining the highest standards in cloud engineering. Each certification 
              represents practical knowledge gained through hands-on experience.
            </p>
          </div>

          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Certifications;
