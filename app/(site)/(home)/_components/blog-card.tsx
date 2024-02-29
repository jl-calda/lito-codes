import { FaBlogger } from "react-icons/fa6";

import { CardTitle } from "@/components/card-title";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getFileNames } from "@/lib/blogs/blogs";
import { getMarkdown } from "@/lib/blogs/markdown";
import { format } from "date-fns";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlogLink } from "./blog-link";
import { GrayMatterFile } from "gray-matter";
import { UnderConstruction } from "@/components/under-construction";

interface BlogCardProps {
  className?: string;
  blogs: GrayMatterFile<string>[];
}

export const BlogCard = ({ className, blogs }: BlogCardProps) => {
  const latestBlogs = blogs.slice(0, 3);

  return (
    <Card className={cn("flex flex-col min-h-max", className)}>
      <CardTitle
        title="Latest posts"
        subtitle="Documenting my learnings and journey in tech."
        icon={FaBlogger}
      />
      <CardContent className="flex-1">
        <UnderConstruction />
        {/* <ul className="grid grid-flow-row gap-y-4">
          {latestBlogs.map((blog) => (
            <BlogLink
              data={blog.data}
              key={crypto.randomUUID()}
            />
          ))}
        </ul> */}
      </CardContent>
      <CardFooter className="flex items-center justify-end">
        <Button
          variant="link"
          asChild
        >
          <Link
            href="/projects"
            className="flex items-center"
          >
            <FaBlogger className="h-4 w-4 mr-2" />
            View Posts
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
