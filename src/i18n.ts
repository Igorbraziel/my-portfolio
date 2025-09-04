import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enUser from "./i18n/en/user.json";
import esUser from "./i18n/es/user.json";
import ptUser from "./i18n/pt/user.json";

import enLinks from "./i18n/en/links.json";
import esLinks from "./i18n/es/links.json";
import ptLinks from "./i18n/pt/links.json";

import enSettings from "./i18n/en/settings.json";
import esSettings from "./i18n/es/settings.json";
import ptSettings from "./i18n/pt/settings.json";

const resources = {
  en: {
    user: enUser,
    links: enLinks,
    settings: enSettings,
  },
  es: {
    user: esUser,
    links: esLinks,
    settings: esSettings,
  },
  pt: {
    user: ptUser,
    links: ptLinks,
    settings: ptSettings,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
