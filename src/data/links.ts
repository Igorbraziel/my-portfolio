import CabinIcon from "@mui/icons-material/Cabin";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SchoolIcon from "@mui/icons-material/School";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import EngineeringIcon from "@mui/icons-material/Engineering";
import InfoIcon from "@mui/icons-material/Info";
import { useTranslation } from "react-i18next";

export function useLinksData() {
  const { t } = useTranslation("links");

  const rawLinks = [
    {
      label: "home",
      path: "/homepage",
      icon: CabinIcon,
      emoji: "🏠",
    },
    {
      label: "about",
      path: "/about",
      icon: InfoIcon,
      emoji: "ℹ️",
    },
    {
      label: "education",
      path: "/education",
      icon: SchoolIcon,
      emoji: "🏫",
    },
    {
      label: "skills",
      path: "/skills",
      icon: EngineeringIcon,
      emoji: "🛠️",
    },
    {
      label: "projects",
      path: "/projects",
      icon: LibraryBooksIcon,
      emoji: "🗂️",
    },

    {
      label: "contact",
      path: "/contact",
      icon: ContactMailIcon,
      emoji: "✉️",
    },
  ];

  const dynamicLinks: { label: string }[] = t("links", {
    returnObjects: true,
  }) as { label: string }[];

  const links = rawLinks.map((link, index) => {
    return { ...link, label: dynamicLinks.at(index)?.label };
  });

  return links;
}
