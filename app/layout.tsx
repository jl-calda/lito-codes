import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { SocketProvider } from "@/components/providers/socket-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Exo } from "next/font/google";

import "./globals.css";
import { Footer } from "@/components/footer";
import { BackgroundGradientAnimation } from "@/components/animated/background-gradient";

const font = Exo({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
    >
      <body
        className={cn(font.className, "min-h-full flex flex-col items-center")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SocketProvider>
            <Header />
            <HeroSection />
            {/* <Separator /> */}

            <main className="w-full max-w-7xl flex-1 md:h-full px-2 lg:px-4 flex flex-col gap-y-4">
              {children}
              <Footer />
            </main>
          </SocketProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default HomeLayout;
