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
  };
}

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
