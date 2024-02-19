"use client";

import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { usePathname } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { Suspense } from "react";

enum navItems {
  "/" = "/home",
  "/about" = "/about",
  "/projects" = "/projects",
  "/services" = "/services",
  "/blog" = "/blog",
  "/contact" = "/contact",
  "/merch" = "/merch",
  "/code" = "/code",
}

export const SectionHeader = () => {
  const pathName = usePathname();
  return (
    <Suspense fallback={<SectionHeaderSkeleton />}>
      <div className="flex flex-col space-y-2 mt-2 md:mt-0">
        <Separator />
        <div className="flex flex-row justify-between items-center">
          <Button
            variant="ghost"
            disabled={pathName === "/"}
            className={cn(
              pathName === "/" ? "cursor-not-allowed opacity-0" : "opacity-100"
            )}
            size="icon"
            onClick={() => window.history.back()}
          >
            <FaArrowLeft
              className={cn(
                "h-4 w-4",
                "md:h-6 md:w-6",
                "text-muted-foreground",
                pathName === "/"
                  ? "cursor-not-allowed opacity-0"
                  : "opacity-100"
              )}
            />
          </Button>
          <h2
            className={cn(
              "text-md md:text-lg font-medium text-muted-foreground font-mono"
            )}
          >
            {navItems[pathName as keyof typeof navItems]}
          </h2>
        </div>
        <Separator />
      </div>
    </Suspense>
  );
};

const SectionHeaderSkeleton = () => {
  return <Skeleton className="w-full h-14" />;
};
