import { useTranslation } from "react-i18next";

import InstagramIcon from "../components/ui/icons/InstagramIcon";
import GitHubIcon from "../components/ui/icons/GitHubIcon";
import LinkedInIcon from "../components/ui/icons/LinkedInIcon";
import UdemyIcon from "../components/ui/icons/UdemyIcon";
import PythonIcon from "../components/ui/icons/PythonIcon";
import DjangoIcon from "../components/ui/icons/DjangoIcon";
import SQLIcon from "../components/ui/icons/SQLIcon";
import MySQLIcon from "../components/ui/icons/MySQLIcon";
import ReactIcon from "../components/ui/icons/ReactIcon";
import NextIcon from "../components/ui/icons/NextIcon";
import TailwindIcon from "../components/ui/icons/TailwindIcon";
import AuthIcon from "../components/ui/icons/AuthIcon";
import MachineLearningIcon from "../components/ui/icons/MachineLearningIcon";
import DataScienceIcon from "../components/ui/icons/DataScienceIcon";
import JupyterIcon from "../components/ui/icons/JupyterIcon";
import MongoIcon from "../components/ui/icons/MongoIcon";
import PostmanIcon from "../components/ui/icons/PostmanIcon";
import SpringIcon from "../components/ui/icons/SpringIcon";
import JavaIcon from "../components/ui/icons/JavaIcon";
import JavaScriptIcon from "../components/ui/icons/JavaScriptIcon";
import TypeScriptIcon from "../components/ui/icons/TypeScriptIcont";

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
      "bg-gradient-to-tr from-neutral-800 via-gray-800 to-stone-700 dark:from-neutral-800 dark:via-gray-700 dark:to-stone-800",
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
    companyIcon: UdemyIcon,
    course: "The Ultimate React Course",
    duration: 84,
    url: "https://www.udemy.com/certificate/UC-27fce06e-26f3-4a28-88ab-b21d3f650a30/",
    technologies: [
      { techLabel: "React.js", techIcon: ReactIcon },
      { techLabel: "Next.js", techIcon: NextIcon },
      { techLabel: "Tailwind CSS", techIcon: TailwindIcon },
      { techLabel: "Auth.js", techIcon: AuthIcon },
    ],
    year: 2025,
  },
  {
    company: "Udemy",
    companyIcon: UdemyIcon,
    course: "Python 3 | Django | Design Patterns",
    duration: 141,
    url: "https://www.udemy.com/certificate/UC-773e9cf6-c16d-4be8-aaea-242a1de0ccfe/",
    technologies: [
      { techLabel: "Python", techIcon: PythonIcon },
      { techLabel: "Django", techIcon: DjangoIcon },
      { techLabel: "SQL", techIcon: SQLIcon },
      { techLabel: "MySQL", techIcon: MySQLIcon },
    ],
    year: 2024,
  },
  {
    company: "Udemy",
    companyIcon: UdemyIcon,
    course: "Machine Learning & Data Science | Python",
    duration: 41.5,
    url: "https://www.udemy.com/certificate/UC-a74bd47c-e637-4832-a284-1245cfa44451/",
    technologies: [
      { techLabel: "Machine Learning", techIcon: MachineLearningIcon },
      { techLabel: "Data Science", techIcon: DataScienceIcon },
      { techLabel: "Python", techIcon: PythonIcon },
      { techLabel: "Jupyter Notebook", techIcon: JupyterIcon },
    ],
    year: 2025,
  },
  {
    company: "Udemy",
    companyIcon: UdemyIcon,
    course: "Java | Spring Boot | POO",
    duration: 54.5,
    url: "https://www.udemy.com/certificate/UC-715ef69d-f704-4437-a1b7-53718f02c23a/",
    technologies: [
      { techLabel: "Java", techIcon: JavaIcon },
      { techLabel: "Spring Boot", techIcon: SpringIcon },
      { techLabel: "MongoDB", techIcon: MongoIcon },
      { techLabel: "Postman", techIcon: PostmanIcon },
    ],
    year: 2024,
  },
  {
    company: "Udemy",
    companyIcon: UdemyIcon,
    course: "TypeScript | JavaScript | NextJS",
    duration: 146,
    url: "https://www.udemy.com/certificate/UC-7b26809e-f849-4952-82af-8203e4541092/",
    technologies: [
      { techLabel: "JavaScript", techIcon: JavaScriptIcon },
      { techLabel: "React", techIcon: ReactIcon },
      { techLabel: "TypeScript", techIcon: TypeScriptIcon },
      { techLabel: "Next.js", techIcon: NextIcon },
    ],
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
    experiences: t("experiences", { returnObjects: true }) as Experience[],
  };
}

export type Experience = {
  title: string;
  company: string;
  date: string;
  activities: string[];
};

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
