"use client";

import { UnderConstruction } from "@/components/under-construction";
import { VisitingCard } from "./_components/visiting-card";
import { ServicesCard } from "./_components/services-card";
import { StalkingCard } from "./_components/stalking-card";
import { MessagesCard } from "./_components/messages-card";
import { getMessages } from "@/actions/get-messages";
import { revalidatePath } from "next/cache";
import { MessageForm } from "./_components/message-form";
import { MessagesBoard } from "./_components/messages-board";
import { MainCard } from "./_components/main-card";
import { ThemeCard } from "./_components/theme-card";
import { ProjectCard } from "./_components/project-card";
import { NavigationCard } from "./_components/navigation-card";
import { BlogCard } from "./_components/blog-card";

// export const revalidate = 1;

const HomePage = async () => {
  // return <UnderConstruction />;
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1fr_1fr_0.8fr_0.3fr] md:grid-rows-[0.5fr_1.2fr_0.5fr_0.2fr] gap-x-6 gap-y-6 pt-20">
      <MainCard className="md:col-span-2 md:row-span-2 order-1 md:order-1" />
      <MessageForm className="order-5 md:order-2" />
      <ThemeCard className="hidden md:block md:order-3" />
      <MessagesBoard className="md:row-span-2 md:col-span-2 order-4 md:order-4" />
      <ProjectCard className="md:row-span-2 order-2 md:order-5" />
      <BlogCard className="md:row-span-2 order-3 md:order-6" />
      <NavigationCard className="md:col-span-2 order-6 md:order-7" />
    </section>
  );
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1.2fr] gap-x-4 gap-y-4 md:py-4">
      <VisitingCard />
      <ServicesCard />
      <StalkingCard />
      <MessagesCard />
    </section>
  );
};

export default HomePage;

// mongodb+srv://jlcalda23:DOhgvulBPgXsvZKX@lito.jmu4nqu.mongodb.net/lito_codes
// DATABASE_URL =
//   "mongodb+srv://jlcalda23:DOhgvulBPgXsvZKX@lito.jmu4nqu.mongodb.net/lito_codes";
