import type { PropsWithChildren } from "react";
import type { Project } from "../../../../data/projects";
import GitHubIcon from "../../icons/GitHubIcon";
import ProjectLink from "./ProjectLink";
import GlobeIcon from "../../icons/GlobeIcon";

function LinkSpan({ children }: PropsWithChildren) {
  return <span className="flex items-center gap-1.5">{children}</span>;
}

export default function ProjectsLinks({ project }: { project: Project }) {
  return (
    <nav className="xs:py-4 flex flex-wrap gap-2 py-3 pl-1.5 sm:pl-2 lg:gap-3 lg:py-5">
      {project.liveAppLink && (
        <ProjectLink href={project.liveAppLink}>
          <LinkSpan>
            Live App{" "}
            <GlobeIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-5.5 md:w-5.5 lg:h-7 lg:w-7" />
          </LinkSpan>
        </ProjectLink>
      )}
      {typeof project.githubLink == "string" ? (
        <ProjectLink href={project.githubLink}>
          <LinkSpan>
            GitHub Repo{" "}
            <GitHubIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-5.5 md:w-5.5 lg:h-7 lg:w-7" />
          </LinkSpan>
        </ProjectLink>
      ) : (
        <>
          <ProjectLink href={project.githubLink?.backEnd}>
            <LinkSpan>
              Backend Repo{" "}
              <GitHubIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-5.5 md:w-5.5 lg:h-7 lg:w-7" />
            </LinkSpan>
          </ProjectLink>

          <ProjectLink href={project.githubLink?.frontEnd}>
            <LinkSpan>
              Frontend Repo{" "}
              <GitHubIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-5.5 md:w-5.5 lg:h-7 lg:w-7" />
            </LinkSpan>
          </ProjectLink>
        </>
      )}
    </nav>
  );
}
