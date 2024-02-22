import { UnderConstruction } from "@/components/under-construction";
import { VisitingCard } from "./_components/visiting-card";
import { ServicesCard } from "./_components/services-card";
import { StalkingCard } from "./_components/stalking-card";
import { MessagesCard } from "./_components/messages-card";
import { getMessages } from "@/actions/get-messages";
import { revalidatePath } from "next/cache";
import { MessageForm } from "./_components/message-form";

// export const revalidate = 1;

const HomePage = async () => {
  // return <UnderConstruction />;
  return <MessageForm />;
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
