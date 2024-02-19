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
import { MessageForm } from "./message-form";

export const MessagesCard = () => {
  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <h2 className="text-2xl font-bold tracking-tighter">
          Before you go, leave a message...
        </h2>
        <p className="text-muted-foreground">
          Your message whatever non-sense it is will be appreciated. Please
          refrain saying bad words. It will be a pain in the ass to remove.
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-[1fr_1.5fr]">
          <div className="flex flex-col space-y-2">
            <AspectRatio
              ratio={16 / 9}
              className="rounded-lg overflow-hidden"
            >
              <Image
                src="/images/message.gif"
                fill
                alt="hello object-cover object-center w-full h-full rounded-lg"
              />
            </AspectRatio>
            <MessageForm />
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
