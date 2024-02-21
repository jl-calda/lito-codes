import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaCoffee } from "react-icons/fa";

export const BuyCoffee = () => {
  return (
    <Card className="flex-1 flex flex-col">
      <CardHeader>
        <h2 className="text-2xl font-bold flex items-center">
          <FaCoffee className="h-6 w-6 mr-2" />
          Buy me a coffee
        </h2>
        <p className="text-muted-foreground text-sm">
          Your donation will keep caffein in my veins. ☕
        </p>
      </CardHeader>
      <CardContent
        className="py-4 md:pt-6 rounded-lg flex-1 flex items-center justify-center"
        style={{
          backgroundImage: "var(--gradient)",
        }}
      >
        <div className="w-1/2">
          <AspectRatio
            ratio={1 / 1}
            className=""
          >
            <Image
              src="/images/qr-code.jpg"
              fill
              className="rounded-lg"
              alt="qr code for donation"
            />
          </AspectRatio>
        </div>
      </CardContent>
    </Card>
  );
};
