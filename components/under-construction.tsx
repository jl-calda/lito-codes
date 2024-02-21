import { FaTriangleExclamation } from "react-icons/fa6";

export const UnderConstruction = () => {
  return (
    <section className="py-4 items-center justify-center h-full w-full flex">
      <div className="flex-1 flex items-center justify-center space-x-2">
        <FaTriangleExclamation className="animate-pulse w-20 h-20 text-muted-foreground" />
        <p className="text-2xl font-bold text-muted-foreground">
          Under Construction
        </p>
      </div>
    </section>
  );
};
