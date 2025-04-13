
import { BookOpen, Award, Briefcase, Heart, Coffee } from "lucide-react";

const ProfessionalJourney = () => {
  const experiences = [
    {
      title: "Senior Cloud Engineer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Leading cloud infrastructure design and implementation for enterprise clients. Architecting multi-region AWS deployments with high availability and disaster recovery capabilities.",
      technologies: ["AWS", "Terraform", "Kubernetes", "CI/CD", "Monitoring"]
    },
    {
      title: "Cloud Infrastructure Engineer",
      company: "Global Solutions Ltd.",
      period: "2018 - 2021",
      description: "Implemented and maintained cloud infrastructure on AWS and GCP. Designed serverless architectures for cost optimization and scalability.",
      technologies: ["AWS", "GCP", "CloudFormation", "Lambda", "Docker"]
    },
    {
      title: "DevOps Engineer",
      company: "Digital Platforms Co.",
      period: "2015 - 2018",
      description: "Automated deployment pipelines and infrastructure provisioning. Implemented monitoring and alerting systems for production environments.",
      technologies: ["Jenkins", "Ansible", "Docker", "Prometheus", "Git"]
    }
  ];

  const education = [
    {
      degree: "MSc in Cloud Computing",
      institution: "Tech University",
      period: "2019 - 2021",
      description: "Focused on advanced cloud architectures, security, and distributed systems."
    },
    {
      degree: "BSc in Computer Science",
      institution: "State University",
      period: "2011 - 2015",
      description: "Core computer science fundamentals with specialization in software engineering."
    }
  ];

  const funFacts = [
    "Contribute to open-source cloud infrastructure tools in my spare time",
    "Mentor junior cloud engineers through online communities",
    "Avid hiker who's climbed mountains in three continents",
    "Published technical articles on cloud architecture best practices"
  ];

  return (
    <div className="space-y-16">
      {/* Work Experience */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="text-cloud-blue" />
          <h2 className="text-2xl font-bold">Work Experience</h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="relative pl-10 pb-8 border-l border-border group-last:border-0">
                <div className="absolute left-0 top-0 -translate-x-1/2 h-6 w-6 rounded-full border-2 border-cloud-blue bg-background flex items-center justify-center">
                  <div className="h-2 w-2 bg-cloud-blue rounded-full"></div>
                </div>
                <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                    <h3 className="font-bold text-xl">{exp.title}</h3>
                    <span className="text-muted-foreground text-sm md:text-base">{exp.period}</span>
                  </div>
                  <p className="font-medium text-cloud-blue mb-3">{exp.company}</p>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="text-cloud-blue" />
          <h2 className="text-2xl font-bold">Education</h2>
        </div>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="group">
              <div className="relative pl-10 pb-8 border-l border-border group-last:border-0">
                <div className="absolute left-0 top-0 -translate-x-1/2 h-6 w-6 rounded-full border-2 border-cloud-blue bg-background flex items-center justify-center">
                  <div className="h-2 w-2 bg-cloud-blue rounded-full"></div>
                </div>
                <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                    <h3 className="font-bold text-xl">{edu.degree}</h3>
                    <span className="text-muted-foreground text-sm md:text-base">{edu.period}</span>
                  </div>
                  <p className="font-medium text-cloud-blue mb-3">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fun Facts */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Coffee className="text-cloud-blue" />
          <h2 className="text-2xl font-bold">Fun Facts</h2>
        </div>
        <div className="bg-card rounded-lg p-6 border">
          <ul className="space-y-3">
            {funFacts.map((fact, index) => (
              <li key={index} className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-cloud-blue mt-0.5 flex-shrink-0" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalJourney;
