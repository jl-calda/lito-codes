"use client";

import { usePathname } from "next/navigation";
import { ProjectNav } from "./project-nav";
import { BlogNav } from "./blog-nav";
import { GrayMatterFile } from "gray-matter";

interface SecondaryNavProps {
  blogs: GrayMatterFile<string>[];
  fileNames: string[];
}

export const SecondaryNav = ({ blogs, fileNames }: SecondaryNavProps) => {
  const pathName = usePathname();

  if (pathName === "/") {
    return null;
  }

  if (pathName === "/about") {
    return null;
  }

  if (pathName === "/contact") {
    return null;
  }

  if (pathName === "/services") {
    return null;
  }

  if (pathName?.startsWith("/blog")) {
    return (
      <BlogNav
        blogs={blogs}
        fileNames={fileNames}
      />
    );
  }

  if (pathName?.startsWith("/projects")) {
    return <ProjectNav />;
  }

  return null;
};
