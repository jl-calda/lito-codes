"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

export const ModalLayoutHeader = () => {
  const router = useRouter();
  return (
    <header className="flex items-center justify-center py-1 px-2 shadow-lg bg-primary w-full">
      <div className="w-full flex items-center justify-between p-2 rounded-lg">
        <Button
          variant="secondary"
          onClick={() => router.back()}
        >
          <FaArrowLeft className="w-4 h-4" />
        </Button>
        <Button variant="outline">
          <Link
            href="/"
            className="font-mono"
          >
            lito.codes
          </Link>
        </Button>
      </div>
    </header>
  );
};
