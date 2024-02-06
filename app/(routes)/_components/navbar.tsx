"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

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
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <nav className="rounded-full w-fit p-1 mx-auto shadow-md">
      <ul className="flex space-x-2 items-center justify-center bg-transparent backdrop-blur-md rounded-full">
        {paths.map((path, index) => (
          <li
            className=""
            key={crypto.randomUUID()}
          >
            <Button
              className="relative py-5"
              variant="link"
              onClick={() => router.push(path.path)}
            >
              {path.path === pathName && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-accent"
                  style={{ borderRadius: 9999 }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                  }}
                />
              )}
              <span className="relative z-10">{path.name}</span>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
