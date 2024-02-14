import { Footer } from "@/components/footer";
import { HeroText } from "./_components/hero-text";
import ProjectCards from "./_components/project-cards";
import { PricingSection } from "./_components/pricing-section";
import { SecondarySection } from "./_components/secondary-section";

const HomePage = () => {
  return (
    <div className="flex flex-col space-y-[200px] pt-[200px]  mx-auto">
      <HeroText />
      <SecondarySection />
      <ProjectCards />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default HomePage;
