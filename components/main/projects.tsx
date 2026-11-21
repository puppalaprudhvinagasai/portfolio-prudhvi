import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 z-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16 max-w-7xl">
        {PROJECTS.map((project) => {
          const item = project as {
            image: string;
            title: string;
            domain?: string;
            description: string;
            link: string;
            tech: string;
            status?: string;
            isLive?: boolean;
          };

          return (
            <ProjectCard
              key={item.title}
              src={item.image}
              title={item.title}
              domain={item.domain}
              description={item.description}
              link={item.link}
              tech={item.tech}
              status={item.status}
              isLive={item.isLive ?? false}
            />
          );
        })}
      </div>
    </section>
  );
};
