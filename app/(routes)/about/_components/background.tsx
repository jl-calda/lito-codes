import Link from "next/link";
import { FaDownload, FaMagnifyingGlass, FaMessage } from "react-icons/fa6";

import { CardBanner } from "@/components/card-banner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const Background = () => {
  return (
    <Card className="md:col-span-2 relative">
      <CardHeader>
        <h3 className="text-xl font-semibold flex items-center">
          <FaMagnifyingGlass className="h-6 w-6 mr-2 text-primary" />
          Background
        </h3>
        <p className="text-muted-foreground text-sm">
          Brief summary about me and work experience
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-base text-muted-foreground leading-7 tracking-wide">
          I am Joselito <span className="font-bold text-primary">"Joey"</span>{" "}
          Calda Jr. Structural engineer, pursuing a career in tech. I am a
          self-taught developer with a passion for learning and creating
          functional and easy to use application. Created
          <Link
            href="https://quarto.asia"
            target="_blank"
            className="text-primary font-bold"
          >
            {" quarto.asia"}
          </Link>{" "}
          to showcase my skills and learnings. I am currently looking for a job
          and open for any opportunities.
        </p>
        <div className="flex items-center space-x-2 justify-end">
          <Button
            variant="secondary"
            className="rounded-lg"
            asChild
          >
            <Link
              href="/api/resume"
              target="_blank"
              className="flex items-center space-x-2"
            >
              <FaDownload className="h-6 w-6" />
              <span>Resume</span>
            </Link>
          </Button>
          <Button
            className="rounded-lg"
            asChild
          >
            <Link
              href="/contact"
              className="flex items-center space-x-2"
            >
              <FaMessage className="h-6 w-6" />
              <span>Connect</span>
            </Link>
          </Button>
        </div>
      </CardContent>
      <CardBanner text="Open for employment" />
    </Card>
  );
};
