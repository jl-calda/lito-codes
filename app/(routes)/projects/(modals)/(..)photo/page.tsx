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
      <div className="max-w-7xl relative md:w-[calc((100vh-40rem)*(100vw/100vh))] w-[calc(100vw-2rem)] md:p-2">
        <AspectRatio ratio={13 / 9}>
          <Image
            src={url}
            fill
            alt="image"
            className="rounded-lg object-contain object-top shadow-lg md:p-6"
          />
        </AspectRatio>
      </div>
    </Modal>
  );
};

export default PhotoModal;
