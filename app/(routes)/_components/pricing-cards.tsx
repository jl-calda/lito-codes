import React from "react";
import { PriceCard } from "./price-card";

const pricing = [
  {
    title: "Professional",
    description:
      "Perfect for professionals who need personal website and portfolio.",
    price: 5000,
    monthly: 500,
    features: [
      "Landing page",
      "Portfolio / Blog Page",
      "Contact Page",
      "Admin Messages Dashboard",
    ],
  },
  {
    title: "Startup",
    price: 8000,
    monthly: 500,
    features: [
      "Shop Page",
      "Portfolio / Blog Page",
      "Contact Page",
      "Admin Dashboard",
    ],
  },
  {
    title: "Enterprise",
    price: 29,
    features: [
      "Unlimited projects",
      "Unlimited storage",
      "Unlimited users",
      "Priority support",
      "Personal account manager",
    ],
  },
];

export type PriceType = {
  title: string;
  description?: string;
  price: number;
  monthly?: number;
  features: string[];
};

interface PricingCardProps {
  data: PriceType;
}

export const PricingCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-x-6">
      {pricing.map((price) => (
        <PriceCard
          data={price}
          key={crypto.randomUUID()}
        />
      ))}
    </div>
  );
};
