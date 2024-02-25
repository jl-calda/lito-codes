import { cn } from "@/lib/utils";

interface BannerSuccessProps {
  message: string;
}

interface BannerSuccessProps {
  message: string;
}

export const BannerSuccess = ({ message }: BannerSuccessProps) => {
  return (
    <div
      className={cn(
        "absolute top-2 right-2 px-4 py-1  font-medium text-xs font-mono"
      )}
    >
      {message}
    </div>
  );
};
