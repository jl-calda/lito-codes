import { FaBlogger } from "react-icons/fa6";

import { CardTitle } from "@/components/card-title";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getFileNames } from "@/lib/blogs/blogs";
import { getMarkdown } from "@/lib/blogs/markdown";
import { format } from "date-fns";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  className?: string;
}

export const BlogCard = ({ className }: BlogCardProps) => {
  const blogs = getFileNames();
  const latestBlogs = blogs
    .map((filename) => getMarkdown(filename))
    .sort((a, b) => {
      return new Date(b.data.date).getDate() - new Date(a.data.date).getDate();
    })
    .slice(0, 3);

  console.log(latestBlogs);
  return (
    <Card className={cn(className)}>
      <CardTitle
        title="Latest posts"
        subtitle="Documenting my learnings and journey in tech."
        icon={FaBlogger}
      />
      <CardContent>
        <ul className="flex flex-col space-y-4">
          {latestBlogs.map((blog) => (
            <li
              key={crypto.randomUUID()}
              className="flex flex-col"
            >
              <div className="flex flex-row space-y-2 items-center justify-between">
                <Link href={`/blog/${blog.data.slug}`}>
                  <p className="text-base font-medium">{blog.data.title}</p>
                </Link>
                <p className="text-xs text-muted-foreground">
                  {format(new Date(blog.data.date), "MM/dd/yy")}
                </p>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {blog.data.excerpt}
              </p>
              <div className="flex flex-row justify-between mt-1 items-start">
                <div className="flex flex-wrap gap-x-1 gap-y-1">
                  {blog.data.tags.slice(0, 5).map((tag: string) => (
                    <Button
                      key={crypto.randomUUID()}
                      className="p-1"
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <Link
                        href={`/blog?tag=${tag}`}
                        className="font-mono text-[10px]"
                      >
                        {tag}
                      </Link>
                    </Button>
                  ))}
                </div>
                <Button
                  className="p-0 self-end"
                  variant="link"
                  asChild
                >
                  <Link href={`/blog/${blog.data.slug}`}>Read more</Link>
                </Button>
              </div>

              <p></p>
              {/* {blog.data.title} */}
            </li>
          ))}
        </ul>
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
