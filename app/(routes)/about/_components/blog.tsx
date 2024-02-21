import { FaBlogger } from "react-icons/fa6";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export const Blog = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <h3 className="text-xl font-semibold flex">
          <FaBlogger className="h-6 w-6 mr-2 text-primary" />
          Blogs
        </h3>
        <p className="text-muted-foreground text-sm">
          Read my latest thoughts and ideas
        </p>
      </CardHeader>
      <CardContent className="flex-1 p-0"></CardContent>
      <CardFooter className="p-2 justify-end">
        <Button
          variant="link"
          className="text-right"
          asChild
        >
          <Link href="/blog">View all posts</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
