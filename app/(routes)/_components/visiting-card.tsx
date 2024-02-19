"use client";

import { Catamaran } from "next/font/google";

const font = Catamaran({
  weight: ["400", "700"],
  subsets: ["latin"],
});
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import { CardHeaderTitle } from "./card-header-title";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export const VisitingCard = () => {
  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <h2 className="text-4xl font-bold tracking-tighter">
          We have a visitor!
        </h2>
        <p className="text-muted-foreground">
          Welcome to my humble page. This is where I showcase my work and
          express my creativity.
        </p>
      </CardHeader>
      <CardContent>
        <AspectRatio
          ratio={16 / 9}
          className="rounded-lg overflow-hidden group cursor-pointer"
        >
          <Image
            src="/images/visitor.gif"
            fill
            alt="hello object-cover object-center w-full h-full rounded-lg cursor-pointer"
          />
          <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black/30 backdrop-blur-lg">
            <AspectRatio
              ratio={16 / 9}
              className="rounded-lg overflow-hidden"
            >
              <Image
                src="/images/shake.gif"
                fill
                alt="hello object-cover object-center w-full h-full rounded-lg"
              />
              <div className="absolute bottom-4  w-full">
                <p className="text-2xl font-semibold text-white flex items-center justify-center">
                  Welcome to the page!
                </p>
              </div>
              <div className="absolute inset-0 bg-black/50 blur-sm" />
            </AspectRatio>
          </div>
        </AspectRatio>
      </CardContent>

      <CardFooter>
        <p>Don't let the gifs, get to you.</p>
      </CardFooter>
    </Card>
  );
};
