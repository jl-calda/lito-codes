import { SectionHeader } from "@/components/section-header";
import React from "react";
import { PricingCards } from "./pricing-cards";

export const PricingSection = () => {
  return (
    <section>
      <SectionHeader
        title="Pricing"
        description="Affordable, transparent pricing for all business sizes."
      />
      <PricingCards />
    </section>
  );
};
