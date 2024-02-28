import { FaSpinner } from "react-icons/fa6";

const LoadingPage = () => {
  return (
    <section className="flex py-4 items-center justify-center h-full">
      <div className="flex-1 flex items-center justify-center">
        <FaSpinner className="animate-spin-slow w-20 h-20 text-muted-foreground" />
      </div>
    </section>
  );
};

export default LoadingPage;
