import Link from "next/link";
import { FaBrain, FaHandHolding, FaMessage } from "react-icons/fa6";

import { CardMainTitle } from "@/components/card-main-title";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { CardTitle } from "@/components/card-title";
import { CardBanner } from "@/components/card-banner";
interface MainCardProps {
  className?: string;
}

export const MainCard = ({ className }: MainCardProps) => {
  return (
    <Card className={cn("flex flex-col relative", className)}>
      <CardTitle
        title="Build your online brand"
        subtitle="We offer a range of services to help you get your brand out there."
        icon={FaBrain}
      />
      <CardContent className="flex-1 flex items-center">
        <AspectRatio
          ratio={16 / 9}
          className="relative cursor-pointer rounded-xl overflow-clip"
        >
          {/* href={`/video?url=${feature.images.video?.replace("/", "%2F")}`} */}
          <Link href={`/video?url=%2Fimages%2Flito-ova.mov`}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain object-center rounded-xl cursor-pointer"
              src="/images/lito-ova.mov"
            />
          </Link>
          <div className="absolute inset-0 bg-black/30" />
        </AspectRatio>
        {/* </AspectRatio> */}
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <p className="text-muted-foreground text-sm">
          From logo design to full branding packages, we have you covered. We
          will build you a website that will make your business stand out from
          the crowd.
        </p>
        <div className="flex items-center justify-end gap-4 w-full">
          <Button
            size="lg"
            asChild
            className="rounded-lg"
          >
            <Link
              href="/services"
              className="text-base font-medium flex items-center"
            >
              <FaHandHolding className="h-4 w-4 mr-2" />
              View Services
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-lg"
            asChild
          >
            <Link
              href="/contact"
              className="text-base font-medium flex items-center"
            >
              <FaMessage className="h-4 w-4 mr-2" />
              Contact Us
            </Link>
          </Button>
        </div>
      </CardFooter>
      <CardBanner text="Let's get started!" />
    </Card>
  );
};
