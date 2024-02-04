import { SunIcon } from "@radix-ui/react-icons";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <p>Logo</p>
      </div>
      <ul>
        <li>
          <SunIcon />
        </li>
      </ul>
    </header>
  );
};
