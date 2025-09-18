import { useTranslation } from "react-i18next";
import DjangoIcon from "../components/ui/icons/DjangoIcon";
import MySQLIcon from "../components/ui/icons/MySQLIcon";
import PythonIcon from "../components/ui/icons/PythonIcon";
import SQLIcon from "../components/ui/icons/SQLIcon";

const skills = [
  { techLabel: "Python", techIcon: PythonIcon },
  { techLabel: "Django", techIcon: DjangoIcon },
  { techLabel: "SQL", techIcon: SQLIcon },
  { techLabel: "MySQL", techIcon: MySQLIcon },
];

export function useSkillsData(){
  const { t } = useTranslation("skills");

  return {
    skillsList: skills,
    skillsText: t("skillsText")
  }
}
