"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
    <nav className="rounded-full w-fit p-1 mx-auto shadow-md shadow-accent bg-background">
      <ul className="relative flex space-x-2 items-center justify-center backdrop-blur-md rounded-full">
        {paths.map((path, index) => (
          <li
            className=""
            key={crypto.randomUUID()}
            data-active={path.path === pathName}
          >
            <Button
              className="relative py-5 w-30"
              variant="child"
              onClick={() => router.push(path.path)}
            >
              {path.path === pathName && (
                <motion.div
                  layoutId="nav-indicator"
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
        {/* <div
          className={cn(
            "absolute top-[50%]  -translate-y-1/2 bg-red-500 rounded-full transition-transform duration-1000 w-30",
            pathName === "/" && "translate-x-0 w-1/6",
            pathName === "/profile" && "translate-x-1/4",
            pathName === "/projects" && "translate-x-2/4",
            pathName === "/contact" && "translate-x-3/4"
          )}
        /> */}
      </ul>
    </nav>
  );
};

export default Navbar;
