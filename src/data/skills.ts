import { useTranslation } from "react-i18next";
import DjangoIcon from "../components/ui/icons/DjangoIcon";
import MySQLIcon from "../components/ui/icons/MySQLIcon";
import PythonIcon from "../components/ui/icons/PythonIcon";
import SQLIcon from "../components/ui/icons/SQLIcon";
import ReactIcon from "../components/ui/icons/ReactIcon";
import NextIcon from "../components/ui/icons/NextIcon";
import TailwindIcon from "../components/ui/icons/TailwindIcon";
import AuthIcon from "../components/ui/icons/AuthIcon";
import MachineLearningIcon from "../components/ui/icons/MachineLearningIcon";
import DataScienceIcon from "../components/ui/icons/DataScienceIcon";
import JupyterIcon from "../components/ui/icons/JupyterIcon";
import JavaIcon from "../components/ui/icons/JavaIcon";
import SpringIcon from "../components/ui/icons/SpringIcon";
import MongoIcon from "../components/ui/icons/MongoIcon";
import PostmanIcon from "../components/ui/icons/PostmanIcon";

import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import StorageIcon from "@mui/icons-material/Storage";
import MergeTypeIcon from "@mui/icons-material/MergeType";
import DockerIcon from "../components/ui/icons/DockerIcon";
import AWSIcon from "../components/ui/icons/AWSIcon";
import PandasIcon from "../components/ui/icons/PandasIcon";

const skills = [
  { techLabel: "React.js", techIcon: ReactIcon },
  { techLabel: "Tailwind CSS", techIcon: TailwindIcon },
  { techLabel: "Python", techIcon: PythonIcon },
  { techLabel: "AWS", techIcon: AWSIcon },
  { techLabel: "Pandas", techIcon: PandasIcon },
  { techLabel: "Docker", techIcon: DockerIcon },
  { techLabel: "Django", techIcon: DjangoIcon },
  { techLabel: "SQL", techIcon: SQLIcon },
  { techLabel: "MySQL", techIcon: MySQLIcon },
  { techLabel: "Next.js", techIcon: NextIcon },
  { techLabel: "Auth.js", techIcon: AuthIcon },
  { techLabel: "Machine Learning", techIcon: MachineLearningIcon },
  { techLabel: "Data Science", techIcon: DataScienceIcon },
  { techLabel: "Jupyter Notebook", techIcon: JupyterIcon },
  { techLabel: "Java", techIcon: JavaIcon },
  { techLabel: "Spring Boot", techIcon: SpringIcon },
  { techLabel: "MongoDB", techIcon: MongoIcon },
  { techLabel: "Postman", techIcon: PostmanIcon },
];

const competenciesList = [
  {
    competencyIcon: BuildCircleIcon,
    competencyTitle: "Back-end Development",
    competencyResume:
      "Django, Python, SpringBoot, Java, Node.js, Express.js, Next.js",
  },
  {
    competencyIcon: CodeIcon,
    competencyTitle: "Front-end Development",
    competencyResume:
      "React.js, JavaScript, TypeScript, TailwindCSS, HTML5, Next.js",
  },
  {
    competencyIcon: CloudIcon,
    competencyTitle: "Cloud Computing",
    competencyResume:
      "Amazon Web Servicies (AWS), Microsoft Azure, Google Cloud Platform (GCP)",
  },
  {
    competencyIcon: SmartToyIcon,
    competencyTitle: "Machine Learning",
    competencyResume: "TensorFlow, PyTorch, Scikit-learn, Jupyter Notebook",
  },
  {
    competencyIcon: StorageIcon,
    competencyTitle: "Database",
    competencyResume: "PostgreSQL, MongoDB, MySQL, Oracle Database",
  },
  {
    competencyIcon: MergeTypeIcon,
    competencyTitle: "DevOps",
    competencyResume: "CI/CD, GitHub Actions, Docker, Docker-Compose",
  },
];

export function useSkillsData() {
  const { t } = useTranslation("skills");

  return {
    skillsList: skills,
    skillsLabels: t("skillsLabels", { returnObjects: true }) as SkillsLabels,
    competenciesList,
  };
}

type SkillsLabels = {
  skillsText: string;
  coreCompetenciesText: string;
  competenciesResume: string;
};
