import { Catamaran } from "next/font/google";
import { CardHeader } from "./ui/card";
import { IconType } from "react-icons/lib";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

const font = Catamaran({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

interface CardTitleProps {
  icon?: IconType;
  title: string;
  subtitle: string;
  muted?: boolean;
  href?: string;
}

export const CardTitle = ({
  icon: Icon,
  title,
  subtitle,
  muted,
  href,
}: CardTitleProps) => {
  return (
    <CardHeader>
      {href ? (
        <Button
          variant="link"
          asChild
          className="p-0 w-fit"
        >
          <Link href={href}>
            <h3
              className={cn(
                font.className,
                muted ? "text-muted" : "",
                "text-lg md:text-2xl font-semibold flex items-center"
              )}
            >
              {Icon && (
                <Icon
                  className={cn(
                    muted ? "text-muted" : "text-primary",
                    "w-6 h-6 mr-2"
                  )}
                />
              )}
              {title}
            </h3>
          </Link>
        </Button>
      ) : (
        <h3
          className={cn(
            font.className,
            muted ? "text-muted" : "",
            "text-2xl font-semibold flex items-center"
          )}
        >
          {Icon && (
            <Icon
              className={cn(
                muted ? "text-muted" : "text-primary",
                "w-6 h-6 mr-2"
              )}
            />
          )}
          {title}
        </h3>
      )}

      <p
        className={cn(
          muted ? "text-muted" : "text-muted-foreground",
          "text-sm"
        )}
      >
        {subtitle}
      </p>
    </CardHeader>
  );
};
