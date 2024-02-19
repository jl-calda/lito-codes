"use client";

import Image from "next/image";
import { Modal } from "@/components/ui/modal";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

interface PhotoModalParams {
  searchParams: { url: string };
}

const PhotoModal = ({ searchParams: { url } }: PhotoModalParams) => {
  return (
    <Modal>
      <div className="relative md:w-[calc(100vw-20rem)] w-[calc(100vw-2rem)] p-4">
        <AspectRatio ratio={13 / 9}>
          <Image
            src={url}
            fill
            alt="image"
            className="rounded-lg object-cover object-top shadow-lg p-8"
          />
        </AspectRatio>
      </div>
    </Modal>
  );
};

export default PhotoModal;
