import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import type { Experience } from "../../../../data/user";

interface ExperienceCardProps {
  exp: Experience;
  experiencesLength: number;
}

export default function ExperienceCard({
  exp,
  experiencesLength,
}: ExperienceCardProps) {
  return (
    <div
      className={`ml-4 space-y-2 rounded-md bg-indigo-400/60 px-4 py-3 shadow-md shadow-violet-950 backdrop-blur-[2px] sm:ml-6 sm:px-5 sm:py-4 md:ml-7 md:p-6 lg:px-7 lg:py-8 ${experiencesLength > 1 ? "sm:mx-0 sm:max-w-[46%]" : ""} dark:bg-slate-950/70 dark:shadow-violet-100`}
    >
      <div className="flex flex-col gap-1 text-2xl sm:items-center md:flex-row md:gap-3 md:text-3xl">
        <BusinessCenterIcon
          className="mb-1.5"
          fontSize="inherit"
          htmlColor="oklch(38% 0.189 293.745)"
        />
        <h3 className="font-title mb-1 text-base font-bold sm:text-lg md:text-xl lg:text-2xl">
          {exp.title}
        </h3>
      </div>
      <h4 className="text-sm font-semibold text-slate-700 sm:text-base lg:text-lg dark:text-slate-400">
        {exp.company}
      </h4>
      <span className="mb-3 block text-xs font-medium text-slate-600 sm:text-sm lg:text-base dark:text-slate-500">
        {exp.date}
      </span>
      <ul className="xs:text-sm list-inside list-disc space-y-1 text-xs font-medium tracking-wide md:text-base lg:text-lg">
        {exp.activities.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
