"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaBinoculars } from "react-icons/fa6";

export const StalkingCard = () => {
  return (
    <Card className="bg-primary flex flex-col">
      <CardHeader className="px-4 text-muted">
        <h2 className="text-xl font-bold tracking-tighter flex items-center">
          <FaBinoculars className="w-6 h-6 -mt-2 mr-2" />
          Are you stalking me?
        </h2>
        <p className="text-muted text-sm">
          Just kidding, you can learn more about me here. I don't mind.
        </p>
      </CardHeader>
      <CardContent className="px-4 flex-1">
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
        <div></div>
      </CardContent>
      <CardFooter className="px-4">
        <Button
          variant="outline"
          className="w-full"
          asChild
        >
          <Link href="/about">View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
