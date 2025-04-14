
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProjectSortProps {
  onSortChange: (value: string) => void;
  currentSort: string;
}

const ProjectSort = ({ onSortChange, currentSort }: ProjectSortProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Sort by:</span>
      <Select value={currentSort} onValueChange={onSortChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select order" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="featured">Featured First</SelectItem>
          <SelectItem value="az">A-Z</SelectItem>
          <SelectItem value="za">Z-A</SelectItem>
          <SelectItem value="mostTags">Most Technologies</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProjectSort;
