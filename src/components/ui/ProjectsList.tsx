import { useProjectsData } from "../../data/projects";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Tag from "./Tag";

export default function ProjectsList() {
  const { projectsList } = useProjectsData();

  return (
    <ul className="">
      {projectsList.map((project, index) => (
        <li key={index} className="divide-y rounded-sm border-2">
          <div className="relative">
            <img
              className="object-cover"
              src={project.image}
              alt="Project Preview"
            />
            <a
              href={
                project.liveAppLink
                  ? project.liveAppLink
                  : typeof project.githubLink == "string"
                    ? project.githubLink
                    : project.githubLink?.backEnd
              }
              className="absolute top-1 right-1 z-10 cursor-pointer text-blue-50 hover:text-blue-500 dark:hover:text-blue-700"
            >
              <OpenInNewIcon fontSize="small" color="inherit" />
            </a>
          </div>
          <div className="space-y-1 py-1 pl-1.5 backdrop-blur-[1px]">
            <h2 className="text-base font-bold">{project.name}</h2>
            <p className="text-xs">{project.description}</p>
          </div>

          <div className="py-1 pl-1.5">
            <h4 className="text-sm font-semibold">Tech Stack</h4>
            <ul className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <li key={index} className="flex items-center gap-1">
                  {<tech.techIcon className="h-3 w-3" />}
                  <span className="text-[8px]">{tech.techLabel}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1 py-2 pl-1.5">
            {project.liveAppLink && (
              <a href={project.liveAppLink} target="_blank">
                <Tag baseColor="indigo" className="border px-1 py-0.5 text-xs">
                  Live App
                </Tag>
              </a>
            )}
            {typeof project.githubLink == "string" ? (
              <a href={project.githubLink} target="_blank">
                GitHub Repo
              </a>
            ) : (
              <>
                <a href={project.githubLink?.backEnd} target="_blank">
                  Backend Repo
                </a>
                <a href={project.githubLink?.frontEnd} target="_blank">
                  Frontend Repo
                </a>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
