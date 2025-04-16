import { BookOpen, Award, Briefcase, Heart, Coffee, Code, Cloud, Server, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProfessionalJourney = () => {
  const experiences = [
    {
      title: "Cloud Engineer",
      company: "University of Leicester",
      period: "2023 - Present",
      description: "Currently pursuing MSc in Cloud Computing, focusing on advanced cloud architectures, infrastructure as code, and cloud security. Working on multi-cloud projects and implementing scalable cloud solutions.",
      technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "CI/CD"],
      achievements: [
        "Implementing multi-cloud architectures using AWS, Azure, and GCP",
        "Developing infrastructure as code using Terraform",
        "Containerizing applications using Docker and Kubernetes",
        "Setting up CI/CD pipelines for automated deployments"
      ]
    },
    {
      title: "Multi-Cloud Architecture Project",
      company: "Personal Project",
      period: "2023 - Present",
      description: "Developed a comprehensive Terraform project implementing multi-cloud architecture across AWS, Azure, and Google Cloud Platform. Features include infrastructure as code, modular design, and cross-cloud networking.",
      technologies: ["Terraform", "AWS", "Azure", "GCP", "Multi-Cloud", "IaC"],
      githubUrl: "https://github.com/jeevanantham-balakrishnan/multi-cloud-architecture",
      achievements: [
        "Implemented cross-cloud networking between AWS, Azure, and GCP",
        "Created reusable Terraform modules for infrastructure components",
        "Set up monitoring and logging across multiple cloud providers",
        "Implemented security best practices across all cloud platforms"
      ]
    }
  ];

  const education = [
    {
      degree: "MSc in Cloud Computing",
      institution: "University of Leicester",
      period: "2023 - Present",
      description: "Specializing in cloud architecture, infrastructure as code, and cloud security. Focus on practical implementation of cloud solutions and best practices.",
      courses: [
        "Cloud Architecture and Design",
        "Infrastructure as Code",
        "Cloud Security",
        "Containerization and Orchestration",
        "DevOps Practices"
      ]
    },
    {
      degree: "BSc in Computer Science",
      institution: "Sastra University",
      period: "2019 - 2023",
      description: "I have completed my BSc in Computer Science with a focus on software engineering and database systems.",
      courses: [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Database Systems",
        "Software Engineering"
      ]
    }
  ];

  const skills = [
    {
      category: "Cloud Platforms",
      items: ["AWS", "Azure"],
      icon: Cloud
    },
    {
      category: "Infrastructure as Code",
      items: ["Terraform", "CloudFormation", "ARM Templates"],
      icon: Code
    },
    {
      category: "Containerization",
      items: ["Docker", "Kubernetes", "ECS", "EKS"],
      icon: Server
    },
    {
      category: "Databases",
      items: ["RDS", "DynamoDB", "Cosmos DB", " SQL"],
      icon: Database
    }
  ];

  const funFacts = [
    {
      text: "Passionate about building scalable cloud infrastructure",
      icon: Cloud
    },
    {
      text: "Active contributor to cloud infrastructure projects",
      icon: Code
    },
    {
      text: "Enjoys learning and implementing new cloud technologies",
      icon: Server
    },
    {
      text: "Interested in cloud security and best practices",
      icon: Award
    }
  ];

  return (
    <div className="space-y-16">
      {/* Work Experience */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="text-cloud-blue" />
          <h2 className="text-2xl font-bold">Experience</h2>
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
                  
                  {exp.achievements && (
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {exp.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={exp.githubUrl} target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </Button>
                  )}
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
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  
                  {edu.courses && (
                    <div>
                      <h4 className="font-semibold mb-2">Relevant Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, idx) => (
                          <span 
                            key={idx}
                            className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Award className="text-cloud-blue" />
          <h2 className="text-2xl font-bold">Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-card rounded-lg p-4 border shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <skill.icon className="text-cloud-blue mt-1" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                      <span 
                        key={idx}
                        className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fun Facts */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Heart className="text-cloud-blue" />
          <h2 className="text-2xl font-bold">Fun Facts</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {funFacts.map((fact, index) => (
            <div key={index} className="bg-card rounded-lg p-4 border shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <fact.icon className="text-cloud-blue mt-1" size={20} />
                <p className="text-muted-foreground">{fact.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfessionalJourney;
