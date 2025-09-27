import { useProjectsData } from "../../../../data/projects";
import ProjectImage from "./ProjectImage";
import ProjectInfo from "./ProjectInfo";
import ProjectTechStack from "./ProjectTechStack";
import ProjectsLinks from "./ProjectsLinks";

export default function ProjectsList() {
  const { projectsList } = useProjectsData();

  return (
    <ul className="grid grid-cols-1 gap-8 xs:gap-12 sm:gap-14 lg:grid-cols-2">
      {projectsList.map((project, index) => (
        <li key={index} className="flex flex-col divide-y rounded-sm ring-4 ring-blue-900/50 backdrop-blur-[1px] bg-slate-400/20 dark:bg-slate-800/20">
          <ProjectImage project={project} />
          <ProjectInfo project={project} />
          <ProjectTechStack project={project} />
          <ProjectsLinks project={project} />
        </li>
      ))}
    </ul>
  );
}
