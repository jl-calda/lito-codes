import type { Metadata } from "next";

import "../../globals.css";
import { Sidebar } from "@/components/sidebar";
import { SectionHeader } from "@/components/section-header";
import { Footer } from "@/components/footer";
import { ClientOnly } from "@/components/client-only";
import { SecondaryNav } from "@/components/secondary-nav";
import { Suspense } from "react";
import { SidebarSkeleton } from "@/components/sidebar-skeleton";
import { getFileNames } from "@/lib/blogs/blogs";
import { getMarkdown } from "@/lib/blogs/markdown";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fileNames = getFileNames();
  const blogs = fileNames.map((filename) => getMarkdown(filename));
  const jsonBlogs = JSON.parse(JSON.stringify(blogs));

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_3.5fr] md:gap-y-4 gap-x-4 pt-2 md:flex-1 h-full flex-1">
      <div className="flex flex-col space-y-2">
        {/* <SidebarSkeleton /> */}
        <Suspense fallback={<SidebarSkeleton />}>
          <ClientOnly>
            <Sidebar />
            <SecondaryNav
              blogs={jsonBlogs}
              fileNames={fileNames}
            />
          </ClientOnly>
        </Suspense>
      </div>
      <div className="flex flex-col space-y-2 items-center py-4 md:py-0 px-2">
        {children}
      </div>
    </div>
  );
}
