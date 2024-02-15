import React from "react";
import { HeroText } from "./hero-text";
import { Header } from "@/components/header";

export const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <HeroText />
      </div>
    </section>
  );
};
