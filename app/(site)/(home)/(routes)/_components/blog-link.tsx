import { format } from "date-fns";
import Link from "next/link";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Button } from "@/components/ui/button";

interface BlogLinkProps {
  [key: string]: any;
}

export const BlogLink = ({ data }: BlogLinkProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <li>
          <div className="flex flex-row space-y-2 items-center justify-between">
            <Link href={`/blog/${data.slug}`}>
              <p className="text-base font-medium">{data.title}</p>
            </Link>
            <p className="text-xs text-muted-foreground">
              {format(new Date(data.date), "MM/dd/yy")}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-1 gap-y-1">
            {data.tags.slice(0, 5).map((tag: string) => (
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
        </li>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex flex-col space-y-4">
          <p className="text-xs text-muted-foreground mt-2 font-mono">
            {data.excerpt}
          </p>
          <div className="flex flex-row justify-between mt-1 items-start">
            <Button
              className="p-0 self-end"
              variant="link"
              asChild
            >
              <Link href={`/blog/${data.slug}`}>Read more</Link>
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
