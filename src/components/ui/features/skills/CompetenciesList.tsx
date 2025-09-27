import { useSkillsData } from "../../../../data/skills";
import { useDarkMode } from "../../../../hooks/useDarkMode";
import useMediaQuery from "../../../../hooks/useMediaQuery";

export default function CompetenciesList() {
  const { competenciesList } = useSkillsData();
  const { isDark } = useDarkMode();
  const isExtraSmallBreakpoint = useMediaQuery("(min-width: 480px)");

  return (
    <ul className="my-5 grid grid-cols-2 gap-6 md:grid-cols-3">
      {competenciesList.map((competency, index) => (
        <li
          className="flex flex-col gap-2 rounded-xl border-2 bg-violet-300/50 px-3 py-2 shadow-md shadow-slate-900 backdrop-blur-[2px] lg:px-4 lg:py-3 dark:bg-inherit dark:shadow-slate-200"
          key={index}
        >
          {
            <competency.competencyIcon
              fontSize={isExtraSmallBreakpoint ? "large" : "medium"}
              htmlColor={
                isDark
                  ? "oklch(49.6% 0.265 301.924)"
                  : "oklch(38.1% 0.176 304.987)"
              }
            />
          }
          <h4 className="text-sm font-bold md:text-base lg:text-lg">
            {competency.competencyTitle}
          </h4>
          <span className="text-xs tracking-wide text-gray-600 md:text-sm lg:text-base dark:text-gray-400">
            {competency.competencyResume}
          </span>
        </li>
      ))}
    </ul>
  );
}
