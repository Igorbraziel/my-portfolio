import { useTranslation } from "react-i18next";
import NextIcon from "../components/ui/icons/NextIcon";
import TailwindIcon from "../components/ui/icons/TailwindIcon";
import AuthIcon from "../components/ui/icons/AuthIcon";
import PostgreSQLIcon from "../components/ui/icons/PostgreSQLIcon";
import ExpressIcon from "../components/ui/icons/ExpressIcon";

import wildOasisWebsiteImg from "../assets/images/the-wild-oasis-screenshot.png";
import wildOasisDashboardImg from "../assets/images/the-wild-oasis-dashboard-screenshot.png";
import ReactIcon from "../components/ui/icons/ReactIcon";
import SupabaseIcon from "../components/ui/icons/SupabaseIcon";
import StyledComponentsIcon from "../components/ui/icons/StyledComponentsIcon";

import { type JSX } from "react";

const projectsList = [
  {
    name: "The Wild Oasis - Website",
    description:
      "Full Stack Hotel Booking Platform Responsive, production-ready web app simulating a hotel reservation system. Built with Next.js (App Router), styled with Tailwind CSS, and connected to a secure Express.js backend with JWT and NextAuth.js authentication. Supports Google login and real-time booking.",
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
    description:
      "Internal Hotel Management System Admin panel for managing bookings, guests, and cabins. Includes charts, authentication, filtering, and CRUD operations.",
    image: wildOasisDashboardImg,
    techStack: [
      { techLabel: "React", techIcon: ReactIcon },
      { techLabel: "Supabase", techIcon: SupabaseIcon },
      { techLabel: "Styled Components", techIcon: StyledComponentsIcon },
    ],
    githubLink: "https://github.com/Igorbraziel/the-wild-oasis",
    liveAppLink: "",
  },
];

export function useProjectsData() {
  const { t } = useTranslation("projects");

  return {
    projectsLabels: t("projectsLabels", {
      returnObjects: true,
    }) as ProjectsLabels,
    projectsList: projectsList as ProjectsListType,
  };
}

export type ProjectsListType = {
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
}[];

type ProjectsLabels = {
  projectsText: string;
};
