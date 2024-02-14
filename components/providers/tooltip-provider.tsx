import {
  TooltipProvider as ShadTooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip";

interface TooltipProviderProps {
  children: React.ReactNode;
}

const TooltipProvider = ({ children }: TooltipProviderProps) => {
  return <ShadTooltipProvider>{children}</ShadTooltipProvider>;
};

export default TooltipProvider;
