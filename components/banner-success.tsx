import { cn } from "@/lib/utils";

interface BannerSuccessProps {
  message: string;
}

export const BannerSuccess = ({ message }: BannerSuccessProps) => {
  return (
    <div
      style={{
        boxShadow: "5px 5px 0px 0 rgba(0,0,0)",
      }}
      className={cn(
        "text-white flex items-center justify-center bg-green-500",
        "absolute top-2 right-2 px-4 py-1 font-medium text-xs font-mono"
      )}
    >
      {message}
    </div>
  );
};
