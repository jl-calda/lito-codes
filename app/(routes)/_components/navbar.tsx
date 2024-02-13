"use client";

// import useDevice from "@/hooks/useDevice";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  HomeIcon,
  PersonIcon,
  LayersIcon,
  EnvelopeOpenIcon,
} from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

const paths = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/profile",
    name: "Profile",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const isMobile = useMediaQuery("only screen and (max-width : 767px)");

  return (
    <nav
      className={cn(
        "fixed right-1/2 translate-x-1/2 ease-in-out z-[999] flex backdrop-blur-md",
        isMobile
          ? "fixed bottom-0 w-[100%] justify-around border-t border-acccent"
          : "fixed top-8 right-[50%] translate-x-1/2 rounded-full shadow-md p-2"
      )}
    >
      {paths.map((path) => (
        <Button
          key={crypto.randomUUID()}
          className="relative w-full py-6 px-6"
          variant="child"
          onClick={() => router.push(path.path)}
        >
          {path.path === pathName && (
            <motion.div
              layoutId="nav-indicator"
              className={cn("absolute inset-0 bg-accent", "rounded-full")}
              style={{ borderRadius: isMobile ? "0" : "9999" }}
              transition={
                isMobile
                  ? {
                      type: "none",
                      duration: 0.5,
                    }
                  : {
                      type: "tween",
                      duration: 0.5,
                    }
              }
            />
          )}
          <div className="flex items-center space-x-2 justify-center">
            {path.path === "/" && isMobile && (
              <HomeIcon
                className={cn(
                  path.path === pathName
                    ? "text-muted-foreground"
                    : "text-accent-foreground",
                  "z-10"
                )}
              />
            )}
            {path.path === "/profile" && isMobile && (
              <PersonIcon
                className={cn(
                  path.path === pathName
                    ? "text-muted-foreground"
                    : "text-accent-foreground",
                  "z-10"
                )}
              />
            )}
            {path.path === "/projects" && isMobile && (
              <LayersIcon
                className={cn(
                  path.path === pathName
                    ? "text-muted-foreground"
                    : "text-accent-foreground",
                  "z-10"
                )}
              />
            )}
            {path.path === "/contact" && isMobile && (
              <EnvelopeOpenIcon
                className={cn(
                  path.path === pathName
                    ? "text-muted-foreground"
                    : "text-accent-foreground",
                  "z-10"
                )}
              />
            )}
            {!isMobile && (
              <span
                className={cn(
                  path.path === pathName
                    ? "text-muted-foreground"
                    : "text-accent-foreground",
                  "z-10"
                )}
              >
                {path.name}
              </span>
            )}
          </div>
        </Button>
      ))}
    </nav>
  );
};

export default Navbar;
