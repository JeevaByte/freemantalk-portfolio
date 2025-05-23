import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left space-y-6 animate-fade-in">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-cloud-blue">
            Cloud Architect <span className="text-cloud-blue">& Data Specialist</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            FreemanTalk is your trusted partner in cloud architecture and data solutions. We specialize in empowering businesses with innovative, scalable, and secure cloud technologies to drive growth and operational excellence.
          </p>
          <p className="text-lg text-muted-foreground max-w-xl">
            Welcome to my portfolio! I am Jeevanantham Balakrishnan, a highly experienced Cloud Architect and Data Engineer with over 6 years of hands-on expertise in designing, developing, and optimizing scalable, secure, and high-performance cloud solutions. My focus lies in empowering businesses to unlock the full potential of cloud technologies, driving both innovation and operational excellence. Through strategic cloud architecture and automation, I help organizations improve their agility, reduce costs, and accelerate growth in an increasingly digital world.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button className="btn-primary" asChild>
              <Link to="/projects">
                View Projects <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" className="btn-outline" asChild>
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
            <Button variant="ghost" className="flex items-center" asChild>
              <a href="https://github.com/JeevaByte" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
              </a>
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cloud-blue to-purple-600 rounded-full blur opacity-75"></div>
            <div className="relative bg-card rounded-full overflow-hidden border border-border aspect-square">
              <img 
                src="/images/profile-photo.jpg" 
                alt="Jeevanantham Balakrishnan" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#skills" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
          <span className="mb-2 text-sm">Scroll Down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="7 13 12 18 17 13"></polyline>
            <polyline points="7 6 12 11 17 6"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
