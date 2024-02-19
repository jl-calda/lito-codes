"use client";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "@/data/projects";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SectionSeparator } from "@/components/section-separator";
import { Button } from "@/components/ui/button";
import {
  FaCubesStacked,
  FaGithub,
  FaGlobe,
  FaLink,
  FaMobileScreen,
  FaScreenpal,
} from "react-icons/fa6";
import { StackIcons } from "@/components/stack-icons";

interface ProjectPageParams {
  params: {
    slug: string;
  };
}

const ProjectPage = ({ params: { slug } }: ProjectPageParams) => {
  const project = projects.find((project) => project.slug === slug);
  const router = useRouter();

  if (!project) {
    return null;
  }

  const handleClick = (query: string) => {
    router.push(`/projects?stack_type=${query}`);
  };

  return (
    <section className="flex flex-col space-y-4">
      <div className="grid md:grid-cols-[2fr_1fr] gap-x-4 gap-y-4">
        <Card className="bg-primary">
          <CardHeader className="pb-2 text-muted">
            <h1 className="text-2xl font-bold ">{project.name}</h1>
            <p className="text-sm">{project.description}</p>
          </CardHeader>
          <CardContent className="flex items-center justify-end">
            <Button
              variant="link"
              asChild
              className="text-muted font-mono text-xs"
            >
              <Link
                href={project.live}
                target="_blank"
              >
                {project.live}
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <h1 className="text-2xl font-bold flex items-center">
              <FaLink className="h-6 w-6 mr-2 text-primary" />
              Visit the site
            </h1>
            <p className="text-muted-foreground text-sm">
              Experience it yourself and check how I made it.
            </p>
          </CardHeader>
          <CardContent className="">
            <div className="flex flex-row items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                asChild
              >
                <Link href={project.github}>
                  <FaGithub className="w-4 h-4 mr-2" />
                  Code Base
                </Link>
              </Button>
              <Button
                variant="default"
                size="sm"
                asChild
              >
                <Link href={project.live}>
                  <FaGlobe className="w-4 h-4 mr-2" />
                  Live Site
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader className="">
          <h1 className="text-2xl font-bold flex items-center">
            <FaMobileScreen className="h-6 w-6 mr-2 text-primary" />
            Screenshots
          </h1>
          <p className="text-muted-foreground text-sm">
            Checkout some of the screen shots. You can also view the video.
          </p>
        </CardHeader>
        <CardContent className="">
          <Carousel
            className=""
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem
                className="basis-4/5 cursor-pointer"
                onClick={() =>
                  router.push(
                    `/video?url=${project?.images.video?.replace("/", "%2F")}`
                  )
                }
              >
                <AspectRatio ratio={13 / 9}>
                  <video
                    src={project?.images.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="rounded-lg"
                  />
                </AspectRatio>
              </CarouselItem>

              {project?.images.other?.map((img) => (
                <CarouselItem
                  key={crypto.randomUUID()}
                  className="basis-4/5 cursor-pointer"
                  onClick={() =>
                    router.push(`/photo?url=${img.replace("/", "%2F")}`)
                  }
                >
                  <AspectRatio ratio={13 / 9}>
                    <Image
                      src={img}
                      alt={project?.description}
                      fill
                      className="rounded-lg object-cover object-center"
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
              <CarouselItem
                className="basis-4/5 cursor-pointer"
                onClick={() =>
                  router.push(
                    `/photo?url=${project?.images.thumbnail.replace(
                      "/",
                      "%2F"
                    )}`
                  )
                }
              >
                <AspectRatio ratio={13 / 9}>
                  <Image
                    src={project?.images.thumbnail}
                    alt={project?.description}
                    fill
                    className="rounded-lg object-cover object-center"
                  />
                </AspectRatio>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="">
          <h1 className="text-2xl font-bold flex items-center">
            <FaCubesStacked className="h-6 w-6 mr-2 text-primary" />
            Technologies Used
          </h1>
          <p className="text-muted-foreground text-sm">
            I used the following technologies to build this project.
          </p>
        </CardHeader>
        <CardContent className="flex flex-row flex-wrap gap-x-2 gap-y-2">
          {project.stack.map((tech) => (
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
      <SectionSeparator title="View my other projects" />
    </section>
  );
};

export default ProjectPage;
