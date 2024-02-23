import HireMe from "./_components/hire-me";
import { BuyCoffee } from "./_components/buy-coffee";
import Contact from "./_components/contact";

const ContactPage = () => {
  return (
    <section className="h-full grid grid-flow-row md:grid md:grid-cols-[1fr_1.5fr] gap-x-4 gap-y-4">
      <div className="flex flex-col space-y-6 order-last md:order-none">
        <HireMe />
        <BuyCoffee />
      </div>
      <Contact />
    </section>
  );
};

export default ContactPage;
