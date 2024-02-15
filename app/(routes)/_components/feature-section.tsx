import React from "react";
import { FeatureCard } from "./feature-card";
import { SectionHeader } from "@/components/section-header";

const features = [
  {
    title: "Professional Image and Branding",
    description:
      "A website establishes your professional online presence, showcasing your expertise and services in a credible, branded manner around the clock, helping to leave a lasting positive impression on visitors",
    image: "/svgs/branding.svg",
    icon: "",
  },
  {
    title: "Increased Visibility and Reach",
    description:
      "Your website expands your reach globally, enabling potential clients worldwide to discover and engage with your offerings, fostering business growth",
    image: "/svgs/reach.svg",
    icon: "",
  },
  {
    title: "Enhanced Credibility and Trustworthiness",
    description:
      "With testimonials, achievements, and past projects showcased, your website builds credibility and trust, serving as a centralized hub for visitors to learn about you and your capabilities",
    image: "/svgs/feedback.svg",
    icon: "",
  },
  {
    title: "Control and Flexibility",
    description:
      "Unlike social media platforms, your website gives you control over design, content, and user experience, ensuring you're not subject to algorithm changes, optimizing for conversions and tailoring the user journey",
    image: "/svgs/analysis.svg",
    icon: "",
  },
];

export type FeatureDataType = {
  title: string;
  description: string;
  image: string;
  icon: string;
};

export const FeatureSection = () => {
  return (
    <section className="flex flex-col space-y-10">
      <SectionHeader
        title="Why You Need a Website"
        description="A website is a powerful tool for businesses and professionals to establish a professional online presence, increase visibility, and foster credibility."
      />
      <div className="grid md:grid-cols-4 gap-x-4 gap-y-4">
        {features.map((feature, index) => (
          <FeatureCard
            data={feature}
            key={crypto.randomUUID()}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
