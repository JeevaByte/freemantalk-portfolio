import { useScrollToTop } from "@/hooks/useScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPlatformIcons from "@/components/blog/BlogPlatformIcons";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutPageProps } from "@/types/about";
import { memo, lazy } from "react";

const AboutLazy = lazy(() => import("@/pages/About"));

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
              I’m a certified Cloud Engineer with over 7 years of experience architecting, automating, and optimizing AWS infrastructures. I specialize in Infrastructure as Code (Terraform, CloudFormation), container orchestration (Docker, Kubernetes), and cost-efficient multi-cloud strategies. Holding AWS Solutions Architect and Developer Associate certifications, I’m passionate about building scalable, resilient, and secure cloud systems that deliver real-world impact.
            </p>
            <BlogPlatformIcons className="mb-8" />
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <aside className="md:col-span-1">
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
                    7+ years experience | AWS Solutions Architect Associate | AWS Developer Associate | Terraform Associate
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
                      <a href="/resume/Jeevanantham_Balakrishnan_Resume.pdf" download aria-label="Download Resume">
                        <Download size={16} /> Download Resume
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full flex items-center gap-2" asChild>
                      <a
                        href="mailto:jeeva.b1997@gmail.com?subject=Contact from Portfolio Website&body=Hi Jeevanantham,%0D%0A%0D%0AI came across your portfolio website and would like to connect with you regarding..."
                        aria-label="Contact via Email"
                      >
                        <Mail size={16} /> Contact Me
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </aside>

            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold mb-6 text-primary">Professional Experience</h2>
              <ul className="space-y-10">
                <li>
                  <h3 className="text-xl font-semibold text-foreground">AWS Infrastructure Engineer</h3>
                  <p className="text-sm text-muted-foreground italic mb-2">
                    <span className="text-primary font-medium">Perficient Inc</span>, Chennai, India | Feb 2022 – Aug 2024
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground leading-relaxed">
                    <li>Architected and deployed scalable AWS solutions, improving platform reliability by 20%.</li>
                    <li>Automated infrastructure using Terraform and CloudFormation, reducing deployment time by 50%.</li>
                    <li>Integrated monitoring with Prometheus and Grafana, decreasing downtime by 15%.</li>
                    <li>Migrated legacy on-prem workloads to AWS, achieving 30% cost savings and zero data loss.</li>
                  </ul>
                </li>

                <li>
                  <h3 className="text-xl font-semibold text-foreground">AWS Operational Engineer</h3>
                  <p className="text-sm text-muted-foreground italic mb-2">
                    <span className="text-primary font-medium">Tata Consultancy Services</span>, Chennai, India | Mar 2021 – Feb 2022
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground leading-relaxed">
                    <li>Maintained high availability and security compliance for mission-critical AWS environments.</li>
                    <li>Reduced operational costs by 25% through effective resource optimization.</li>
                    <li>Resolved infrastructure incidents and ensured zero downtime for production systems.</li>
                  </ul>
                </li>

                <li>
                  <h3 className="text-xl font-semibold text-foreground">Big Data Engineer</h3>
                  <p className="text-sm text-muted-foreground italic mb-2">
                    <span className="text-primary font-medium">Wipro Limited</span>, Chennai, India | Nov 2018 – Jan 2021
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground leading-relaxed">
                    <li>Engineered real-time data pipelines using PySpark and AWS Glue, cutting processing time by 40%.</li>
                    <li>Ensured compliance with GDPR through secure data handling practices.</li>
                  </ul>
                </li>

                <li>
                  <h3 className="text-xl font-semibold text-foreground">System Engineer</h3>
                  <p className="text-sm text-muted-foreground italic mb-2">
                    <span className="text-primary font-medium">Cognizant Technology Solutions</span>, Chennai, India | Apr 2017 – Oct 2018
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground leading-relaxed">
                    <li>Managed cloud and on-prem infrastructure with 99.9% uptime across services.</li>
                    <li>Developed deployment automation scripts with Bash and PowerShell, reducing manual effort by 30%.</li>
                    <li>Improved incident resolution by 25% through proactive issue identification and RCA practices.</li>
                  </ul>
                </li>
              </ul>
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
