import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function useCountryCode() {
  const [countryCode, setCountryCode] = useState(
    () =>
      localStorage.getItem("userLanguage") ||
      navigator.language.split("-")?.at(0) ||
      "en",
  );
  const { i18n } = useTranslation();

  function switchLanguage(countryCode: string) {
    i18n.changeLanguage(countryCode);
    setCountryCode(countryCode);
    localStorage.setItem("userLanguage", countryCode);
  }

  return { countryCode, switchLanguage };
}
