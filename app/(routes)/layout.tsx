import type { Metadata } from "next";

import "../globals.css";
import { Sidebar } from "@/components/sidebar";
import { SectionHeader } from "@/components/section-header";
import { Footer } from "@/components/footer";
import { ClientOnly } from "@/components/client-only";
import { SecondaryNav } from "@/components/secondary-nav";
import { Suspense } from "react";
import { SidebarSkeleton } from "@/components/sidebar-skeleton";

export const metadata: Metadata = {
  title: "lito-codes",
  description: "Personal website of Joselito Calda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3.5fr] md:gap-y-4 gap-x-4 pt-2 md:flex-1">
        <div className="flex flex-col space-y-2">
          {/* <SidebarSkeleton /> */}
          <Suspense fallback={<SidebarSkeleton />}>
            <ClientOnly>
              <Sidebar />
              <SecondaryNav />
            </ClientOnly>
          </Suspense>
        </div>
        <div className="flex flex-col space-y-2">
          {/* <ClientOnly>
            <SectionHeader />
          </ClientOnly> */}
          {children}
        </div>
      </div>
    </>
  );
}
