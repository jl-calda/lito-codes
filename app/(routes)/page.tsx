import { Footer } from "@/components/footer";
import { HeroText } from "./_components/hero-text";
import ProjectCards from "./_components/project-cards";
import { PricingSection } from "./_components/pricing-section";
import { SolutionSection } from "./_components/solution-section";
import { HeroSection } from "./_components/hero-section";
import { FeatureSection } from "./_components/feature-section";
import { ServicesSection } from "./_components/services-section";

const HomePage = () => {
  return (
    <div className="flex flex-col space-y-20">
      <HeroSection />
      <FeatureSection />
      <ServicesSection />
      <ProjectCards />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default HomePage;
