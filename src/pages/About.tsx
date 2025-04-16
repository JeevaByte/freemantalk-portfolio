import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfessionalJourney from "@/components/about/ProfessionalJourney";
import { Download, Github, Linkedin, Twitter, Mail } from "lucide-react";
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
              I'm Jeevanantham Balakrishnan, a passionate Cloud Engineer currently pursuing my MSc in Cloud Computing 
              at the University of Leicester. My expertise spans AWS, Terraform, and containerization technologies, 
              with a focus on building scalable and efficient cloud infrastructure. I'm particularly interested in 
              multi-cloud architectures and infrastructure as code.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="bg-card rounded-xl overflow-hidden border sticky top-24 hover:shadow-lg transition-all duration-300">
                <div className="relative group">
                  <img 
                    src="/images/profile-photo.jpg" 
                    alt="Jeevanantham Balakrishnan" 
                    className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h2 className="font-bold text-xl mb-2">Cloud Engineer</h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    MSc Cloud Computing | AWS Solutions Architect Associate | HashiCorp Certified: Terraform Associate
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Button variant="outline" size="icon" asChild className="hover:bg-cloud-blue hover:text-white transition-colors">
                      <a href="https://github.com/jeevanantham-balakrishnan" target="_blank" rel="noopener noreferrer">
                        <Github size={18} />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild className="hover:bg-blue-600 hover:text-white transition-colors">
                      <a href="https://linkedin.com/in/jeevanantham-balakrishnan" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={18} />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild className="hover:bg-sky-500 hover:text-white transition-colors">
                      <a href="https://twitter.com/jeevanantham_b" target="_blank" rel="noopener noreferrer">
                        <Twitter size={18} />
                      </a>
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <Button className="w-full bg-cloud-blue hover:bg-cloud-darkBlue flex items-center gap-2" asChild>
                      <a href="/resume/Jeevanantham_Balakrishnan_Resume.pdf" download>
                        <Download size={16} />
                        Download Resume
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full flex items-center gap-2" asChild>
                      <a href="mailto:jeeva.b1997@gmail.com?subject=Contact from Portfolio Website&body=Hi Jeevanantham,%0D%0A%0D%0AI came across your portfolio website and would like to connect with you regarding...">
                        <Mail size={16} />
                        Contact Me
                      </a>
                    </Button>
                  </div>
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
