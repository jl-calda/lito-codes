import { Separator } from "./ui/separator";

interface SidebarSeparatorProps {
  title: string;
}

export const SidebarSeparator = ({ title }: SidebarSeparatorProps) => {
  return (
    <div className="flex flex-row space-x-2 items-center justify-center w-full">
      <p className="text-muted-foreground text-xs font-mono mix-blend-exclusion">
        {title}
      </p>
      <Separator className="flex-1" />
    </div>
  );
};
