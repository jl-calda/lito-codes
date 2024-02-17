import { cn } from "@/lib/utils";
import { Catamaran } from "next/font/google";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const font = Catamaran({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const HeroSection = () => {
  return (
    <section className="py-8 md:py-20">
      <div
        className={cn(
          font.className,
          "text-4xl md:text-7xl p-4 text-center max-w-6xl mx-auto font-bold tracking-wider flex flex-col space-y-1"
        )}
      >
        <p>
          👋 hi! I am{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "var(--gradient)",
            }}
          >
            joey.
          </span>
        </p>
        <p>
          software
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "var(--gradient)",
            }}
          >
            {" developer"}
          </span>
        </p>
        <p>
          based in
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "var(--gradient)",
            }}
          >
            {" singapore"}
          </span>
        </p>
      </div>
    </section>
  );
};
