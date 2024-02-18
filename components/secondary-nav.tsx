"use client";

import { usePathname } from "next/navigation";
import { ProjectNav } from "./project-nav";

export const SecondaryNav = () => {
  const pathName = usePathname();

  if (pathName === "/") {
    return null;
  }

  if (pathName === "/about") {
    return null;
  }

  if (pathName.startsWith("/projects")) {
    return <ProjectNav />;
  }

  return <div>SecondaryNav</div>;
};
