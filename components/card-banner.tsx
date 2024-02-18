import { cn } from "@/lib/utils";

interface CardBannerProps {
  secondary?: boolean;
  text: string;
}

export const CardBanner = ({ secondary, text }: CardBannerProps) => {
  return (
    <div
      style={{
        boxShadow: "5px 5px 0px 0 rgba(0,0,0)",
      }}
      className={cn(
        secondary ? "bg-primary text-muted" : "bg-amber-500 text-white",
        "absolute top-2 right-2 px-4 py-1  font-medium text-xs font-mono"
      )}
    >
      <p>{text}</p>
    </div>
  );
};
