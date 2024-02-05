"use client";

import { Montserrat_Alternates } from "next/font/google";
import { TriangleLeftIcon } from "@radix-ui/react-icons";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { TriangleRightIcon } from "@radix-ui/react-icons";

import styles from "./logo.module.scss";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const font = Montserrat_Alternates({ subsets: ["latin"], weight: "400" });

export const Logo = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push("/")}
      className={styles.logo_button}
    >
      <div className={styles.logo}>
        <TriangleLeftIcon className={styles.icon_up} />
        <p className={font.className}>lito</p>
        <TriangleRightIcon className={styles.icon_down} />
      </div>
      <div className={styles.highlight} />
    </Button>
  );
};
