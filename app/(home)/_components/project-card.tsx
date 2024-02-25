import { CardTitle } from "@/components/card-title";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import { FaBoxesStacked } from "react-icons/fa6";

interface ProjectCardProps {
  className?: string;
}

export const ProjectCard = ({ className }: ProjectCardProps) => {
  return (
    <Card className={cn(className, "bg-transparent")}>
      <CardTitle
        title="Showcase"
        subtitle="Projects I've worked on."
        icon={FaBoxesStacked}
      />
    </Card>
  );
};
