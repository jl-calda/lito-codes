import { CardTitle } from "@/components/card-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  FaBlogger,
  FaCode,
  FaConfluence,
  FaCubesStacked,
  FaHandHolding,
  FaHouse,
  FaMessage,
  FaShirt,
  FaUserLarge,
} from "react-icons/fa6";

interface NavigationCardProps {
  className?: string;
}

export const NavigationCard = ({ className }: NavigationCardProps) => {
  const navitems = [
    {
      name: "About",
      url: "/about",
      icon: FaUserLarge,
      live: true,
    },
    {
      name: "Projects",
      url: "/projects",
      icon: FaCubesStacked,
      live: true,
    },
    {
      name: "Services",
      url: "/services",
      icon: FaHandHolding,
      live: true,
    },
    {
      name: "Contact",
      url: "/contact",
      icon: FaMessage,
      live: true,
    },
    {
      name: "Blog",
      url: "/blog",
      icon: FaBlogger,
      live: true,
    },
    {
      name: "Code",
      url: "/code",
      icon: FaCode,
      live: true,
    },
    {
      name: "Merch",
      url: "/merch",
      icon: FaShirt,
      live: false,
    },
  ];
  return (
    <Card className={cn(className)}>
      <CardTitle
        title="Navigation"
        subtitle="Explore the different sections of this site."
        icon={FaConfluence}
      />
      <CardContent>
        <div className="flex flex-wrap gap-x-2 gap-y-2">
          {navitems.map((item) => (
            <Button
              key={crypto.randomUUID()}
              variant={item.live ? "outline" : "ghost"}
              size="sm"
              disabled={!item.live}
              asChild={item.live}
            >
              <Link
                href={item.url}
                className="flex items-center"
              >
                <item.icon className="h-4 w-4 mr-2" />
                <span>{item.name}</span>
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
