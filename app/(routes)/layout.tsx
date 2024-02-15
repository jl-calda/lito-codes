import { Header } from "@/components/header";
import Navbar from "./_components/navbar";
import { ClientOnly } from "@/components/client-only";

interface RouteLayoutProps {
  children: React.ReactNode;
}

const RouteLayout = ({ children }: RouteLayoutProps) => {
  return (
    <>
      <Header />
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <main className="max-w-7xl flex flex-col mx-auto">{children}</main>
    </>
  );
};

export default RouteLayout;
