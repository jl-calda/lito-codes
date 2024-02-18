import { FeaturedProjectCard } from "@/components/feature-project-card";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

interface ProjectPageParams {
  searchParams: {
    stack_type: string;
  };
}

const ProjectPage = async ({
  searchParams: { stack_type },
}: ProjectPageParams) => {
  const featuredProjects = projects.filter((project) => project.isFeatured);
  const filteredProjects = projects.filter((project) =>
    project.stack.includes(stack_type)
  );

  return (
    <section className="flex flex-col space-y-4 py-4">
      <FeaturedProjectCard data={featuredProjects}></FeaturedProjectCard>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4">
        {filteredProjects.map((project) => (
          <ProjectCard
            data={project}
            key={project.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
