import { Github, Linkedin, Mail, BookOpen, Code2, Newspaper, Globe, Coffee } from "lucide-react";

interface BlogPlatformIconsProps {
  className?: string;
  iconSize?: number;
}

const BlogPlatformIcons = ({ className = "", iconSize = 24 }: BlogPlatformIconsProps) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <a
        href="https://github.com/JeevaByte"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
        title="GitHub"
      >
        <Github size={iconSize} />
      </a>
      <a
        href="https://dev.to/jeeva0406"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
        title="Dev.to"
      >
        <Code2 size={iconSize} />
      </a>
      <a
        href="https://medium.com/@jeevaawsclodejourney"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
        title="Medium"
      >
        <Newspaper size={iconSize} />
      </a>
      <a
        href="https://hashnode.com/@JeevaDevOpsByte"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
        title="Hashnode"
      >
        <BookOpen size={iconSize} />
      </a>
      <a
        href="https://jeevabyte.github.io"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
        title="GitHub Pages"
      >
        <Globe size={iconSize} />
      </a>
      <a
        href="https://www.freecodecamp.org/jeevabyte"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
        title="freeCodeCamp"
      >
        <Coffee size={iconSize} />
      </a>
    </div>
  );
};

export default BlogPlatformIcons; 