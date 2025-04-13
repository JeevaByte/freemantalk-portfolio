
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="section-container">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Coming soon: Articles and tutorials on cloud engineering, DevOps, and more.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
