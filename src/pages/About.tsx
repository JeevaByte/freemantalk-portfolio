import { useScrollToTop } from "@/hooks/useScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPlatformIcons from "@/components/blog/BlogPlatformIcons";
import { Download, Github, Linkedin, Mail } from "lucide-react";
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
              As a Cloud Engineer with over seven years of hands-on experience, I design and automate AWS infrastructures using Terraform and CloudFormation, deploy resilient containerized applications with Docker and Kubernetes, and implement multi-cloud strategies. I’m AWS Certified (Solutions Architect – Associate, Developer – Associate) and HashiCorp Certified: Terraform Associate. My passion lies in building scalable, secure, and cost-effective cloud solutions that drive real-world impact.
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
              <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
              <ul className="space-y-8 text-muted-foreground">
                <li>
                  <h3 className="text-xl font-medium">AWS Infrastructure Engineer</h3>
                  <p className="italic text-sm mb-2">Perficient Inc, Chennai, India | Feb 2022 – Aug 2024</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Designed and implemented scalable AWS infrastructure, improving reliability by 20%.</li>
                    <li>Automated provisioning with Terraform and CloudFormation, cutting deployment times by 50%.</li>
                    <li>Integrated monitoring with Prometheus and Grafana, reducing downtime by 15%.</li>
                    <li>Led migration of legacy on-premises workloads to AWS, achieving 30% cost savings with zero data loss.</li>
                  </ul>
                </li>

                <li>
                  <h3 className="text-xl font-medium">AWS Operational Engineer</h3>
                  <p className="italic text-sm mb-2">Tata Consultancy Services, Chennai, India | Mar 2021 – Feb 2022</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Ensured high availability and security compliance for enterprise AWS applications.</li>
                    <li>Optimized resource usage, reducing cloud expenditure by 25%.</li>
                    <li>Resolved critical infrastructure issues, ensuring uninterrupted operations.</li>
                  </ul>
                </li>

                <li>
                  <h3 className="text-xl font-medium">Big Data Engineer</h3>
                  <p className="italic text-sm mb-2">Wipro Limited, Chennai, India | Nov 2018 – Jan 2021</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Built real-time data pipelines with PySpark and AWS Glue, reducing processing times by 40%.</li>
                    <li>Ensured data security and compliance with GDPR standards.</li>
                  </ul>
                </li>

                <li>
                  <h3 className="text-xl font-medium">System Engineer</h3>
                  <p className="italic text-sm mb-2">Cognizant Technology Solutions, Chennai, India | Apr 2017 – Oct 2018</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Managed day-to-day operations and maintenance of on-premises and cloud infrastructure, ensuring 99.9% uptime.</li>
                    <li>Developed automation scripts using Bash and PowerShell to streamline deployments, reducing manual effort by 30%.</li>
                    <li>Collaborated with cross-functional teams to troubleshoot incidents and implement preventative solutions, improving MTTR by 25%.</li>
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
