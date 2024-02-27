import { cn } from "@/lib/utils";
import { FaSpinner } from "react-icons/fa6";

interface BannerPendingProps {
  message: string;
}

export const BannerPending = ({ message }: BannerPendingProps) => {
  return (
    <div
      style={{
        boxShadow: "5px 5px 0px 0 rgba(0,0,0)",
      }}
      className={cn(
        "text-white flex items-center justify-center space-x-1 bg-amber-500",
        "absolute top-2 right-2 px-4 py-1 font-medium text-xs font-mono"
      )}
    >
      <span>{`${message} `}</span>
      <FaSpinner className="animate-spin-slow" />
    </div>
  );
};
