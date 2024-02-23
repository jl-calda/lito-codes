import { FaCode } from "react-icons/fa6";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CardTitle } from "@/components/card-title";

export const Snippets = () => {
  return (
    <Card className="flex flex-col">
      <CardTitle
        title="Snippets"
        subtitle="Some code i found interesting"
        icon={FaCode}
      />
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
