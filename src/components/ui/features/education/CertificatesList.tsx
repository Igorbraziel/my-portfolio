import { motion } from "motion/react";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { useUserData } from "../../../../data/user";
import { useSettingsData } from "../../../../data/settings";

export default function CertificatesList() {
  const { certificates } = useUserData();
  const { settings } = useSettingsData();

  return (
    <ul className="my-2 mb-4 grid auto-rows-fr grid-cols-1 items-stretch gap-8 sm:grid-cols-2">
      {certificates.map((certificate, index) => (
        <motion.a
          key={index}
          className="cursor-pointer"
          whileHover={{ scale: 1.02 }}
          href={certificate.url}
          target="_blank"
        >
          <li
            key={index}
            className="flex h-full w-full flex-col justify-between rounded-xl border-2 border-stone-800 bg-indigo-400/30 px-1.5 py-1 md:px-1 dark:border-stone-200 dark:bg-blue-950/50"
          >
            <div className="mx-2 my-2 flex justify-between">
              <div className="xs:w-[70%] flex w-[80%] flex-col sm:w-[90%]">
                <div>
                  <h2 className="font-title text-sm font-bold md:text-base lg:text-lg">
                    {certificate.course}
                  </h2>
                  <span className="mb-1 ml-0.5 flex items-center gap-1 text-[10px] font-[350] tracking-wide sm:mt-1 md:mb-3 md:text-xs lg:text-sm">
                    <AccessTimeIcon fontSize="small" /> {settings.durationText}:{" "}
                    {certificate.duration} {settings.hoursText}
                  </span>
                </div>
                <h3 className="mt-2 mb-1.5 ml-0.5 text-xs font-semibold tracking-wider uppercase md:text-sm lg:text-base">
                  {settings.technologiesText}:
                </h3>
                <ul className="mb-2 grid grid-cols-2 gap-x-6 gap-y-4 lg:ml-2">
                  {certificate.technologies.map((tech, index) => (
                    <motion.li
                      whileHover={{ scale: 1.05 }}
                      key={index}
                      className="xs:w-[80%] flex flex-col items-center justify-center gap-0.5 rounded-sm border bg-violet-100/50 py-2 sm:w-full sm:px-1 md:gap-1 lg:w-[90%] lg:gap-1.5 xl:w-[80%] dark:bg-stone-200/30"
                    >
                      {
                        <tech.techIcon className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
                      }
                      <span className="text-[9px] font-bold sm:text-[7px] md:text-[10px] lg:text-xs">
                        {tech.techLabel}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-center gap-0.5 lg:gap-1">
                {
                  <certificate.companyIcon className="h-5.5 w-5.5 rounded-full bg-gray-950 p-1 lg:h-6.5 lg:w-6.5 xl:h-7 xl:w-7 dark:bg-gray-200"></certificate.companyIcon>
                }
                <span className="text-[9px] font-medium tracking-widest text-purple-950 md:text-[10px] lg:text-xs dark:text-purple-100">
                  {certificate.company}
                </span>
              </div>
            </div>
            <div className="mx-auto mt-1 flex w-[95%] items-center gap-1 border-t pt-2 pb-1">
              <CalendarMonthIcon fontSize="small" className="ml-1.5" />{" "}
              <span className="text-xs md:text-sm lg:text-base">
                {certificate.year}
              </span>
            </div>
          </li>
        </motion.a>
      ))}
    </ul>
  );
}
