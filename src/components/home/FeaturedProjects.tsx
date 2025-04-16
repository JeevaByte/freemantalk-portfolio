import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Multi-Cloud Architecture with Terraform",
      description: "A comprehensive Terraform project implementing a multi-cloud architecture across AWS, Azure, and Google Cloud Platform. Features include infrastructure as code, modular design, and cross-cloud networking.",
      tags: ["Terraform", "AWS", "Azure", "GCP", "Multi-Cloud", "IaC"],
      githubUrl: "https://github.com/JeevaByte/Multi-Cloud-Architecture-with-Terraform",
      demoUrl: "#"
    },
    {
      title: "Kubernetes Monitoring Solution",
      description: "Implemented a comprehensive monitoring stack for Kubernetes clusters with Prometheus, Grafana, and custom alerting.",
      tags: ["Kubernetes", "Prometheus", "Grafana", "Monitoring"],
      githubUrl: "https://github.com",
      demoUrl: "#"
    },
    {
      title: "Serverless ETL Pipeline",
      description: "Designed and deployed a serverless data processing pipeline using AWS Lambda, S3, and Glue for cost-effective data transformation.",
      tags: ["AWS", "Serverless", "ETL", "Lambda"],
      githubUrl: "https://github.com",
      demoUrl: "#"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl">
              Some of my recent work in cloud engineering and DevOps.
            </p>
          </div>
          <Button variant="ghost" className="hidden md:flex items-center" asChild>
            <Link to="/projects">
              View All Projects <ArrowUpRight size={18} className="ml-2" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover border border-border h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </Button>
                <Button size="sm" className="bg-cloud-blue hover:bg-cloud-darkBlue" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="md:hidden" asChild>
            <Link to="/projects">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
