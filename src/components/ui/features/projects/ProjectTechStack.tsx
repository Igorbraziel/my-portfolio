import type { Project } from "../../../../data/projects";
import Tag from "../../Tag";

const colorsMap = ["indigo", "fuchsia", "purple", "violet"];

export default function ProjectTechStack({ project }: { project: Project }) {
  return (
    <div className="py-2 pr-0.5 pl-1.5 sm:py-3 sm:pl-2 lg:py-5">
      <h4 className="xs:text-base mb-1 text-sm font-semibold sm:text-lg md:mb-2 md:text-xl lg:text-2xl">
        Tech Stack:
      </h4>
      <ul className="flex flex-wrap gap-2 md:gap-3 lg:gap-4">
        {project.techStack.map((tech, index) => (
          <Tag
            baseColor={
              colorsMap[index % colorsMap.length] as
                | "indigo"
                | "fuchsia"
                | "purple"
                | "violet"
            }
            className="flex items-center gap-2 px-2 py-1 hover:scale-105 cursor-pointer"
            as="li"
            key={index}
          >
            {<tech.techIcon className="h-4 w-4 sm:h-5 sm:w-5 md:w-5.5 md:h-5.5 lg:h-7 lg:w-7" />}
            <span className="xs:text-[10px] text-[9px] sm:text-xs lg:text-sm">
              {tech.techLabel}
            </span>
          </Tag>
        ))}
      </ul>
    </div>
  );
}
