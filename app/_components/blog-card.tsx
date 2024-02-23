import { FaBlogger } from "react-icons/fa6";

import { CardTitle } from "@/components/card-title";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  className?: string;
}

export const BlogCard = ({ className }: BlogCardProps) => {
  return (
    <Card className={cn(className)}>
      <CardTitle
        title="Latest posts"
        subtitle="Documenting my learnings and journey in tech."
        icon={FaBlogger}
      />
    </Card>
  );
};
