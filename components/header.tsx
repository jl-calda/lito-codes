"use client";

import { ComponentBooleanIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const headerVariants = {
    hidden: { rotate: 0 },
    visible: { rotate: 360 },

    // transition: { opacity: { duration: 0.5 } },
  };

  return (
    <motion.header
      layout
      className="flex items-center justify-between"
      animate="visible"
      initial="hidden"
    >
      <div className="flex items-center justify-center space-x-1 p-2">
        <ComponentBooleanIcon className="rotate-90 h-6 w-6" />
        <p className="text-muted-foreground font-medium">Lito</p>
      </div>
      <ThemeToggle />
    </motion.header>
  );
};
