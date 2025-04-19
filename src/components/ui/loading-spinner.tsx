import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
  size?: number;
}

const LoadingSpinner = ({ className, size = 24 }: LoadingSpinnerProps) => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <Loader2
        className={cn("animate-spin text-cloud-blue", className)}
        size={size}
      />
    </div>
  );
};

export default LoadingSpinner; 