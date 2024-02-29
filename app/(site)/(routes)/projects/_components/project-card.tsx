import { Project } from "@/data/projects";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {
  FaArrowTurnDown,
  FaArrowTurnUp,
  FaGithub,
  FaGlobe,
} from "react-icons/fa6";
import { CardBanner } from "@/components/card-banner";
interface ProjectCardProps {
  data: Project;
  secondary?: boolean;
}

export const ProjectCard = ({ data, secondary = false }: ProjectCardProps) => {
  return (
    <Card>
      <CardContent className="p-2">
        <AspectRatio
          ratio={13 / 9}
          className="group md:h-auto cursor-pointer overflow-hidden shadow-md rounded-xl"
        >
          <Image
            src={data.images.thumbnail}
            alt={data.name}
            fill
            className="rounded-xl object-cover object-center"
          />
          <CardBanner
            text={data.slug}
            secondary={secondary}
          />
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 bg-foreground/40 backdrop-blur-md px-6 flex flex-col space-y-4 py-4">
            <Button
              variant="link"
              asChild
              className="w-fit p-0"
            >
              <Link href={`/projects/${data.slug}`}>
                <h2 className="text-base font-bold text-muted">{data.name}</h2>
              </Link>
            </Button>
            <p className="font-mono text-muted text-xs flex-1">
              {data.description}
            </p>
            <div className="flex items-center justify-between">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-muted"
              >
                <Link href={`/projects/${data.slug}`}>
                  <FaArrowTurnDown className="w-4 h-4" />
                </Link>
              </Button>
              <div className="flex flex-row items-center justify-center space-x-2">
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="text-muted"
                >
                  <Link
                    href={data.live}
                    target="_blank"
                  >
                    <FaGlobe className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="text-muted"
                >
                  <Link
                    href={data.github}
                    target="_blank"
                  >
                    <FaGithub className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </AspectRatio>
      </CardContent>
    </Card>
  );
};
