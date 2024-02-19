"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FaCheck, FaHandHolding } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const ServicesCard = () => {
  return (
    <Card
      style={{
        backgroundImage: "var(--gradient)",
      }}
      className="flex flex-col"
    >
      <CardHeader className="px-4">
        <h2 className="text-2xl text-muted font-bold tracking-tighter flex">
          <FaHandHolding className="w-8 h-8 -mt-2 mr-2" />
          Avail my services...
        </h2>

        <p className="text-muted text-sm">
          Due to current economic and climate crisis, I am in need of extra
          source of monies.
        </p>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col space-y-4 px-4">
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
        <div className="text-muted flex flex-col space-y-2">
          <div className="flex flex-row items-center">
            <FaCheck className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">
              Personal Professional Website
            </span>
          </div>
          <div className="flex flex-row items-center">
            <FaCheck className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">
              Ecommerce Shopping Website
            </span>
          </div>
          <div className="flex flex-row items-center">
            <FaCheck className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Mobile Friendly Design</span>
          </div>
          <div className="flex flex-row items-center">
            <FaCheck className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">{`Website for Events (eg. Wedding)`}</span>
          </div>
          <div className="flex flex-row items-center">
            <FaCheck className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">
              Content Management System
            </span>
          </div>
          <div className="flex flex-row items-center">
            <FaCheck className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Ordering/Queuing System</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-4">
        <Button
          variant="outline"
          className="w-full"
          asChild
        >
          <Link href="/services">See my offers</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
