import { useTranslation } from "react-i18next";

import InstagramIcon from "../components/ui/icons/InstagramIcon";
import GitHubIcon from "../components/ui/icons/GitHubIcon";
import LinkedInIcon from "../components/ui/icons/LinkedInIcon";

const media = [
  {
    name: "LinkedIn",
    profileURL: "https://www.linkedin.com/in/igor-reis-braziel-499b00300/",
    mediaIcon: LinkedInIcon,
    bgStyle:
      "bg-gradient-to-tr from-sky-600 via-blue-600 to-indigo-500 dark:from-sky-800 dark:via-blue-800 dark:to-indigo-800",
    textStyle: "text-blue-50 dark:text-blue-100",
  },
  {
    name: "GitHub",
    profileURL: "https://github.com/Igorbraziel",
    mediaIcon: GitHubIcon,
    bgStyle:
      "bg-gradient-to-tr from-neutral-800 via-gray-800 to-stone-700 dark:from-neutral-900 dark:via-gray-900 dark:to-stone-800",
    textStyle: "text-stone-50 dark:text-stone-100",
  },
  {
    name: "Instagram",
    profileURL: "https://www.instagram.com/igor_reis04/",
    mediaIcon: InstagramIcon,
    bgStyle:
      "bg-gradient-to-tr from-rose-500 via-pink-500 to-fuchsia-500 dark:from-rose-800 dark:via-pink-800 dark:to-fuchsia-700",
    textStyle: "text-rose-50 dark:text-rose-100",
  },
];

const certificates = [
  {
    company: "Udemy",
    course: "The Ultimate React Course 2025",
    duration: 84,
    url: "https://www.udemy.com/certificate/UC-27fce06e-26f3-4a28-88ab-b21d3f650a30/",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Auth.js"],
    year: 2025,
  },
  {
    company: "Udemy",
    course: "Curso de Python 3 do básico ao avançado",
    duration: 141,
    url: "https://www.udemy.com/certificate/UC-773e9cf6-c16d-4be8-aaea-242a1de0ccfe/",
    technologies: ["Python", "Django", "SQL", "MySQL"],
    year: 2025,
  },
  {
    company: "Udemy",
    course: "Machine Learning e Data Science com Python de A a Z",
    duration: 41.5,
    url: "https://www.udemy.com/certificate/UC-a74bd47c-e637-4832-a284-1245cfa44451/",
    technologies: [
      "Machine Learning",
      "Data Science",
      "Python",
      "Jupyter Notebook",
    ],
    year: 2025,
  },
  {
    company: "Udemy",
    course: "Java COMPLETO Programação Orientada a Objetos",
    duration: 54.5,
    url: "https://www.udemy.com/certificate/UC-715ef69d-f704-4437-a1b7-53718f02c23a/",
    technologies: ["Java", "Spring Boot", "MongoDB", "Postman"],
    year: 2025,
  },
  {
    company: "Udemy",
    course: "Java COMPLETO Programação Orientada a Objetos",
    duration: 54.5,
    url: "https://www.udemy.com/certificate/UC-715ef69d-f704-4437-a1b7-53718f02c23a/",
    technologies: ["Java", "Spring Boot", "MongoDB", "Postman"],
    year: 2025,
  },
];

export function useUserData() {
  const { t } = useTranslation("user");

  return {
    name: t("name"),
    subtitles: t("subtitles", { returnObjects: true }) as string[],
    address: t("address"),
    media,
    shortResume: t("shortResume"),
    about: t("about"),
    graduation: t("graduation", { returnObjects: true }) as Graduation,
    certificates,
  };
}

export type Certificate = {
  company: string;
  course: string;
  duration: number;
  url: string;
  technologies: string[];
  year: number;
};

export type Graduation = {
  undergraduateCourse: string;
  university: string;
  institute: string;
  status: string;
  description: string;
  mainPurposes: string[];
  dates: { startDate: number; endDate: number };
  tags: string[];
};

export type SocialMedia = {
  name: string;
  profileURL: string;
  mediaIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  bgStyle: string;
  textStyle: string;
};
