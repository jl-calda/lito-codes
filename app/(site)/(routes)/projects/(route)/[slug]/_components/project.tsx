import Link from "next/link";

import { CardBanner } from "@/components/card-banner";
import { CardTitle } from "@/components/card-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Project as ProjectType } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectProps {
  data: ProjectType;
  className?: string;
}

export const Project = ({ data, className }: ProjectProps) => {
  return (
    <Card className={cn("relative", className)}>
      <CardTitle
        title={data.name}
        subtitle={data.description}
      />
      <CardContent className="flex items-center justify-end">
        <Button
          variant="link"
          asChild
          className="text-muted-foreground font-mono text-xs"
        >
          <Link
            href={data.live}
            target="_blank"
          >
            {data.live}
          </Link>
        </Button>
      </CardContent>
      <CardBanner text="Project Details" />
    </Card>
  );
};
