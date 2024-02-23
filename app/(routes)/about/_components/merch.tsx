import Image from "next/image";
import { FaShirt } from "react-icons/fa6";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CardBanner } from "@/components/card-banner";
import { CardTitle } from "@/components/card-title";

export const Merch = () => {
  return (
    <Card className="flex flex-col row-span-2 bg-primary relative">
      <CardTitle
        title="Merch"
        subtitle="Get your hands on some cool merch"
        icon={FaShirt}
        muted
      />
      <CardContent className="flex items-center grow-1 justify-center p-4">
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
