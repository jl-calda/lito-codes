"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      asChild
      variant="child"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <motion.div
        layoutId="theme"
        animate={{ rotate: 360 }}
        whileTap={{
          scale: 1,
          rotate: 0,
        }}
        whileHover={{
          scale: 1,
          rotate: 0,
          filter: theme === "dark" ? "invert(1)" : "invert(0)",
        }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </motion.div>
    </Button>
  );
};
