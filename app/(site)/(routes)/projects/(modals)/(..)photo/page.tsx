"use client";

import Image from "next/image";
import { Modal } from "@/components/ui/modal";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

interface PhotoModalParams {
  searchParams: { url: string };
}

const PhotoModal = ({ searchParams: { url } }: PhotoModalParams) => {
  console.log(url);
  return (
    <Modal>
      <div className="max-w-7xl md:h-[calc(((100vh-8rem)*(13/9))*(9/13))] relative md:w-[calc((100vh-8rem)*(13/9))] w-[calc(100vw-2rem)] md:p-2">
        <AspectRatio ratio={13 / 9}>
          <Image
            src={decodeURIComponent(url)}
            fill
            alt="image"
            className="rounded-lg object-contain object-top shadow-lg"
          />
        </AspectRatio>
      </div>
    </Modal>
  );
};

export default PhotoModal;
