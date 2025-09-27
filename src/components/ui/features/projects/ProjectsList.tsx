import { useProjectsData } from "../../../../data/projects";
import ProjectImage from "./ProjectImage";
import ProjectInfo from "./ProjectInfo";
import ProjectTechStack from "./ProjectTechStack";
import ProjectsLinks from "./ProjectsLinks";

export default function ProjectsList() {
  const { projectsList } = useProjectsData();

  return (
    <ul className="xs:gap-12 grid grid-cols-1 gap-8 sm:gap-14 lg:grid-cols-2 mb-6">
      {projectsList.map((project, index) => (
        <li
          key={index}
          className="shadow-lg dark:shadow-md dark:shadow-slate-200 shadow-slate-800 flex flex-col divide-y rounded-sm bg-slate-400/20 ring-4 ring-blue-900/50 backdrop-blur-[1px] dark:bg-slate-800/20"
        >
          <ProjectImage project={project} />
          <ProjectInfo project={project} />
          <ProjectTechStack project={project} />
          <ProjectsLinks project={project} />
        </li>
      ))}
    </ul>
  );
}
