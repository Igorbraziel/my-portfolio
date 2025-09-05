import React, { useState } from "react";

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

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value);
    setSelectedValue(e.target.value);
  }

  return (
    <select
      value={value}
      onChange={handleChange}
      className="rounded-md border border-stone-900 px-1 py-2"
    >
      {countries.map((country, index) => (
        <option
          value={country.code}
          key={index}
          className={`${dimensions} text-black border border-b-2 border-black`}
        >
          {country.emoji} {country.name}
        </option>
      ))}
    </select>
  );
}
