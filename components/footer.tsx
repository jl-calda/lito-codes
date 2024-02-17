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
    <footer className="col-span-2 h-20 bg-primary flex flex-row items-center justify-between border-t py-4">
      <p className="text-white text-sm">
        © {new Date().getFullYear()} lito.codes
      </p>
      <div className="flex flex-row items-center space-x-2">
        {socials.map((social, index) => (
          <Button
            key={index}
            asChild
            variant="ghost"
          >
            <Link href={social.url}>{social.icon}</Link>
          </Button>
        ))}
      </div>
    </footer>
  );
};
