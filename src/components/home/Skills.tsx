
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillsData = [
    {
      category: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud", "Digital Ocean"]
    },
    {
      category: "Infrastructure as Code",
      skills: ["Terraform", "CloudFormation", "Pulumi", "Ansible"]
    },
    {
      category: "Containerization",
      skills: ["Docker", "Kubernetes", "EKS", "ECS"]
    },
    {
      category: "CI/CD",
      skills: ["GitHub Actions", "Jenkins", "CircleCI", "AWS CodePipeline"]
    },
    {
      category: "Programming",
      skills: ["Python", "Bash", "JavaScript", "Go"]
    },
    {
      category: "Monitoring",
      skills: ["Prometheus", "Grafana", "CloudWatch", "Datadog"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of technologies I've worked with across cloud engineering and DevOps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skillGroup, index) => (
            <Card key={index} className="card-hover overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-cloud-blue">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
