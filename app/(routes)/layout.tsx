import Navbar from "./_components/navbar";
import styles from "./layout.module.scss";

interface RouteLayoutProps {
  children: React.ReactNode;
}

const RouteLayout = ({ children }: RouteLayoutProps) => {
  return (
    <main className={styles.routeLayout}>
      <div>
        <Navbar />
        {children}
      </div>
    </main>
  );
};

export default RouteLayout;
