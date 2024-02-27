"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import qs from "query-string";

import { SidebarSeparator } from "./sidebar-separator";
import { Button } from "./ui/button";
import { projects } from "@/data/projects";
import { StackIcons, isWithStackIcons } from "./stack-icons";
import { useMediaQuery } from "@uidotdev/usehooks";
import { getFileNames } from "@/lib/blogs/blogs";
import { getMarkdown } from "@/lib/blogs/markdown";
import { GrayMatterFile } from "gray-matter";

interface BlogNavProps {
  blogs: GrayMatterFile<string>[];
  fileNames: string[];
}

export const BlogNav = ({ blogs, fileNames }: BlogNavProps) => {
  const stack_type = Array.from(
    new Set(blogs.flatMap((blog) => blog.data.tags))
  );

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
          url: "/blog",
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
      <SidebarSeparator title="Articles" />
      <div className="flex flex-row flex-wrap gap-x-2 gap-y-2">
        {fileNames.map((slug) => (
          <Button
            variant={params?.slug === slug ? "default" : "secondary"}
            key={crypto.randomUUID()}
            size="sm"
            className="rounded-full font-mono text-xs tracking-wide"
            onClick={() => {
              if (params?.slug === slug) router.push("/projects");
              else router.push(`/blog/${slug.replace(".md", "")}`);
            }}
          >
            {slug.replace(".md", "")}
          </Button>
        ))}
      </div>
      <SidebarSeparator title="Tags" />
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
