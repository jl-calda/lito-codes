import type { Metadata } from "next";
import { Header } from "@/components/header";

import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
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
    <html lang="en">
      <body className={""}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Header /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
