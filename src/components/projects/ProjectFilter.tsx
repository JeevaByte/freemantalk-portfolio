
import { useState } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ProjectFilterProps {
  tags: string[];
  onFilterChange: (selectedTags: string[], searchTerm: string) => void;
}

const ProjectFilter = ({ tags, onFilterChange }: ProjectFilterProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleTagClick = (tag: string) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    
    setSelectedTags(updatedTags);
    onFilterChange(updatedTags, searchTerm);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onFilterChange(selectedTags, e.target.value);
  };

  const handleClearFilters = () => {
    setSelectedTags([]);
    setSearchTerm("");
    onFilterChange([], "");
  };

  return (
    <div className="mb-10 space-y-6">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full pl-10"
        />
        <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      </div>
      
      {tags.length > 0 && (
        <div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                size="sm"
                className={selectedTags.includes(tag) ? "bg-cloud-blue hover:bg-cloud-darkBlue" : ""}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </Button>
            ))}
            
            {(selectedTags.length > 0 || searchTerm) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearFilters}
              >
                Clear filters
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectFilter;
