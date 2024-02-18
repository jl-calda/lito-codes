"use client";

import { Project } from "@/data/projects";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { FaBox, FaGithub, FaGlobe } from "react-icons/fa6";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Link from "next/link";
import { CardBanner } from "./card-banner";

interface FeaturedProjectCardProps {
  data: Project[];
}

export const FeaturedProjectCard = ({ data }: FeaturedProjectCardProps) => {
  const feature = data[0];
  return (
    <Card className="relative bg-secondary">
      <CardHeader>
        <h2 className="text-2xl font-bold text-primary">{feature.name}</h2>
        <p className="text-muted-foreground text-sm">{feature.description}</p>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-x-4 gap-y-4">
        {/* <AspectRatio
          ratio={13 / 9}
          className="rounded-lg"
        > */}
        <Link
          href={`/video?url=${feature.images.video?.replace("/", "%2F")}`}
          key={crypto.randomUUID()}
        >
          <video
            src={feature.images.video}
            autoPlay
            muted
            loop
            playsInline
            className="rounded-lg h-full w-full object-cover object-left hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </Link>
        {/* </AspectRatio> */}
        <div className="grid grid-rows-3 gap-y-4">
          {feature.images.other?.slice(0, 3).map((image) => (
            <Link
              href={`/photo?url=${image.replace("/", "%2F")}`}
              key={image}
            >
              <AspectRatio
                ratio={13 / 9}
                key={image}
              >
                <Image
                  src={image}
                  alt={feature.name}
                  fill
                  className="rounded-lg object-cover object-center hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </AspectRatio>
            </Link>
          ))}
        </div>
        {/* <Carousel
          className=""
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem className="basis-4/5">
              <AspectRatio ratio={13 / 9}>
                <video
                  src={feature.images.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="rounded-lg"
                />
              </AspectRatio>
            </CarouselItem>
            {feature.images.other?.map((img, idx) => (
              <CarouselItem
                key={idx}
                className="basis-4/5"
              >
                <AspectRatio ratio={13 / 9}>
                  <Image
                    src={img}
                    alt={feature.description}
                    fill
                    className="rounded-lg object-cover object-center"
                  />
                </AspectRatio>
              </CarouselItem>
            ))}
            <CarouselItem className="basis-4/5">
              <AspectRatio ratio={13 / 9}>
                <Image
                  src={feature.images.thumbnail}
                  alt={feature.description}
                  fill
                  className="rounded-lg object-cover object-center"
                />
              </AspectRatio>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}
      </CardContent>
      {/* <CardFooter
        style={{
          backgroundImage: "var(--gradient)",
        }}
        className="rounded-br-lg rounded-bl-lg"
      >
        <div className="w-full justify-between items-center flex">
          <div>
            <Button
              asChild
              variant="link"
            >
              <Link href={`/projects/${feature.slug}`}>
                <h3 className="text-lg font-medium text-muted">
                  {feature.name}
                </h3>
              </Link>
            </Button>
            <p className="text-muted text-sm px-4">{feature.description}</p>
          </div>

          <div className="flex flex-row space-x-2 items-center justify-center">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-muted"
            >
              <Link
                href={feature.live}
                target="_blank"
              >
                <FaGlobe className="h-6 w-6" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-muted"
            >
              <Link
                href={feature.github}
                target="_blank"
              >
                <FaGithub className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </CardFooter> */}
      <div></div>
      <CardBanner text="Featured Project" />
    </Card>
  );
};
