"use client";

import { Project } from "@/data/projects";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../../components/ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";

import Link from "next/link";
import { CardBanner } from "../../../../components/card-banner";
import { CardTitle } from "@/components/card-title";

interface FeaturedProjectCardProps {
  data: Project[];
}

export const FeaturedProjectCard = ({ data }: FeaturedProjectCardProps) => {
  const feature = data[0];
  return (
    <Card className="relative">
      <CardTitle
        title={feature.name}
        subtitle={feature.description}
        href={`/projects/${feature.slug}`}
      />

      <CardContent className="grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-x-4 gap-y-4">
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
            className="rounded-lg h-full w-full object-cover object-left hover:scale-[102%] transition-transform duration-300 cursor-pointer"
          />
        </Link>
        <div className="grid md:grid-rows-3 grid-cols-3 md:grid-cols-1 gap-y-2 gap-x-2">
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
                  className="rounded-lg object-cover object-center hover:scale-[102%] transition-transform duration-300 cursor-pointer"
                />
              </AspectRatio>
            </Link>
          ))}
        </div>
      </CardContent>
      <CardBanner text="Featured Project" />
    </Card>
  );
};
