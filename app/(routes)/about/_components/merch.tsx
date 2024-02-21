import Image from "next/image";
import { FaShirt } from "react-icons/fa6";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CardBanner } from "@/components/card-banner";

export const Merch = () => {
  return (
    <Card className="flex flex-col row-span-2 bg-primary relative">
      <CardHeader>
        <h3 className="text-xl font-semibold flex text-primary-foreground items-center">
          <FaShirt className="h-6 w-6 mr-2 text-primary-foreground" />
          Merch
        </h3>
        <p className="text-muted text-sm">
          Get your hands on some cool merch. This will support me and this blog.
        </p>
      </CardHeader>
      <CardContent className="text-muted-foreground flex items-center grow-1 justify-center p-4">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/images/closed-shop.gif"
            alt="Closed shop"
            fill
            className="relative object-cover object-top rounded-lg"
          />
        </AspectRatio>
      </CardContent>
      <CardBanner text="Opening soon" />
    </Card>
  );
};
