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
    icon: <GitHubLogoIcon className="w-4 h-4" />,
  },
  {
    name: "Twitter",
    url: "www.twitter.com",
    icon: <TwitterLogoIcon className="h-4 w-4" />,
  },
  {
    name: "LinkedIn",
    url: "www.linkedin.com",
    icon: <LinkedInLogoIcon className="w-4 h-4" />,
  },
];

export const Footer = () => {
  return (
    <footer className="col-span-2 h-20 bg-primary flex flex-row items-center justify-between border-t py-4 rounded-tl-xl rounded-tr-xl px-4">
      <p className="text-muted text-sm">
        © {new Date().getFullYear()} lito.codes
      </p>
      <div className="flex flex-row items-center space-x-2">
        {socials.map((social, index) => (
          <Button
            key={index}
            asChild
            size="icon"
            variant="ghost"
            className="text-muted"
          >
            <Link href={social.url}>{social.icon}</Link>
          </Button>
        ))}
      </div>
    </footer>
  );
};
