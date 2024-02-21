import { FaSpinner } from "react-icons/fa6";

export const FormPending = () => {
  return (
    <div className="text-amber-700 text-base font-semibold flex items-center justify-center bg-yellow-500/10 py-4 rounded-lg animate-in animate-out">
      <FaSpinner className="h-6 w-6 mr-2 animate-spin-slow" />
      Sending message
    </div>
  );
};
