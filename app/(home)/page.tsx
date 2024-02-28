import { MessageForm } from "./_components/message-form";
import { MessagesBoard } from "./_components/messages-board";
import { MainCard } from "./_components/main-card";
import { ThemeCard } from "./_components/theme-card";
import { ProjectCard } from "./_components/project-card";
import { NavigationCard } from "./_components/navigation-card";
import { BlogCard } from "./_components/blog-card";
import { messages } from "@/lib/messages";
import { getFileNames } from "@/lib/blogs/blogs";
import { getMarkdown } from "@/lib/blogs/markdown";

const HomePage = async () => {
  const visitorMessages = await messages();
  const filenames = getFileNames();
  const blogs = filenames
    .map((filename) => getMarkdown(filename))
    .sort((a, b) => {
      return new Date(b.data.date).getDate() - new Date(a.data.date).getDate();
    });

  return (
    <section className="grid grid-cols-1 md:grid-cols-[1fr_1fr_0.8fr] md:grid-rows-[0.5fr_1.2fr_0.65fr_0.6fr] gap-x-6 gap-y-6 pt-20">
      <MainCard className="md:col-span-2 md:row-span-2 order-1 md:order-1" />
      <MessageForm className="order-5 md:order-2" />
      {/* <ThemeCard className="hidden md:block md:order-3" /> */}
      <MessagesBoard
        messages={visitorMessages}
        className="md:row-span-2  order-4 md:order-4"
      />
      <ProjectCard className="md:row-span-2 order-2 md:order-5" />
      <BlogCard
        blogs={blogs}
        className="md:row-span-2 order-3 md:order-6"
      />
      <NavigationCard className="order-6 md:order-7" />
    </section>
  );
};

export default HomePage;

// mongodb+srv://jlcalda23:DOhgvulBPgXsvZKX@lito.jmu4nqu.mongodb.net/lito_codes
// DATABASE_URL =
//   "mongodb+srv://jlcalda23:DOhgvulBPgXsvZKX@lito.jmu4nqu.mongodb.net/lito_codes";
