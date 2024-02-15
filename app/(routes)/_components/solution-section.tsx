import { SectionHeader } from "@/components/section-header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import React from "react";

export const SolutionSection = () => {
  return (
    <section className="min-h-[80vh]">
      <SectionHeader
        title="Services"
        description="We offer a wide range of services to help you grow your business."
      />
      <div className="grid md:grid-cols-[1fr_2fr]">
        <AspectRatio
          ratio={1 / 1}
          className="order-last"
        >
          <Image
            src="/svgs/website.svg"
            alt="website"
            layout="fill"
          />
        </AspectRatio>
        {/* 2-3 */}
        <div className="order-last">
          <h3 className="text-xl font-semibold">
            1. We build websites that are fast, secure, and easy to manage.
          </h3>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            architecto reprehenderit totam voluptate quidem similique blanditiis
            quisquam, maiores fuga perferendis.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-[2fr_1fr]">
        <div className="order-last md:order-none">
          <h3 className="text-xl font-semibold">
            1. We build websites that are fast, secure, and easy to manage.
          </h3>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            architecto reprehenderit totam voluptate quidem similique blanditiis
            quisquam, maiores fuga perferendis.
          </p>
        </div>
        <AspectRatio
          ratio={1 / 1}
          className=""
        >
          <Image
            src="/svgs/update.svg"
            alt="website"
            layout="fill"
          />
        </AspectRatio>

        {/* 2-3 */}
      </div>
    </section>
  );
};
