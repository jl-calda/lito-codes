import React from "react";
import { PriceType } from "./pricing-cards";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon } from "@radix-ui/react-icons";

interface PricingCardProps {
  data: PriceType;
}

export const PriceCard = ({ data }: PricingCardProps) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="h-40">
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul>
          {data.features.map((feature, index) => (
            <li
              key={crypto.randomUUID()}
              className="flex"
            >
              <CheckIcon className="w-4 h-4 mr-4" />
              <p>{feature}</p>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};
