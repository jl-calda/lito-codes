"use client";

import HireMe from "./_components/hire-me";
import { BuyCoffee } from "./_components/buy-coffee";
import Contact from "./_components/contact";

const ContactPage = () => {
  return (
    <section className="h-full grid grid-flow-row md:grid md:grid-cols-[1fr_1.5fr] gap-x-6 gap-y-6">
      <HireMe className="" />
      <Contact className="md:row-span-2" />
      <BuyCoffee className="" />
      <div className="flex flex-col space-y-6 order-last md:order-none"></div>
    </section>
  );
};

export default ContactPage;
