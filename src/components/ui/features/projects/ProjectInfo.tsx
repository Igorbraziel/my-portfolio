import type { Project } from "../../../../data/projects";

export default function ProjectInfo({ project }: { project: Project }) {
  return (
    <div className="space-y-1 sm:py-3 py-2 sm:pl-2 pl-1.5 pr-0.5 lg:py-5">
      <h2 className="md:text-xl sm:text-lg xs:text-base text-sm font-bold lg:text-2xl">{project.name}</h2>
      <p className="lg:text-base dark:text-gray-400 text-gray-700 sm:text-sm text-[10px] xs:text-xs">{project.description}</p>
    </div>
  );
}
