import React, { useState, type Dispatch, type SetStateAction } from "react";

type Country = {
  name: string;
  code: string;
};

interface CountriesSelectorProps {
  countries: Country[];
  flagSize?: "small" | "medium" | "large";
  setSelectedValue?: Dispatch<SetStateAction<string>>;
}

export default function CountriesSelector({
  countries,
  flagSize = "small",
  setSelectedValue = () => {},
}: CountriesSelectorProps) {
  let dimensions: { width: number; height: number };
  const [value, setValue] = useState(countries.at(0)?.code);

  switch (flagSize) {
    case "small":
      dimensions = { width: 16, height: 12 };
      break;
    case "medium":
      dimensions = { width: 24, height: 18 };
      break;
    case "large":
      dimensions = { width: 32, height: 24 };
      break;
    default:
      throw new Error("flagSize must to be 'small' or 'medium' or 'large'");
  }

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value);
    setSelectedValue(e.target.value);
  }

  return (
    <select defaultValue={value} value={value} onChange={handleChange}>
      {countries.map((country) => (
        <option value={country.code}>
          <img
            src={`https://flagcdn.com/${dimensions.width}x${dimensions.height}/${country.code}.png`}
            width={dimensions.width}
            height={dimensions.height}
            alt={country.name}
          ></img>
        </option>
      ))}
    </select>
  );
}
