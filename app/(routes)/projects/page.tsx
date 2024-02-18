import { FeaturedProjectCard } from "@/components/feature-project-card";
import { ProjectCard } from "@/components/project-card";
import { SectionSeparator } from "@/components/section-separator";
import { SidebarSeparator } from "@/components/sidebar-separator";
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
  const nonFeaturedProjects = projects.filter((project) => !project.isFeatured);

  return (
    <section className="flex flex-col space-y-4 py-4">
      {filteredProjects.length === 0 ? (
        <div className="flex flex-col space-y-4">
          <FeaturedProjectCard data={featuredProjects} />
          <SectionSeparator title="Other Projects" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4">
            {nonFeaturedProjects.map((project) => (
              <ProjectCard
                data={project}
                key={project.slug}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4">
          {filteredProjects.map((project) => (
            <ProjectCard
              data={project}
              key={project.slug}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectPage;
