import { motion } from "motion/react";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { useUserData } from "../../data/user";
import { useSettingsData } from "../../data/settings";

export default function CertificatesList() {
  const { certificates } = useUserData();
  const settings = useSettingsData();

  return (
    <ul className="xs:grid-cols-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
      {certificates.map((certificate, index) => (
        <motion.a
          className="cursor-pointer"
          whileHover={{ scale: 1.05 }}
          href={certificate.url}
          target="_blank"
        >
          <li
            key={index}
            className="rounded-xl border-2 border-stone-800 px-1.5 py-1 dark:border-stone-200"
          >
            <div className="flex justify-between">
              <div className="flex w-[80%] flex-col">
                <span className="text-xs font-bold">{certificate.course}</span>
                <span className="text-[9px] font-light tracking-wide">
                  {settings.durationText}: {certificate.duration}{" "}
                  {settings.hoursText}
                </span>
                {
                  <ul>
                    {certificate.technologies.map((tech, index) => (
                      <li key={index} className="text-[10px]">{tech}</li>
                    ))}
                  </ul>
                }
                <span className="flex items-center gap-1 text-[10px]">
                  {" "}
                  <CalendarMonthIcon fontSize="small" /> {certificate.year}
                </span>
              </div>
              <div className="flex flex-col items-center">
                {
                  <certificate.companyIcon className="h-5.5 w-5.5 rounded-full bg-gray-950 p-1"></certificate.companyIcon>
                }
                <span className="text-[9px] font-medium tracking-widest text-purple-950">
                  {certificate.company}
                </span>
              </div>
            </div>
          </li>
        </motion.a>
      ))}
    </ul>
  );
}
