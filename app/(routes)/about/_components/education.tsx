import { CardTitle } from "@/components/card-title";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FaSchool } from "react-icons/fa6";

export const Education = () => {
  return (
    <Card className="flex flex-col">
      <CardTitle
        title="Education"
        subtitle="Schools attended and courses I have taken"
        icon={FaSchool}
      />

      <CardContent className="flex-1 py-0 flex flex-col space-y-2 pb-6">
        <div className="grid grid-flow-col gap-x-2 w-full">
          <p className="text-sm text-muted-foreground font-bold">
            Maximillian Schwarzmüller's React Guide
          </p>
          <p className="text-sm text-muted-foreground font-medium justify-self-end">
            Udemy
          </p>
          <p className="text-sm text-muted-foreground font-medium justify-self-end">
            2019
          </p>
        </div>
        <div className="grid grid-flow-col gap-x-2 w-full">
          <p className="text-sm text-muted-foreground font-bold">
            Jonas Schmedtmann's Complete Javascript Course
          </p>
          <p className="text-sm text-muted-foreground font-medium justify-self-end">
            Udemy
          </p>
          <p className="text-sm text-muted-foreground font-medium justify-self-end">
            2018
          </p>
        </div>
        <div className="grid grid-flow-col gap-x-2 w-full">
          <p className="text-sm text-muted-foreground font-bold">
            Anthony Alicea's JS Understanding the Weird Parts
          </p>
          <p className="text-sm text-muted-foreground font-medium justify-self-end">
            Udemy
          </p>
          <p className="text-sm text-muted-foreground font-medium justify-self-end">
            2019
          </p>
        </div>
        <Separator className="bg-secondary h-0.5" />
        <div className="grid grid-flow-col gap-x-2 w-full">
          <p className="text-sm text-muted-foreground font-medium justify-self-start">
            BS in Civil Engg
          </p>
          <p className="text-sm text-muted-foreground font-bold justify-self-end">
            Adamson University
          </p>
          <p className="text-sm text-muted-foreground font-medium justify-self-end">
            2009-2014
          </p>
        </div>
        <div className="grid grid-flow-col gap-x-2 w-full">
          <p className="text-sm text-muted-foreground font-medium justify-self-start">
            Secondary
          </p>
          <p className="text-sm text-muted-foreground font-bold justify-self-end">
            Mangaldan NHS
          </p>
          <p className="text-sm text-muted-foreground font-medium justify-self-end">
            2005-2009
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
