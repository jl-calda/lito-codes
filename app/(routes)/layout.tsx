import Navbar from "./_components/navbar";
import styles from "./layout.module.scss";

interface RouteLayoutProps {
  children: React.ReactNode;
}

const RouteLayout = ({ children }: RouteLayoutProps) => {
  return (
    <main className={styles.routeLayout}>
      <Navbar />
      {children}
    </main>
  );
};

export default RouteLayout;
