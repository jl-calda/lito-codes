import { FaLaptopCode } from "react-icons/fa6";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StackIcons } from "@/components/stack-icons";

import { projects } from "@/data/projects";

export const Stack = () => {
  const stacks = Array.from(
    new Set(projects.flatMap((project) => project.stack))
  );
  return (
    <Card className="md:col-span-3">
      <CardHeader>
        <h3 className="text-xl font-semibold flex">
          <FaLaptopCode className="h-6 w-6 mr-2 text-primary" />
          Tech Stack
        </h3>
        <p className="text-muted-foreground text-sm">
          Current technologies I am using for my projects
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {stacks.map((tech) => (
            <Button
              key={crypto.randomUUID()}
              variant="secondary"
              className="rounded-lg flex items-center space-x-2"
            >
              <StackIcons technology={tech} />
              <p>{tech}</p>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
