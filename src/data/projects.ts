import { useTranslation } from "react-i18next";
import NextIcon from "../components/ui/icons/NextIcon";
import TailwindIcon from "../components/ui/icons/TailwindIcon";
import AuthIcon from "../components/ui/icons/AuthIcon";
import PostgreSQLIcon from "../components/ui/icons/PostgreSQLIcon";
import ExpressIcon from "../components/ui/icons/ExpressIcon";

import wildOasisWebsiteImg from "../assets/images/the-wild-oasis-screenshot.png";
import wildOasisDashboardImg from "../assets/images/the-wild-oasis-dashboard-screenshot.png";
import blogImg from "../assets/images/django-blog-screenshot.png";
import ecommerceImg from "../assets/images/django-e-commerce-screenshot.png";
import worldwiseImg from "../assets/images/world-wise-screenshot.png";

import ReactIcon from "../components/ui/icons/ReactIcon";
import SupabaseIcon from "../components/ui/icons/SupabaseIcon";
import StyledComponentsIcon from "../components/ui/icons/StyledComponentsIcon";

import { type JSX } from "react";
import RechartsIcon from "../components/ui/icons/RechartsIcon";
import DjangoIcon from "../components/ui/icons/DjangoIcon";
import PythonIcon from "../components/ui/icons/PythonIcon";
import CSSIcon from "../components/ui/icons/CSSIcon";
import HTMLIcon from "../components/ui/icons/HTMLIcon";
import DockerIcon from "../components/ui/icons/DockerIcon";
import SQLIcon from "../components/ui/icons/SQLIcon";
import CSSModulesIcon from "../components/ui/icons/CSSModules";
import MapIcon from "../components/ui/icons/MapIcon";
import ThunderIcon from "../components/ui/icons/ThunderIcon";

const projectsList = [
  {
    name: "The Wild Oasis - Website",
    description: "",
    image: wildOasisWebsiteImg,
    techStack: [
      { techLabel: "Next.js", techIcon: NextIcon },
      { techLabel: "TailwindCSS", techIcon: TailwindIcon },
      { techLabel: "Auth.js", techIcon: AuthIcon },
      { techLabel: "PostgreSQL", techIcon: PostgreSQLIcon },
      { techLabel: "Express.js", techIcon: ExpressIcon },
    ],
    githubLink: {
      frontEnd: "https://github.com/Igorbraziel/the-wild-oasis-website",
      backEnd: "https://github.com/Igorbraziel/the-wild-oasis-backend",
    },
    liveAppLink: "https://the-wild-oasis-website-hvul.vercel.app/",
  },
  {
    name: "The Wild Oasis - Admin Dashboard",
    description: "",
    image: wildOasisDashboardImg,
    techStack: [
      { techLabel: "React", techIcon: ReactIcon },
      { techLabel: "Supabase", techIcon: SupabaseIcon },
      { techLabel: "Styled Components", techIcon: StyledComponentsIcon },
      { techLabel: "Recharts", techIcon: RechartsIcon },
    ],
    githubLink: "https://github.com/Igorbraziel/the-wild-oasis",
    liveAppLink: "",
  },
  {
    name: "Blog - Django",
    description: "",
    image: blogImg,
    techStack: [
      { techLabel: "Django", techIcon: DjangoIcon },
      { techLabel: "Python", techIcon: PythonIcon },
      { techLabel: "Docker", techIcon: DockerIcon },
      { techLabel: "PostgreSQL", techIcon: PostgreSQLIcon },
      { techLabel: "HTML5", techIcon: HTMLIcon },
      { techLabel: "CSS3", techIcon: CSSIcon },
    ],
    githubLink: "https://github.com/Igorbraziel/Django_Projeto_Blog",
    liveAppLink: "",
  },
  {
    name: "E-commerce - Django",
    description: "",
    image: ecommerceImg,
    techStack: [
      { techLabel: "Django", techIcon: DjangoIcon },
      { techLabel: "Python", techIcon: PythonIcon },
      { techLabel: "SQL", techIcon: SQLIcon },
      { techLabel: "HTML5", techIcon: HTMLIcon },
      { techLabel: "CSS3", techIcon: CSSIcon },
    ],
    githubLink: "https://github.com/Igorbraziel/Django_Projeto_E-commerce",
    liveAppLink: "",
  },
  {
    name: "WorldWise",
    description: "",
    image: worldwiseImg,
    techStack: [
      { techLabel: "React", techIcon: ReactIcon },
      { techLabel: "CSS Modules", techIcon: CSSModulesIcon },
      { techLabel: "React Leaflet", techIcon: MapIcon },
      { techLabel: "Vite", techIcon: ThunderIcon },
    ],
    githubLink: "https://github.com/Igorbraziel/worldwise",
    liveAppLink: "",
  },
];

export function useProjectsData() {
  const { t } = useTranslation("projects");

  const projectsDescriptions = t("projectsDescriptions", {
    returnObjects: true,
  }) as string[];
  const multiLanguageProjects = projectsList.map((project, index) => {
    return { ...project, description: projectsDescriptions[index] };
  });

  return {
    projectsLabels: t("projectsLabels", {
      returnObjects: true,
    }) as ProjectsLabels,
    projectsList: multiLanguageProjects as ProjectsListType,
  };
}

export type ProjectsListType = Project[];

export type Project = {
  name: string;
  description: string;
  image: string;
  techStack: {
    techLabel: string;
    techIcon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  }[];
  githubLink:
    | {
        frontEnd: string;
        backEnd: string;
      }
    | string;
  liveAppLink: string;
};

type ProjectsLabels = {
  projectsText: string;
};
