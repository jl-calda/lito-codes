"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import { CardHeaderTitle } from "./card-header-title";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const ServicesCard = () => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold tracking-tighter">
          Avail my services...
        </h2>
        <p className="text-muted-foreground">
          Due to current economic and climate crisis, I am in need of extra
          source of monies.
        </p>
      </CardHeader>
      <CardContent>
        <AspectRatio
          ratio={16 / 9}
          className="rounded-lg overflow-hidden"
        >
          <Image
            src="/images/service.gif"
            fill
            alt="hello object-cover object-center w-full h-full rounded-lg"
          />
        </AspectRatio>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
