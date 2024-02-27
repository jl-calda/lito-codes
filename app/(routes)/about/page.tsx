import { Selfie } from "./_components/selfie";
import { Background } from "./_components/background";
import { Education } from "./_components/education";
import { Stack } from "./_components/stack";
import { Projects } from "./_components/projects";
import { Experience } from "./_components/experience";
import { Merch } from "./_components/merch";
import { Blog } from "./_components/blog";
import { Snippets } from "./_components/snippets";
import { Social } from "./_components/social";

const AboutPage = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-4 gap-y-4 py-4">
      <Selfie />
      <Background />
      <div className="grid grid-cols-1 md:grid-cols-[1.7fr_2fr] gap-x-4 gap-y-4 md:col-span-3">
        <Education />
        <Experience />
      </div>
      <Stack />
      <Projects />
      {/* <Merch /> */}
      <Blog />
      {/* <Snippets /> */}
      <Social />
    </section>
  );
};

export default AboutPage;
