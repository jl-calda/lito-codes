"use client";

import { Header } from "@/components/header";
import Navbar from "./_components/navbar";
import { ClientOnly } from "@/components/client-only";
import { motion } from "framer-motion";

interface RouteLayoutProps {
  children: React.ReactNode;
}

const RouteLayout = ({ children }: RouteLayoutProps) => {
  return (
    <>
      <Header />
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delayChildren: 0.3 }}
        onTransitionEnd={(e) => {
          console.log(e);
        }}
        className="max-w-7xl flex flex-col mx-auto"
      >
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: [0.1, 0.1, 0.1] }}
          className="absolute inset-0 bg-black opacity-0"
        > */}
        {children}
        {/* </motion.div> */}
      </motion.main>
    </>
  );
};

export default RouteLayout;
