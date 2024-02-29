import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { SocketProvider } from "@/components/providers/socket-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Exo } from "next/font/google";

import "./globals.css";
import { Footer } from "@/components/footer";
import { BackgroundGradientAnimation } from "@/components/animated/background-gradient";
import dynamic from "next/dynamic";
import { ClientOnly } from "@/components/client-only";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "lito-codes",
  description: "Personal website of Joselito Calda",
  keywords: [
    "Joselito Calda",
    "lito-codes",
    "lito",
    "codes",
    "Joselito",
    "Calda",
    "frontend developer",
    "singapore",
    "react",
    "nextjs",
    "tailwindcss",
    "typescript",
    "javascript",
    "web development",
    "web developer",
    "software engineer",
    "software developer",
    "joey calda",
    "lito codes",
    "lito calda",
    "lito",
  ],
  applicationName: "lito-codes",
};

const font = Exo({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

interface HomeLayoutProps {
  children: React.ReactNode;
  modals?: React.ReactNode;
}

const HomeLayout = ({ children, modals }: HomeLayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
    >
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x52"
          href="/favicon-32x32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/apple-touch-icon.png"
        />
      </head>
      <body className={cn(font.className, "min-h-full")}>
        <ClientOnly>
          <BackgroundGradientAnimation
            containerClassName="flex"
            className="w-full items-center flex flex-col z-10"
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {/* <SocketProvider> */}
              <Header />
              <HeroSection />
              {/* <Separator /> */}

              <div className="w-full max-w-7xl flex-1 md:h-full px-2 lg:px-4 flex flex-col gap-y-4">
                <div className="flex-1">{children}</div>
                <Footer />
              </div>
              {/* </SocketProvider> */}
            </ThemeProvider>
          </BackgroundGradientAnimation>
        </ClientOnly>
      </body>
    </html>
  );
};

export default HomeLayout;
