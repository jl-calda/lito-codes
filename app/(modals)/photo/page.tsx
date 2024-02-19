"use client";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

interface PhotoPageParams {
  searchParams: { url: string };
}

const PhotoPage = ({ searchParams: { url } }: PhotoPageParams) => {
  return (
    <AspectRatio
      ratio={13 / 9}
      className="rounded-lg overflow-hidden"
    >
      <Image
        src={url}
        fill
        alt="image"
        className="rounded-lg object-cover object-top shadow-lg"
      />
    </AspectRatio>
  );
};

export default PhotoPage;
