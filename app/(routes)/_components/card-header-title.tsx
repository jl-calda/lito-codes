import { cn } from "@/lib/utils";
import { Catamaran } from "next/font/google";

const font = Catamaran({
  weight: ["400", "700"],
  subsets: ["latin"],
});

interface CardHeaderProps {
  title: string;
  subtitle: string;
}

export const CardHeaderTitle = ({ title, subtitle }: CardHeaderProps) => {
  return (
    <div className={cn(font.className)}>
      <h2 className="text-4xl font-bold tracking-tighter">{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};
