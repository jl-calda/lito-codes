import { FaGithub, FaGlobe, FaLink } from "react-icons/fa6";
import Link from "next/link";

import { CardTitle } from "@/components/card-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface VisitProps {
  data: Project;
  className?: string;
}

export const Visit = ({ data, className }: VisitProps) => {
  return (
    <Card className={cn("", className)}>
      <CardTitle
        icon={FaLink}
        title="Visit the site"
        subtitle="Experience it yourself and check how I made it."
      />
      <CardContent className="">
        <div className="flex flex-row items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            asChild
          >
            <Link href={data.github}>
              <FaGithub className="w-4 h-4 mr-2" />
              Code Base
            </Link>
          </Button>
          <Button
            variant="default"
            size="sm"
            asChild
          >
            <Link href={data.live}>
              <FaGlobe className="w-4 h-4 mr-2" />
              Live Site
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
