import Link from "next/link";
import { FaBriefcase } from "react-icons/fa6";

import { CardBanner } from "@/components/card-banner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CardTitle } from "@/components/card-title";

export const Experience = () => {
  return (
    <Card className="flex flex-col relative">
      <CardTitle
        title="Experience"
        subtitle="Work experience and internships"
        icon={FaBriefcase}
      />
      <CardContent className="flex-1 py-0 flex flex-col space-y-2 pb-6">
        <div className="grid grid-flow-col gap-x-2 w-full">
          <p className="text-sm text-muted-foreground font-medium justify-self-start">
            Owner/Developer
          </p>
          <Button
            asChild
            variant="link"
            className="p-0 items-start"
          >
            <Link href="https://quarto.asia">
              <p className="text-sm text-muted-foreground font-bold justify-self-start">
                quarto.asia
              </p>
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground font-medium justify-self-end">
            2023-Present
          </p>
          <p className="text-sm text-muted-foreground font-medium justify-self-end">
            SG
          </p>
        </div>
        <Separator className="bg-secondary h-0.5" />
        <div className="grid grid-flow-col gap-x-2 w-full">
          <p className="text-sm text-muted-foreground font-medium justify-self-start">
            Design Engineer
          </p>
          <p className="text-sm text-muted-foreground font-bold justify-self-start">
            Ruevaleur Construction
          </p>
          <p className="text-sm text-muted-foreground font-medium justify-self-end">
            2021-Present
          </p>
          <p className="text-sm text-muted-foreground font-medium justify-self-end">
            SG
          </p>
        </div>
        <div className="grid grid-flow-col gap-x-2 w-full">
          <p className="text-sm text-muted-foreground font-medium justify-self-start">
            Design Engr
          </p>
          <p className="text-sm text-muted-foreground font-bold justify-self-start">
            DS Brown Singapore
          </p>
          <p className="text-sm text-muted-foreground font-medium justify-self-end">
            2019-2021
          </p>
          <p className="text-sm text-muted-foreground font-medium justify-self-end">
            SG
          </p>
        </div>
        <div className="grid grid-flow-col gap-x-2 w-full">
          <p className="text-sm text-muted-foreground font-medium justify-self-start">
            Associate Engr
          </p>
          <p className="text-sm text-muted-foreground font-bold justify-self-start">
            Fluor Daniel Philippines
          </p>
          <p className="text-sm text-muted-foreground font-medium justify-self-end">
            2018-2019
          </p>
          <p className="text-sm text-muted-foreground font-medium justify-self-end">
            PH
          </p>
        </div>
        <div className="grid grid-flow-col gap-x-2 w-full place-items-start">
          <p className="text-sm text-muted-foreground font-medium justify-self-start">
            Structural Engr
          </p>
          <p className="text-sm text-muted-foreground font-bold justify-self-start">
            Chiyoda Philippines
          </p>
          <p className="text-sm text-muted-foreground font-medium place-self-end">
            2015-2018
          </p>
          <p className="text-sm text-muted-foreground font-medium justify-self-end">
            PH
          </p>
        </div>
      </CardContent>
      <CardBanner
        text="Help me land my first tech job!"
        secondary
      />
    </Card>
  );
};
