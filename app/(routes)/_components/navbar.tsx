"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useMediaQuery } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";
import {
  HomeIcon,
  PersonIcon,
  LayersIcon,
  EnvelopeOpenIcon,
} from "@radix-ui/react-icons";

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
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  return (
    <nav
      className={cn(
        "fixed right-1/2 translate-x-1/2 ease-in-out z-[999] flex backdrop-blur-md",
        isSmallDevice
          ? "fixed bottom-0 w-[100%] justify-around border-t border-acccent"
          : "fixed top-8 right-[50%] translate-x-1/2 rounded-full shadow-md p-2"
      )}
    >
      {paths.map((path) => (
        <Button
          key={crypto.randomUUID()}
          className="relative w-full py-6"
          variant="child"
          onClick={() => router.push(path.path)}
        >
          {path.path === pathName && (
            <motion.div
              layoutId="nav-indicator"
              className={cn("absolute inset-0 bg-accent", "rounded-full")}
              style={{ borderRadius: isSmallDevice ? "0" : "9999" }}
              transition={
                isSmallDevice
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
            {path.path === "/" && isSmallDevice && (
              <HomeIcon
                className={cn(
                  path.path === pathName
                    ? "text-muted-foreground"
                    : "text-accent-foreground",
                  "z-10"
                )}
              />
            )}
            {path.path === "/profile" && isSmallDevice && (
              <PersonIcon
                className={cn(
                  path.path === pathName
                    ? "text-muted-foreground"
                    : "text-accent-foreground",
                  "z-10"
                )}
              />
            )}
            {path.path === "/projects" && isSmallDevice && (
              <LayersIcon
                className={cn(
                  path.path === pathName
                    ? "text-muted-foreground"
                    : "text-accent-foreground",
                  "z-10"
                )}
              />
            )}
            {path.path === "/contact" && isSmallDevice && (
              <EnvelopeOpenIcon
                className={cn(
                  path.path === pathName
                    ? "text-muted-foreground"
                    : "text-accent-foreground",
                  "z-10"
                )}
              />
            )}
            {!isSmallDevice && (
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
