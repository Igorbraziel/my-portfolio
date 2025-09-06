import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AnimatePresence, motion } from "motion/react";

type Country = {
  name: string;
  code: string;
  emoji: string;
};

interface CountriesSelectorProps {
  countries: Country[];
  flagSize?: "small" | "medium" | "large";
  setSelectedValue?: (arg0: string) => void;
  defaultCountryCode?: string;
}

export default function CountriesSelector({
  countries,
  flagSize = "small",
  setSelectedValue = () => {},
  defaultCountryCode = "en",
}: CountriesSelectorProps) {
  let dimensions = "";
  const [value, setValue] = useState(defaultCountryCode);
  const currentCountry = countries
    .filter((country) => country.code === value)
    .at(0);

  switch (flagSize) {
    case "small":
      dimensions = "text-sm";
      break;
    case "medium":
      dimensions = "text-base";
      break;
    case "large":
      dimensions = "text-lg";
      break;
    default:
      throw new Error("flagSize must to be 'small' or 'medium' or 'large'");
  }

  function handleChange(value: string) {
    setValue(value);
    setSelectedValue(value);
  }

  return (
    <div className={`flex justify-center ${dimensions}`}>
      <Listbox value={value} onChange={handleChange}>
        {({ open }) => (
          <div className="relative flex flex-col items-center">
            <ListboxButton className="flex cursor-pointer items-center justify-between rounded-sm border-2 border-indigo-950 bg-indigo-300 px-2 py-1 text-sm hover:bg-indigo-200 md:text-base lg:text-lg xl:text-xl dark:border-indigo-300 dark:bg-indigo-950 dark:hover:bg-blue-950">
              <div className="flex gap-2 font-medium">
                <span>{currentCountry?.emoji}</span> {currentCountry?.name}
              </div>
              <ExpandMoreIcon
                className={`ml-2 text-blue-900 transition-transform dark:text-blue-200 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </ListboxButton>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute mt-10 w-full min-w-35 rounded-xl border border-slate-700 bg-slate-50 px-2 py-1 shadow-xl shadow-slate-800 md:min-w-38 lg:mt-11 xl:min-w-45 dark:border-slate-300 dark:bg-slate-900 dark:shadow-sm dark:shadow-slate-100"
                >
                  <ListboxOptions className="divide-y-2 divide-slate-700 overflow-auto rounded-xl text-xs whitespace-nowrap md:text-sm lg:text-base xl:text-lg dark:divide-slate-200">
                    {countries.map((country, index) => (
                      <ListboxOption
                        key={index}
                        value={country.code}
                        className={({ focus, selected }) =>
                          `relative cursor-pointer ${focus ? "dark:bg-slate-700 bg-slate-300 text-slate-950 dark:text-slate-50" : "text-slate-800 dark:text-slate-100"} ${selected ? "font-bold" : "font-medium"}`
                        }
                      >
                        <div className="flex items-center gap-2.5 px-0.5 md:px-1 lg:px-1.5 py-1">
                          {country.emoji} <span>{country.name}</span>
                        </div>
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </Listbox>
    </div>
  );
}
