"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";

import { CardTitle } from "@/components/card-title";
import { FaMobileScreen } from "react-icons/fa6";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ScreenshotsProps {
  className?: string;
  data: Project;
}

export const Screenshots = ({ data, className }: ScreenshotsProps) => {
  const router = useRouter();
  return (
    <Card className={cn("", className)}>
      <CardTitle
        icon={FaMobileScreen}
        title="Screenshots"
        subtitle="Checkout some of the screen shots. You can also view the video."
      />
      <CardContent>
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem
              className="basis-4/5 cursor-pointer"
              onClick={() =>
                router.push(
                  `/video?url=${data?.images.video?.replace("/", "%2F")}`
                )
              }
            >
              <AspectRatio ratio={13 / 9}>
                <video
                  src={data?.images.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="rounded-lg"
                />
              </AspectRatio>
            </CarouselItem>

            {data?.images.other?.map((img) => (
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
                    alt={data?.description}
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
                  `/photo?url=${data?.images.thumbnail.replace("/", "%2F")}`
                )
              }
            >
              <AspectRatio ratio={13 / 9}>
                <Image
                  src={data?.images.thumbnail}
                  alt={data?.description}
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
  );
};
