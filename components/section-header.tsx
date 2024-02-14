import React from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
}

export const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <h2 className="text-4xl font-semibold">{title}</h2>
      <p className="text-muted-foreground text-xl tracking-wide">
        {description}
      </p>
    </div>
  );
};
