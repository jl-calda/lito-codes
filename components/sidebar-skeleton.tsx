import React from "react";
import { Skeleton } from "./ui/skeleton";

export const SidebarSkeleton = () => {
  return (
    <aside className="flex h-80 md:h-full flex-col space-y-2 pb-4">
      <Skeleton className="h-1/6" />
      <Skeleton className="h-1/6" />
      <Skeleton className="h-2/6" />
      <Skeleton className="h-2/6" />
    </aside>
  );
};
