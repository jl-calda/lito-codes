"use client";
import { Josefin_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Josefin_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: "easeInOut",
    },
  },
};

const item = {
  hidden: { x: -10, y: 5, opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1 },
};

export const HeroText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
      className="flex flex-col items-center justify-center max-w-3xl mx-auto space-y-10 flex-wrap"
    >
      <h1
        className={cn(
          font.className,
          "text-3xl md:text-6xl lg:text-7xl text-center tracking-tight"
        )}
      >
        Helping businesses and professionals establish their online presence.
        <Image
          src="/svgs/asterisk.svg"
          alt="Asterisk"
          className="inline-block w-10 h-10 text-accent-foreground transform rotate-12 -translate-y-2 -translate-x-2"
          width={32}
          height={32}
        />
      </h1>
      <motion.ul
        className="flex flex-row items-center space-x-2 flex-wrap"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <motion.li
          className="relative px-4 py-2 text-sm text-neutral-50 rounded-full bg-gradient-to-r from-neutral-500 to-neutral-400 shadow-inner shadow-neutral-500"
          variants={item}
        >
          Branding
        </motion.li>
        <motion.li
          className="relative px-4 py-2 text-sm text-neutral-100 rounded-full bg-gradient-to-r from-neutral-400 to-neutral-300 shadow-inner shadow-neutral-500"
          variants={item}
        >
          Expertise
        </motion.li>
        <motion.li
          className="relative px-4 py-2 text-sm text-neutral-500 rounded-full bg-gradient-to-r  from-neutral-300 to-neutral-200 shadow-inner shadow-neutral-500"
          variants={item}
        >
          Ecommerce
        </motion.li>
        <motion.li
          className="relative px-4 py-2 text-sm text-neutral-600 rounded-full bg-gradient-to-r from-neutral-200 to-neutral-100 shadow-inner shadow-neutral-500"
          variants={item}
        >
          Website
        </motion.li>
        <motion.li
          className="relative px-4 py-2 text-sm  text-neutral-700 rounded-full bg-gradient-to-r from-neutral-100 to-neutral-50 shadow-inner shadow-neutral-500"
          variants={item}
        >
          Website
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};
