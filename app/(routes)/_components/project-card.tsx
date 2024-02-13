"use client";

import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ProjectType } from "@/data/projects";
import {
  ArrowTopRightIcon,
  GitHubLogoIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense, SyntheticEvent, useState } from "react";

const ProjectCardSkeleton = () => {
  return (
    <AspectRatio
      ratio={4 / 3}
      className="rounded-xl overflow-hidden cursor-pointer shadow-lg"
    >
      <Skeleton className="w-full h-full" />
    </AspectRatio>
  );
};

interface ProjectCardProps {
  data: ProjectType;
}

export const ProjectCard = ({ data }: ProjectCardProps) => {
  const [complete, setComplete] = useState(false);
  const router = useRouter();

  return (
    <motion.div
      whileInView={{ x: 0, y: 0 }}
      initial={{ x: 0, y: 50 }}
      transition={{ duration: 0.3 }}
    >
      <AspectRatio
        ratio={4 / 3}
        className="rounded-xl overflow-hidden cursor-pointer shadow-lg"
      >
        <Image
          src={data.images.thumbnail}
          alt={data.name}
          fill
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 backdrop-blur-md">
          <div className="flex-1 flex justify-between w-full">
            <div className="flex flex-col space-y-2 justify-start">
              <div
                className="flex flex-row items-center space-x-2"
                onClick={() => router.push(`/projects/${data.slug}`)}
              >
                <Image
                  src={data.images.logo}
                  alt="logo"
                  width={20}
                  height={20}
                  className="bg-white"
                />
                <h3 className="text-md md:text-lg grow">{data.name}</h3>
              </div>
              <p className="truncate text-xs md:text-sm font-thin tracking-wide">
                {data.description}
              </p>
            </div>
            <Button
              className="rounded-full h-10 w-10 flex items-center justify-center p-0"
              variant="secondary"
              onClick={() => router.push(`/project/${data.slug}`)}
            >
              <ArrowTopRightIcon className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex justify-end">
            <Button
              variant="child"
              onClick={() => router.push(data.live)}
            >
              <GlobeIcon className="w-4 h-4" />
            </Button>
            <Button
              variant="child"
              onClick={() => router.push(data.github)}
            >
              <GitHubLogoIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </AspectRatio>
    </motion.div>
  );
};
