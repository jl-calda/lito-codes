import { SunIcon } from "@radix-ui/react-icons";
import styles from "./header.module.scss";
import { Button } from "./ui/button";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <ul>
        <li>
          <Button asChild>
            <SunIcon />
          </Button>
        </li>
        <li>
          <Button asChild>
            <SunIcon />
          </Button>
        </li>
      </ul>
    </header>
  );
};
