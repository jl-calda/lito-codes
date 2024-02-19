"use client";

import Image from "next/image";
import { Modal } from "@/components/ui/modal";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

interface VideoModalParams {
  searchParams: { url: string };
}

const VideoModal = ({ searchParams: { url } }: VideoModalParams) => {
  return (
    <Modal>
      <div className="relative md:w-[calc(100vw-20rem)] w-[calc(100vw-2rem)] p-4">
        <AspectRatio ratio={13 / 9}>
          <video
            src={url}
            autoPlay
            muted
            loop
            playsInline
            className="rounded-lg h-full w-full object-cover object-top"
          />
        </AspectRatio>
      </div>
    </Modal>
  );
};

export default VideoModal;
