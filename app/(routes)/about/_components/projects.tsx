import { CardTitle } from "@/components/card-title";
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
      <CardTitle
        title="Projects"
        subtitle="Check out my latest projects"
        icon={FaCubesStacked}
      />
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
