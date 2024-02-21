"use client";

import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import qs from "query-string";

import { SidebarSeparator } from "./sidebar-separator";
import { Button } from "./ui/button";
import { projects } from "@/data/projects";
import { StackIcons, isWithStackIcons } from "./stack-icons";
import { useMediaQuery } from "@uidotdev/usehooks";

export const ProjectNav = () => {
  const projectSlugs = projects.map((project) => project.slug);
  const stack = Array.from(
    new Set(projects.flatMap((project) => project.stack))
  );
  const type = Array.from(new Set(projects.flatMap((project) => project.type)));
  const stack_type = stack.concat(type);

  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const isMobile = useMediaQuery("(max-width: 640px)");

  const handleClick = useCallback(
    (query: string) => {
      let currentQuery = {};

      if (searchParams) {
        currentQuery = qs.parse(searchParams.toString());
      }

      const updatedQuery = {
        ...currentQuery,
        stack_type: query,
      };

      const url = qs.stringifyUrl(
        {
          url: "/projects",
          query: query === searchParams?.get("stack_type") ? {} : updatedQuery,
        },
        { skipNull: true }
      );

      router.push(url);
    },
    [searchParams, router]
  );

  return (
    <div className="flex flex-col space-y-2">
      <SidebarSeparator title="Projects" />
      <div className="flex flex-row flex-wrap gap-x-2 gap-y-2">
        {projectSlugs.map((slug) => (
          <Button
            variant={params?.slug === slug ? "default" : "secondary"}
            key={crypto.randomUUID()}
            size="sm"
            className="rounded-full font-mono text-xs tracking-wide"
            onClick={() => {
              if (params?.slug === slug) router.push("/projects");
              else router.push(`/projects/${slug}`);
            }}
          >
            {slug}
          </Button>
        ))}
      </div>
      <SidebarSeparator title="Technology" />
      <div className="flex flex-row flex-wrap gap-x-2 gap-y-2">
        {stack_type.map((stack_type) => (
          <Button
            variant={
              searchParams?.get("stack_type") === stack_type
                ? "default"
                : "secondary"
            }
            key={crypto.randomUUID()}
            size={isWithStackIcons(stack_type) && isMobile ? "icon" : "sm"}
            className="rounded-none font-mono flex items-center space-x-2"
            onClick={() => handleClick(stack_type)}
          >
            {isMobile && isWithStackIcons(stack_type) ? (
              <StackIcons technology={stack_type} />
            ) : (
              <span>{stack_type}</span>
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};
