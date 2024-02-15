import { Josefin_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Josefin_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

interface SectionHeaderProps {
  title: string;
  description: string;
}

export const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <h2 className={cn(font.className, "text-4xl font-semibold")}>{title}</h2>
      <p className={cn("text-muted-foreground text-xl tracking-wide")}>
        {description}
      </p>
    </div>
  );
};
