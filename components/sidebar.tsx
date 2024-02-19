"use client";
import {
  FaUserLarge,
  FaCode,
  FaBlogger,
  FaShirt,
  FaMessage,
  FaCubesStacked,
  FaHouse,
  FaHandHolding,
  FaPaperPlane,
} from "react-icons/fa6";

import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactElement } from "react";
import { Input } from "./ui/input";
import { useMediaQuery } from "@uidotdev/usehooks";
import { SidebarSeparator } from "./sidebar-separator";

type NavItem = {
  name: string;
  url: string;
  icon: ReactElement<any, any>;
  live: boolean;
  active?: boolean;
};

export const Sidebar = () => {
  const pathName = usePathname();
  const navitems: NavItem[] = [
    {
      name: "Home",
      url: "/",
      icon: <FaHouse className="h-4 w-4 mr-2" />,
      live: true,
      active: pathName === "/",
    },
    {
      name: "About",
      url: "/about",
      icon: <FaUserLarge className="h-4 w-4 mr-2" />,
      live: true,
      active: pathName.startsWith("/about"),
    },
    {
      name: "Projects",
      url: "/projects",
      icon: <FaCubesStacked className="h-4 w-4 mr-2" />,
      live: true,
      active: pathName.startsWith("/projects"),
    },
    {
      name: "Services",
      url: "/services",
      icon: <FaHandHolding className="h-4 w-4 mr-2" />,
      live: true,
      active: pathName.startsWith("/services"),
    },
    {
      name: "Contact",
      url: "/contact",
      icon: <FaMessage className="h-4 w-4 mr-2" />,
      live: true,
      active: pathName.startsWith("/contact"),
    },
    {
      name: "Blog",
      url: "/blog",
      icon: <FaBlogger className="h-4 w-4 mr-2" />,
      live: true,
      active: pathName.startsWith("/blog"),
    },
    {
      name: "Code",
      url: "/code",
      icon: <FaCode className="h-4 w-4 mr-2" />,
      live: true,
      active: pathName.startsWith("/code"),
    },
    {
      name: "Merch",
      url: "/merch",
      icon: <FaShirt className="h-4 w-4 mr-2" />,
      live: false,
      active: pathName.startsWith("/merch"),
    },
  ];

  const isMobile = useMediaQuery("only screen and (max-width : 768px)");
  return (
    <aside className="flex flex-col space-y-2">
      <Card
        className="hidden md:block"
        style={{
          backgroundImage: "var(--gradient)",
        }}
      >
        <CardHeader className="p-2 text-muted text-center">
          Subscribe to newsletter
        </CardHeader>
        <CardContent className="flex items-center justify-center space-x-2">
          <Input className="bg-background w-4/5" />
          <Button size="icon">
            <FaPaperPlane className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
      <SidebarSeparator title="Navigation" />
      <nav className="">
        <div className="flex flex-wrap gap-x-2 gap-y-2">
          {navitems.map((item) => (
            <Button
              variant={item.active ? "outline" : "secondary"}
              size={isMobile ? "sm" : "default"}
              className=""
              key={crypto.randomUUID()}
              disabled={!item.live}
              asChild={item.live}
            >
              <Link
                href={item.url}
                className="flex items-center"
              >
                {item?.icon}
                {item?.name}
              </Link>
            </Button>
          ))}
        </div>
      </nav>
    </aside>
  );
};
