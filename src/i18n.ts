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

import enSkills from "./i18n/en/skills.json";
import esSkills from "./i18n/es/skills.json";
import ptSkills from "./i18n/pt/skills.json";

import enProjects from "./i18n/en/projects.json";
import esProjects from "./i18n/es/projects.json";
import ptProjects from "./i18n/pt/projects.json";

const resources = {
  en: {
    user: enUser,
    links: enLinks,
    settings: enSettings,
    skills: enSkills,
    projects: enProjects,
  },
  es: {
    user: esUser,
    links: esLinks,
    settings: esSettings,
    skills: esSkills,
    projects: esProjects,
  },
  pt: {
    user: ptUser,
    links: ptLinks,
    settings: ptSettings,
    skills: ptSkills,
    projects: ptProjects,
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
