"use client";

import { SectionSeparator } from "@/components/section-separator";
import ErrorPage from "./error";
import { ProjectCard } from "../../_components/project-card";
import { Visit } from "./_components/visit";
import { Screenshots } from "./_components/screenshots";
import { Technologies } from "./_components/technologies";

import { projects } from "@/data/projects";
import { Project } from "./_components/project";
interface ProjectPageParams {
  params: {
    slug: string;
  };
}

const ProjectPage = ({ params: { slug } }: ProjectPageParams) => {
  const project = projects.find((project) => project.slug === slug);
  const otherProjects = projects.filter((project) => project.slug !== slug);

  if (!project) {
    return <ErrorPage />;
  }

  return (
    <section className="flex flex-col space-y-4">
      <div className="grid md:grid-cols-[2fr_1fr] gap-x-4 gap-y-4">
        <Project data={project} />
        <Visit data={project} />
      </div>
      <Screenshots data={project} />
      <Technologies data={project} />
      <SectionSeparator title="View my other projects" />
      <div className="grid md:grid-cols-3 gap-x-4 gap-y-4">
        {otherProjects.map((project) => (
          <ProjectCard
            key={crypto.randomUUID()}
            data={project}
            secondary
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
