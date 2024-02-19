import type { Metadata } from "next";
import { Exo } from "next/font/google";

import "../globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Sidebar } from "@/components/sidebar";
import { SectionHeader } from "@/components/section-header";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { ClientOnly } from "@/components/client-only";
import { SecondaryNav } from "@/components/secondary-nav";
import { Suspense } from "react";
import { SidebarSkeleton } from "@/components/sidebar-skeleton";

export const metadata: Metadata = {
  title: "lito-codes",
  description: "Personal website of Joselito Calda",
};

const font = Exo({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
    >
      <body className={cn(font.className, "min-h-full flex flex-col")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <HeroSection />
          {/* <Separator /> */}
          <main className=" max-w-7xl mx-auto pt-2 px-4 flex-1 md:h-full flex flex-col">
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
                <ClientOnly>
                  <SectionHeader />
                </ClientOnly>
                {children}
              </div>
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
