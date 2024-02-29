"use client";

import { useRouter } from "next/navigation";
import { FaCubesStacked } from "react-icons/fa6";

import { CardTitle } from "@/components/card-title";
import { StackIcons } from "@/components/stack-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface TechnologiesProps {
  data: Project;
  className?: string;
}

export const Technologies = ({ data, className }: TechnologiesProps) => {
  const router = useRouter();
  const handleClick = (query: string) => {
    router.push(`/projects?stack_type=${query}`);
  };

  return (
    <Card className={cn("", className)}>
      <CardTitle
        icon={FaCubesStacked}
        title="Technologies Used"
        subtitle="I used the following technologies to build this project."
      />

      <CardContent className="flex flex-row flex-wrap gap-x-2 gap-y-2">
        {data.stack.map((tech) => (
          <Button
            variant="secondary"
            size="sm"
            key={crypto.randomUUID()}
            onClick={() => handleClick(tech)}
          >
            <StackIcons
              technology={tech}
              className="rounded-lg mr-2"
            />
            {tech}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};
