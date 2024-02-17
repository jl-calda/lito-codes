import type { Metadata } from "next";
import { Exo } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Sidebar } from "@/components/sidebar";
import { SectionHeader } from "@/components/section-header";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { ClientOnly } from "@/components/client-only";

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
      <body className={cn(font.className, "min-h-full")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <HeroSection />
          <main className=" max-w-6xl mx-auto pt-4">
            <div className="grid grid-cols-[1fr_3.8fr]  gap-x-4 h-full py-4 px-2">
              <div className="flex flex-col space-y-2">
                <Sidebar />
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
