import { Separator } from "./ui/separator";

interface SectionSeparatorProps {
  title: string;
}

export const SectionSeparator = ({ title }: SectionSeparatorProps) => {
  return (
    <div className="flex flex-row space-x-2 items-center justify-center w-full">
      <p className="text-lg font-mono font-medium text-primary">{title}</p>
      <Separator className="flex-1" />
    </div>
  );
};
