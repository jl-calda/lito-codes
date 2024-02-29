import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { FaUserNinja } from "react-icons/fa6";

import { socials } from "@/data/projects";
import { CardTitle } from "@/components/card-title";

export const Social = () => {
  return (
    <Card className="flex flex-col">
      <CardTitle
        title="Social"
        subtitle="Find me on these platforms"
        icon={FaUserNinja}
      />
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
