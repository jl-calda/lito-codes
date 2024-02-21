import { cn } from "@/lib/utils";
import {
  SiAuthy,
  SiCss3,
  SiGo,
  SiHtml5,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const icons = {
  react: SiReact,
  "next.js": SiNextdotjs,
  tailwindcss: SiTailwindcss,
  typescript: SiTypescript,
  nodejs: SiNodedotjs,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  prisma: SiPrisma,
  go: SiGo,
  css: SiCss3,
  html: SiHtml5,
  "next-auth": SiAuthy,
};

interface StackIconsProps {
  technology: string;
  className?: string;
}

export const isWithStackIcons = (technology: string) => {
  return technology in icons;
};

export const StackIcons = ({ technology, className }: StackIconsProps) => {
  const Icon = icons[technology as keyof typeof icons];

  if (!Icon) {
    return null;
  }

  return (
    <div>
      <Icon className={cn(className, "h-6 w-6")} />
    </div>
  );
};
