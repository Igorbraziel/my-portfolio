import type { Graduation } from "../../data/user";
import InfiniteScrollList from "./InfiniteScrollLits";
import PurposesList from "./PurposesList";
import Tag, { type TagProps } from "./Tag";
import UndergraduateDescription from "./UndergraduateDescription";
import UndergraduateInfo from "./UndergraduateInfo";

interface EducationalInfoProps {
  graduation: Graduation;
  colorsMap: string[];
}

export default function EducationalInfo({
  graduation,
  colorsMap,
}: EducationalInfoProps) {
  return (
    <div className="flex flex-col divide-y divide-indigo-950/90 border-indigo-900/30 md:min-w-0 md:flex-1 md:border-l md:pl-4 dark:divide-indigo-200/80 dark:border-indigo-800/60">
      <UndergraduateInfo graduation={graduation} />
      <UndergraduateDescription graduation={graduation} />
      <PurposesList graduation={graduation} />
      <InfiniteScrollList
        items={graduation.tags.map((tag, index) => (
          <Tag
            className="xs:py-1 px-1.5 py-0.5 sm:px-2 sm:py-1.5 lg:px-2.5"
            baseColor={
              colorsMap[index % colorsMap.length] as TagProps["baseColor"]
            }
            as="span"
            key={index}
          >
            {tag}
          </Tag>
        ))}
        duration={30}
        unorderedListClassName="mt-1.5 xs:mt-2 sm:mt-2.5 lg:mt-3 sm:mb-0.5 flex gap-2 overflow-x-auto pt-2 pb-3 text-[10px] xs:text-xs sm:text-sm lg:text-base"
      />
    </div>
  );
}
