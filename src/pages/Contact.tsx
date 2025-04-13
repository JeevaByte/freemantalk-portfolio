
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="section-container">
          <h1 className="text-4xl font-bold mb-8">Contact</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Coming soon: A form to get in touch with me.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
