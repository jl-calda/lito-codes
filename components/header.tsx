"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
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
      <div>
        <p>Logo</p>
      </div>
      <ThemeToggle />
    </motion.header>
  );
};
