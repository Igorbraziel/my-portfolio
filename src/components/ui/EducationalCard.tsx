import PsychologyIcon from "@mui/icons-material/Psychology";
import { useUserData } from "../../data/user";
import EducationalInfo from "./EducationalInfo";

const colorsMap = ["indigo", "fuchsia", "purple", "violet", "teal"];

export default function EducationalCard() {
  const { graduation } = useUserData();

  return (
    <div className="mx-auto my-2 w-full rounded-sm border border-gray-900 px-3 py-2 backdrop-blur-xs md:flex md:gap-4 dark:border-gray-400">
      <PsychologyIcon
        className="mb-2 md:mb-0 border-2 border-purple-900 bg-purple-400 ring-2 ring-stone-900 dark:border-purple-600 dark:bg-purple-900 dark:ring-stone-50"
        fontSize="large"
      />
      <EducationalInfo graduation={graduation} colorsMap={colorsMap} />
    </div>
  );
}
