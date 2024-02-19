import { FeaturedProjectCard } from "@/app/(routes)/projects/_components/feature-project-card";
import { ProjectCard } from "@/app/(routes)/projects/_components/project-card";
import { SectionSeparator } from "@/components/section-separator";
import { StackIcons } from "@/components/stack-icons";
import { Card, CardHeader } from "@/components/ui/card";
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
  const filteredProjects_stack = projects.filter((project) =>
    project.stack.includes(stack_type)
  );
  const filteredProjects_type = projects.filter(
    (project) => project.type === stack_type
  );
  const filteredProjects = filteredProjects_stack.concat(filteredProjects_type);

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
                secondary
              />
            ))}
          </div>
        </div>
      ) : (
        <>
          <Card className="bg-primary">
            <CardHeader className="text-muted rounded-xl p-4">
              <h2 className="text-xl font-medium font-mono flex space-x-2 items-center">
                <span>
                  {filteredProjects.length > 1
                    ? "Projects using "
                    : "Project using "}
                </span>
                <span className="flex space-x-2 items-center">
                  <p>{stack_type}</p>
                  <StackIcons technology={stack_type} />
                </span>
              </h2>
            </CardHeader>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4">
            {filteredProjects.map((project) => (
              <ProjectCard
                data={project}
                key={project.slug}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default ProjectPage;
