"use client";

import { FaTriangleExclamation } from "react-icons/fa6";

const ErrorPage = () => {
  return (
    <section className="flex py-4 items-center justify-center h-full">
      <div className="flex-1 flex items-center justify-center">
        <FaTriangleExclamation className="animate-pulse w-20 h-20 text-muted-foreground" />
        <p className="text-2xl font-bold text-muted-foreground">
          Something went wrong
        </p>
      </div>
    </section>
  );
};

export default ErrorPage;
