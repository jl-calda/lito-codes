"use client";

import Link from "next/link";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useCallback } from "react";
import qs from "query-string";

import { SidebarSeparator } from "./sidebar-separator";
import { Button } from "./ui/button";
import { projects } from "@/data/projects";

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
  const pathName = usePathname();

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
    <aside className="flex flex-col space-y-2">
      <SidebarSeparator title="Projects" />
      <div className="flex flex-row flex-wrap gap-x-2 gap-y-2">
        {projectSlugs.map((slug) => (
          <Button
            variant={params.slug === slug ? "default" : "secondary"}
            key={crypto.randomUUID()}
            asChild
            size="sm"
            className="rounded-full"
          >
            <Link
              href={params.slug === slug ? "/projects" : `/projects/${slug}`}
              className="font-mono text-[10px] tracking-wide"
            >
              {slug}
            </Link>
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
            // asChild
            size="sm"
            className="rounded-none font-mono"
            onClick={() => handleClick(stack_type)}
          >
            {stack_type}
          </Button>
        ))}
      </div>
    </aside>
  );
};
