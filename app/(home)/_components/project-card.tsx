import { FaBoxesStacked } from "react-icons/fa6";
import Link from "next/link";

import { CardTitle } from "@/components/card-title";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";
import { ProjectCard as ProjCard } from "@/app/(routes)/projects/_components/project-card";
import { Button } from "@/components/ui/button";
interface ProjectCardProps {
  className?: string;
}

export const ProjectCard = ({ className }: ProjectCardProps) => {
  const thumbnails = projects.map((project) => project.images.thumbnail);
  return (
    <Card className={cn(className, "flex flex-col")}>
      <CardTitle
        title="Showcase"
        subtitle="Projects I've worked on."
        icon={FaBoxesStacked}
      />
      <CardContent className="flex-1 justify-self-center">
        <Carousel
          opts={{
            loop: true,
          }}
          className="h-full"
        >
          <CarouselContent className="h-full flex items-center">
            {projects.map((data) => (
              <CarouselItem
                key={crypto.randomUUID()}
                className="cursor-pointer h-full text-center"
              >
                <ProjCard
                  data={data}
                  secondary
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
      <CardFooter className="flex items-center justify-end">
        <Button
          variant="link"
          asChild
        >
          <Link
            href="/projects"
            className="flex items-center"
          >
            <FaBoxesStacked className="h-4 w-4 mr-2" />
            View All Projects
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
