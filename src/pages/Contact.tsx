import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";
import { Calendar, Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialMediaIntegration from "@/components/social/SocialMediaIntegration";
import { useAuth } from "@/hooks/useAuth";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showSocialIntegration, setShowSocialIntegration] = useState(false);
  const { isAdmin } = useAuth();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="section-container">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">Contact</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Have a project idea or need cloud engineering expertise? I'd love to hear from you.
              Fill out the form below or reach out through any of my social channels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <ContactForm />
              
              {isAdmin && (
                <div className="mt-10 mb-6 border-t pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Social Media Integration</h2>
                  <p className="text-muted-foreground mb-4">
                    Connect your Medium and LinkedIn accounts to automatically cross-post your blog content.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowSocialIntegration(!showSocialIntegration)}
                    className="mb-4"
                  >
                    {showSocialIntegration ? "Hide Integration Options" : "Show Integration Options"}
                  </Button>
                  
                  {showSocialIntegration && <SocialMediaIntegration />}
                </div>
              )}
            </div>
            
            <div className="space-y-6">
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cloud-blue mt-1" />
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-cloud-blue mt-1" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">hello@cloudportfolio.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-cloud-blue mt-1" />
                    <div>
                      <h4 className="font-medium">Schedule a Call</h4>
                      <Button variant="link" className="px-0" asChild>
                        <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                          Book a time on Calendly
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github size={18} />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin size={18} />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <Twitter size={18} />
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-4">Resume</h3>
                <p className="text-muted-foreground mb-4">
                  Download my detailed resume to learn more about my skills and experience.
                </p>
                <Button className="w-full bg-cloud-blue hover:bg-cloud-darkBlue">Download CV</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
