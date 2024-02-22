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
    <section className="grid grid-cols-[1fr_1fr_0.8fr_0.3fr] grid-rows-[0.5fr_1.2fr_0.5fr_0.2fr] gap-x-6 gap-y-6">
      <MainCard className="col-span-2 row-span-2" />
      <MessageForm />
      <ThemeCard />
      <MessagesBoard className="row-span-2 col-span-2" />
      <ProjectCard className="row-span-2" />
      <BlogCard className="row-span-2" />
      <NavigationCard className="col-span-2" />
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
