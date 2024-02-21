import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
export const Selfie = () => {
  return (
    <Card className="bg-primary p-3 hidden md:block">
      <CardContent className="relative md:h-full h-[40vh]">
        <Image
          src="/images/selfie.jpeg"
          alt="Joey"
          fill
          className="object-cover object-ce rounded-lg"
        />
      </CardContent>
    </Card>
  );
};
