import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ThemeCardProps {
  className?: string;
}

export const ThemeCard = ({ className }: ThemeCardProps) => {
  return <Card className={cn(className)}></Card>;
};
