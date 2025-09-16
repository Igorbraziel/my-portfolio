import ScheduleIcon from '@mui/icons-material/Schedule';

import type { Graduation } from "../../data/user";
import Tag from "./Tag";

export default function UndergraduateInfo({
  graduation,
}: {
  graduation: Graduation;
}) {
  return (
    <div>
      <h3 className="text-lg font-bold sm:mb-1 sm:text-xl md:text-2xl lg:text-3xl">
        {graduation.undergraduateCourse}
      </h3>
      <h4>
        <span className="text-sm sm:text-base md:text-lg lg:text-xl">
          {graduation.university}
        </span>{" "}
        -{" "}
        <span className="text-xs font-light sm:text-sm md:text-base lg:text-lg">
          {graduation.institute}
        </span>
      </h4>
      <div className="mb-0.5 ml-1 flex items-center gap-0.5 py-1.5 text-xs font-light sm:mb-1.5 sm:gap-1 sm:py-1 sm:text-sm md:mt-0.5 lg:text-base">
        <span className="flex items-center gap-1 sm:gap-1.5">
          <ScheduleIcon fontSize="small"/> {graduation.dates.startDate} - {graduation.dates.endDate}
        </span>
        <Tag
          as="span"
          baseColor="teal"
          className="mx-2 !border-0 !bg-green-500/50 px-2 py-0.5 font-normal !text-gray-800 sm:px-2.5 sm:py-1 dark:!text-gray-50"
        >
          {graduation.status}
        </Tag>
      </div>
    </div>
  );
}
