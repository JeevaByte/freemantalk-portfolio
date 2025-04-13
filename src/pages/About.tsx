
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfessionalJourney from "@/components/about/ProfessionalJourney";
import { Download, GitHub, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="section-container">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              I'm a passionate Cloud Engineer with over 6 years of experience building robust, 
              scalable infrastructure for companies of all sizes. My expertise spans AWS, GCP, 
              Kubernetes, and modern DevOps practices.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="bg-card rounded-xl overflow-hidden border sticky top-24">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Profile" 
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4">
                  <h2 className="font-bold text-xl mb-2">Cloud Engineer</h2>
                  <p className="text-muted-foreground text-sm mb-4">MSc Cloud Computing | AWS Certified | Terraform Associate</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <GitHub size={18} />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={18} />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter size={18} />
                      </a>
                    </Button>
                  </div>
                  
                  <Button className="w-full bg-cloud-blue hover:bg-cloud-darkBlue flex items-center gap-2">
                    <Download size={16} />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <ProfessionalJourney />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
