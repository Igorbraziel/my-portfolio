import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import type { Project } from "../../../../data/projects";

export default function ProjectImage({ project }: { project: Project }) {
  return (
    <div className="relative">
      <img className="object-cover" src={project.image} alt="Project Preview" />
      <a
        href={
          project.liveAppLink
            ? project.liveAppLink
            : typeof project.githubLink == "string"
              ? project.githubLink
              : project.githubLink?.backEnd
        }
        className="absolute top-1 right-1 z-10 flex cursor-pointer items-center justify-center rounded-full bg-stone-950 p-1 text-blue-50 hover:text-blue-500 dark:bg-stone-50 dark:text-blue-950"
      >
        <OpenInNewIcon fontSize="small" color="inherit" />
      </a>
    </div>
  );
}
