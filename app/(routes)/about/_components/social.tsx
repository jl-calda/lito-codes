import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { FaUserNinja } from "react-icons/fa6";

import { socials } from "@/data/projects";

export const Social = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <h3 className="text-xl font-semibold flex">
          <FaUserNinja className="h-6 w-6 mr-2 text-primary" />
          Social
        </h3>
        <p className="text-muted-foreground text-sm">
          Find me on these platforms
        </p>
      </CardHeader>
      <CardContent className="flex-1 pb-6 flex flex-row space-x-4 justify-around">
        {socials.map((social) => (
          <Button
            key={crypto.randomUUID()}
            variant="secondary"
            className="rounded-lg"
            size="icon"
            asChild
          >
            <Link href={social.url}>
              <social.icon className="h-10 w-10" />
            </Link>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};
