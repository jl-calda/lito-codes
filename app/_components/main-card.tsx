import { BackgroundGradientAnimation } from "@/components/animated/background-gradient";
import { CardTitle } from "@/components/card-title";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FaBrain } from "react-icons/fa6";

interface MainCardProps {
  className?: string;
}

export const MainCard = ({ className }: MainCardProps) => {
  return (
    <Card className={cn(className, "overflow-clip bg-transparent")}>
      <CardTitle
        title="Design and branding services"
        subtitle="We offer a wide range of services to help you get the best out of your brand."
        icon={FaBrain}
      />
      {/* <BackgroundGradientAnimation></BackgroundGradientAnimation> */}
    </Card>
  );
};
