"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between">
      <div>
        <p>Logo</p>
      </div>
      <ul>
        <li>
          <Button
            variant="ghost"
            // asChild
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <SunIcon className="w-4 h-4" />
            ) : (
              <MoonIcon className="w-4 h-4" />
            )}
          </Button>
        </li>
      </ul>
    </header>
  );
};
