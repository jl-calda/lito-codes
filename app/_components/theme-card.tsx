import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ThemeCardProps {
  className?: string;
}

export const ThemeCard = ({ className }: ThemeCardProps) => {
  return (
    <Card
      style={{
        backgroundImage: "var(--gradient)",
      }}
      className={cn(className)}
    ></Card>
  );
};
