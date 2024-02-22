import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

interface ProjectCardProps {
  className?: string;
}

export const ProjectCard = ({ className }: ProjectCardProps) => {
  return <Card className={cn(className)}>ProjectCard</Card>;
};
