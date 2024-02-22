import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  className?: string;
}

export const BlogCard = ({ className }: BlogCardProps) => {
  return <Card className={cn(className)}>BlogCard</Card>;
};
