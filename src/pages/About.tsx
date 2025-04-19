import { useScrollToTop } from "@/hooks/useScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfessionalJourney from "@/components/about/ProfessionalJourney";
import BlogPlatformIcons from "@/components/blog/BlogPlatformIcons";
import { Download, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutPageProps } from "@/types/about";
import { memo } from "react";

const socialLinks = [
  {
    href: "https://github.com/JeevaByte",
    icon: <Github className="h-6 w-6" />,
    label: "GitHub Profile",
  },
  {
    href: "https://linkedin.com/in/jeevanantham-balakrishnan-567482109/",
    icon: <Linkedin className="h-6 w-6" />,
    label: "LinkedIn Profile",
  },
  {
    href: "https://medium.com/@jeevanantham-balakrishnan",
    icon: <Mail className="h-6 w-6" />,
    label: "Medium Profile",
  },
];

const About = memo(({ className = "" }: AboutPageProps) => {
  useScrollToTop();

  return (
    <div className={`min-h-screen ${className}`}>
      <Navbar />
      <main className="pt-20">
        <section className="section-container">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-4">
              I'm Jeevanantham Balakrishnan, a passionate Cloud Engineer currently pursuing my MSc in Cloud Computing 
              at the University of Leicester. My expertise spans AWS, Terraform, and containerization technologies, 
              with a focus on building scalable and efficient cloud infrastructure. I'm particularly interested in 
              multi-cloud architectures and infrastructure as code.
            </p>
            <BlogPlatformIcons className="mb-8" />
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <div 
                className="bg-card rounded-xl overflow-hidden border sticky top-24 hover:shadow-lg transition-all duration-300"
                role="complementary"
                aria-label="Profile Information"
              >
                <div className="relative group">
                  <img 
                    src="/images/profile-photo.jpg" 
                    alt="Jeevanantham Balakrishnan" 
                    className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h2 className="font-bold text-xl mb-2">Cloud Engineer</h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    MSc Cloud Computing | AWS Solutions Architect Associate | HashiCorp Certified: Terraform Associate
                  </p>
                  
                  <div className="flex space-x-4" role="list" aria-label="Social Media Links">
                    {socialLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={link.label}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    <Button 
                      className="w-full bg-cloud-blue hover:bg-cloud-darkBlue flex items-center gap-2" 
                      asChild
                    >
                      <a 
                        href="/resume/Jeevanantham_Balakrishnan_Resume.pdf" 
                        download
                        aria-label="Download Resume"
                      >
                        <Download size={16} />
                        Download Resume
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center gap-2" 
                      asChild
                    >
                      <a 
                        href="mailto:jeeva.b1997@gmail.com?subject=Contact from Portfolio Website&body=Hi Jeevanantham,%0D%0A%0D%0AI came across your portfolio website and would like to connect with you regarding..."
                        aria-label="Contact via Email"
                      >
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
});

About.displayName = "About";

export default About;
