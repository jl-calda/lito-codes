import { Catamaran } from "next/font/google";
import { CardHeader } from "./ui/card";
import { IconType } from "react-icons/lib";
import { cn } from "@/lib/utils";

const font = Catamaran({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

interface CardTitleProps {
  icon: IconType;
  title: string;
  subtitle: string;
}

export const CardTitle = ({ icon: Icon, title, subtitle }: CardTitleProps) => {
  return (
    <CardHeader>
      <h3
        className={cn(
          font.className,
          "text-2xl font-semibold flex items-center"
        )}
      >
        <Icon className="w-6 h-6 mr-2 text-primary" />
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </CardHeader>
  );
};
