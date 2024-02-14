import {
  ComponentBooleanIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const socials = [
  {
    name: "GitHub",
    url: "www.github.com",
    icon: <GitHubLogoIcon />,
  },
  {
    name: "Twitter",
    url: "www.twitter.com",
    icon: <TwitterLogoIcon />,
  },
  {
    name: "LinkedIn",
    url: "www.linkedin.com",
    icon: <LinkedInLogoIcon />,
  },
];

export const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-between pb-2 border-t py-4">
      <div className="flex items-center justify-center space-x-2">
        <ComponentBooleanIcon className="animate-spin-slow h-6 w-6 duration-2000 shadow-lg shadow-slate-50" />
        <div className="flex flex-col justify-start-start space-x-2">
          <p className="text-muted-foreground text-sm">
            Joey Calda &copy; 2024
          </p>
          <p className="text-muted-foreground text-sm">All rights reserved</p>
        </div>
      </div>

      <div className="flex flex-row items-center space-x-2">
        {socials.map((social, index) => (
          <Button
            key={index}
            asChild
            variant="ghost"
            tooltip
            tooltipText={`Go to ${social.name} page`}
          >
            <Link href={social.url}>{social.icon}</Link>
          </Button>
        ))}
      </div>
    </footer>
  );
};
