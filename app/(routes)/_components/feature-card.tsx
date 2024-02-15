import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FeatureDataType } from "./feature-section";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

interface FeatureCardProps {
  data: FeatureDataType;
  index: number;
}

export const FeatureCard = ({ data, index }: FeatureCardProps) => {
  return (
    <Card className="group bg-gradient-to-br from-stone-200 to-accent hover:shadow-lg">
      <CardHeader className="h-1/6 flex flex-row justify-between items-center">
        <p className="font-semibold text-stone-900">{data.title}</p>
        <p className="h-16 w-16 shrink-0 bg-white rounded-full flex items-center justify-center text-3xl font-bold shadow-inner">
          {index + 1}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col space-y-6">
        <div className="flex-1">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={data.image}
              alt={data.title}
              layout="fill"
              className="object-cover object-top"
            />
          </AspectRatio>
        </div>
        <p className="text-sm">{data.description}</p>
      </CardContent>
    </Card>
  );
};
