"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

export const StalkingCard = () => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold tracking-tighter">
          You're not stalking, are you??
        </h2>
        <p className="text-muted-foreground">
          Just kidding, you can learn more about me here. I don't mind.
        </p>
      </CardHeader>
      <CardContent>
        <AspectRatio
          ratio={16 / 9}
          className="rounded-lg overflow-hidden"
        >
          <Image
            src="/images/stalking.gif"
            fill
            alt="hello object-cover object-center w-full h-full rounded-lg"
          />
        </AspectRatio>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
