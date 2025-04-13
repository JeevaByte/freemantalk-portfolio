
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="card-hover border border-border h-full flex flex-col">
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
        <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github size={16} />
            View Code
          </a>
        </Button>
        {project.demoUrl && (
          <Button size="sm" className="bg-cloud-blue hover:bg-cloud-darkBlue flex items-center gap-2" asChild>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
