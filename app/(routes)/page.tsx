import { HeroText } from "./_components/hero-text";
import ProjectCards from "./_components/project-cards";

const HomePage = () => {
  return (
    <main className="flex flex-col space-y-20 pt-40 max-w-6xl mx-auto">
      <HeroText />
      <ProjectCards />
    </main>
  );
};

export default HomePage;
