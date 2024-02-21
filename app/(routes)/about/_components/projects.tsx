import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { FaCubesStacked } from "react-icons/fa6";

export const Projects = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <h3 className="text-xl font-semibold flex">
          <FaCubesStacked className="h-6 w-6 mr-2 text-primary" />
          Projects
        </h3>
        <p className="text-muted-foreground text-sm">
          Check out my latest projects
        </p>
      </CardHeader>
      <CardContent className="flex-1 p-0"></CardContent>
      <CardFooter className="p-2 justify-end">
        <Button
          variant="link"
          className="text-right"
          asChild
        >
          <Link href="/projects">Check my projects</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
