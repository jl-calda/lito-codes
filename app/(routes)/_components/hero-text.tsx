"use client";

import { motion } from "framer-motion";

export const HeroText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center max-w-xl mx-auto"
    >
      <h1 className="text-3xl md:text-5xl lg:text-6xl">
        We help businesses and professionals establish their online presence.
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl">
        We are a team of professionals who are passionate about helping
        businesses grow.
      </p>
    </motion.div>
  );
};
