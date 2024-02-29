import { FaBlogger } from "react-icons/fa6";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CardTitle } from "@/components/card-title";

export const Blog = () => {
  return (
    <Card className="flex flex-col">
      <CardTitle
        title="Blogs"
        subtitle="Read my latest thoughts and ideas"
        icon={FaBlogger}
      />
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
