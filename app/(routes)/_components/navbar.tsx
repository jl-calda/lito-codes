"use client";

import Link from "next/link";
import styles from "./navbar.module.scss";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const paths = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/profile",
    name: "Profile",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        {paths.map((path, index) => (
          <li
            key={crypto.randomUUID()}
            data-active={pathName === path.path}
          >
            <Button
              asChild
              className={styles.link}
            >
              <Link href={path.path}>{path.name}</Link>
            </Button>
          </li>
        ))}
        <div className={styles.highlight} />
      </ul>
    </nav>
  );
};

export default Navbar;
