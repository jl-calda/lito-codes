import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FaSchool } from "react-icons/fa6";

export const Education = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <h3 className="text-xl font-semibold flex">
          <FaSchool className="h-6 w-6 mr-2 text-primary" />
          Education
        </h3>
        <p className="text-muted-foreground text-sm">
          Schools attended and courses I have taken
        </p>
      </CardHeader>
      <CardContent className="flex-1 py-0 flex flex-col space-y-2 pb-6">
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
        <Separator className="bg-secondary h-0.5" />
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
      </CardContent>
    </Card>
  );
};
