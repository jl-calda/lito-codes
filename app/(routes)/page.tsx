import { UnderConstruction } from "@/components/under-construction";
import { VisitingCard } from "./_components/visiting-card";
import { ServicesCard } from "./_components/services-card";
import { StalkingCard } from "./_components/stalking-card";
import { MessagesCard } from "./_components/messages-card";

const HomePage = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1.2fr] gap-x-6 gap-y-6 md:py-4 md:px-4">
      <VisitingCard />
      <ServicesCard />
      <StalkingCard />
      <MessagesCard />
    </section>
  );
};

export default HomePage;
