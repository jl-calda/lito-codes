import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaDownload, FaThumbsUp } from "react-icons/fa6";
import { CardTitle } from "@/components/card-title";
import { cn } from "@/lib/utils";

interface HireMeProps {
  className?: string;
}

const HireMe = ({ className }: HireMeProps) => {
  return (
    <Card className={cn(className)}>
      <CardTitle
        title="Hire Me"
        subtitle="Looking for a job"
        icon={FaThumbsUp}
      />
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
