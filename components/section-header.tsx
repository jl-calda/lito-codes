"use client";

import { Catamaran } from "next/font/google";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { usePathname } from "next/navigation";

const font = Catamaran({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

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
    <div className="flex flex-col space-y-2 my-2">
      <h2 className={cn(font.className, "text-2xl font-medium self-end")}>
        {navItems[pathName as keyof typeof navItems]}
      </h2>
      <Separator />
    </div>
  );
};
