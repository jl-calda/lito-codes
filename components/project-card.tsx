import { Project } from "@/data/projects";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import {
  FaArrowTurnDown,
  FaArrowTurnUp,
  FaGithub,
  FaGlobe,
} from "react-icons/fa6";
import { CardBanner } from "./card-banner";
interface ProjectCardProps {
  data: Project;
}

export const ProjectCard = ({ data }: ProjectCardProps) => {
  return (
    <AspectRatio
      ratio={13 / 9}
      className="group h-64 md:h-auto cursor-pointer overflow-hidden shadow-md rounded-xl"
    >
      <Image
        src={data.images.thumbnail}
        alt={data.name}
        fill
        className="rounded-xl object-cover object-center"
      />
      <CardBanner
        text={data.slug}
        secondary
      />
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 bg-foreground/35 backdrop-blur-md px-6 flex flex-col space-y-4 py-4">
        <h2 className="text-base font-bold text-white">{data.name}</h2>

        <p className="font-mono text-white text-xs flex-1">
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

    // <Card className="bg-secondary">
    //   <CardHeader className="px-10 pt-10">
    //     <AspectRatio ratio={1269 / 940}>
    //       <Image
    //         src={data.images.thumbnail}
    //         alt={data.name}
    //         fill
    //         className="rounded-xl group-hover:hidden object-cover object-center"
    //       />

    //       <video
    //         autoPlay
    //         muted
    //         loop
    //         playsInline
    //         className="rounded-lg hidden group-hover:block object-cover object-center"
    //         src={data.images.video}
    //       />
    //     </AspectRatio>
    //   </CardHeader>
    //   <CardContent>
    //     <h2 className="text-lg font-bold">{data.name}</h2>
    //   </CardContent>
    //   <CardFooter>
    //     <Button>
    //       <Link href={`/projects/${data.slug}`}>View Project</Link>
    //     </Button>
    //   </CardFooter>
    // </Card>
  );
};
