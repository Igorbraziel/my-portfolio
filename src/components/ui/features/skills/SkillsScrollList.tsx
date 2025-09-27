import { useSkillsData } from "../../../../data/skills";
import InfiniteScrollList from "../../InfiniteScrollLits";

import { motion } from "motion/react";

export default function SkillsScrollList() {
  const { skillsList } = useSkillsData();

  return (
    <InfiniteScrollList
      unorderedListClassName="py-2.5"
      listItemClassName="dark:bg-slate-600/20 rounded-sm border-2 dark:border-slate-300/40 shadow-md dark:shadow-purple-200 dark:shadow-sm shadow-purple-950"
      items={skillsList.map((skill, index) => (
        <motion.div
          className="xs:h-25 xs:w-25 flex h-22 w-22 flex-col items-center justify-center gap-2 bg-purple-400/20 p-2 sm:h-27 sm:w-27 md:h-30 md:w-30 lg:gap-3 dark:bg-purple-600/10"
          key={index}
          whileHover={{ scale: 1.03 }}
        >
          {
            <skill.techIcon className="xs:h-10 xs:w-10 h-8 w-8 sm:h-11 sm:w-11 md:h-12 md:w-12 lg:h-13 lg:w-13 xl:h-14 xl:w-14" />
          }{" "}
          <span className="xs:text-[10px] text-[8px] font-semibold md:text-xs">
            {skill.techLabel}
          </span>
        </motion.div>
      ))}
      duration={50}
    />
  );
}
