import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FaDownload, FaThumbsUp } from "react-icons/fa6";

const HireMe = () => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold flex items-center">
          <FaThumbsUp className="h-6 w-6 mr-2" />
          Hire Me Instead
        </h2>
        <p className="text-muted-foreground text-sm">
          Current looking for a job. I'm open for any opportunities.🧑‍💻
        </p>
      </CardHeader>
      <CardContent>
        <Button
          variant="secondary"
          className="rounded-lg w-full h-full"
          asChild
        >
          <Link
            href="/api/resume"
            target="_blank"
            className="flex flex-col items-center justify-center space-y-2"
          >
            <FaDownload className="h-6 w-6 mr-2" />
            <span>Resume</span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default HireMe;
