import { FaCheck } from "react-icons/fa6";

interface FormMessageProps {
  message: string;
}

export const FormError = ({ message }: FormMessageProps) => {
  return (
    <div className="text-red-700 text-base font-semibold flex items-center justify-center bg-red-500/10 py-4 rounded-lg animate-in animate-out">
      <FaCheck className="h-6 w-6 mr-2" />
      {message}
    </div>
  );
};
