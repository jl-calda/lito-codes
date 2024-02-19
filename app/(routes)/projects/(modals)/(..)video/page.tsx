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
      <div className="max-w-7xl relative md:w-[calc((100vh-40rem)*(100vw/100vh))] w-[calc(100vw-2rem)] md:p-2">
        <AspectRatio
          ratio={13 / 9}
          className="rounded-lg overflow-hidden"
        >
          <video
            src={url}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-contain object-top shadow-lg md:p-6"
          />
        </AspectRatio>
      </div>
    </Modal>
  );
};

export default VideoModal;
