
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  coverImage?: string;
  slug: string;
  notionPageId?: string;
}

const BlogPost = ({
  title,
  excerpt,
  date,
  author,
  readTime,
  tags,
  coverImage,
  slug,
}: BlogPostProps) => {
  return (
    <article className="bg-card border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {coverImage && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{excerpt}</p>
        
        <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-4 gap-y-2 mb-4">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            {author}
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            {readTime}
          </div>
        </div>
        
        <Button variant="outline" className="flex items-center justify-center gap-1 self-start" asChild>
          <Link to={`/blog/${slug}`}>
            Read Article
            <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </article>
  );
};

export default BlogPost;
