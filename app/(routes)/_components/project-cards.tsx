import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { useTransition } from "react";

const ProjectCards = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6 px-4">
      {projects.map((project) => (
        <ProjectCard
          key={crypto.randomUUID()}
          data={project}
        />
      ))}
    </div>
  );
};

export default ProjectCards;
