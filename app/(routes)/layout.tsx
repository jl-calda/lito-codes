import { Header } from "@/components/header";
import Navbar from "./_components/navbar";
import { ClientOnly } from "@/components/client-only";

interface RouteLayoutProps {
  children: React.ReactNode;
}

const RouteLayout = ({ children }: RouteLayoutProps) => {
  return (
    <main>
      <div>
        <Header />
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
      </div>
    </main>
  );
};

export default RouteLayout;
