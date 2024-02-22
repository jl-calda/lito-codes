import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MainCardProps {
  className?: string;
}

export const MainCard = ({ className }: MainCardProps) => {
  return <Card className={cn(className)}></Card>;
};
