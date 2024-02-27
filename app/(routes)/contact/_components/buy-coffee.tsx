import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { FaCoffee } from "react-icons/fa";
import { CardTitle } from "@/components/card-title";
import { cn } from "@/lib/utils";

interface BuyCoffeeProps {
  className?: string;
}

export const BuyCoffee = ({ className }: BuyCoffeeProps) => {
  return (
    <Card className={cn("flex-1 flex flex-col", className)}>
      <CardTitle
        title="Buy me a coffee"
        subtitle="Your donation will keep caffein in my veins. ☕"
        icon={FaCoffee}
      />
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
