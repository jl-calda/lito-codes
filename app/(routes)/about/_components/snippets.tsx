import { FaCode } from "react-icons/fa6";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export const Snippets = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <h3 className="text-xl font-semibold flex">
          <FaCode className="h-6 w-6 mr-2 text-primary" />
          Snippets
        </h3>
        <p className="text-muted-foreground text-sm">
          Some code i found interesting
        </p>
      </CardHeader>
      <CardContent className="flex-1 p-0"></CardContent>
      <CardFooter className="p-2 justify-end">
        <Button
          variant="link"
          className="text-right"
          asChild
        >
          <Link href="/code">Check those snippets</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
