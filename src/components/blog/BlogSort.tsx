
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BlogSortProps {
  onSortChange: (value: string) => void;
  currentSort: string;
}

const BlogSort = ({ onSortChange, currentSort }: BlogSortProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Sort by:</span>
      <Select value={currentSort} onValueChange={onSortChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select order" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Newest First</SelectItem>
          <SelectItem value="oldest">Oldest First</SelectItem>
          <SelectItem value="az">A-Z</SelectItem>
          <SelectItem value="za">Z-A</SelectItem>
          <SelectItem value="readTime">Read Time</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default BlogSort;
