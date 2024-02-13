import { Header } from "@/components/header";
import Navbar from "./_components/navbar";

interface RouteLayoutProps {
  children: React.ReactNode;
}

const RouteLayout = ({ children }: RouteLayoutProps) => {
  return (
    <main>
      <div>
        <Header />
        <Navbar />
        {children}
      </div>
    </main>
  );
};

export default RouteLayout;
