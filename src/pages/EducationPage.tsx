import EducationalCard from "../components/ui/EducationalCard";
import MainContainer from "../components/ui/MainContainer";
import { useSettingsData } from "../data/settings";

export default function EducationPage() {
  const settings = useSettingsData();

  return (
    <MainContainer>
      <h2 className="font-title mt-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-800 via-blue-800 to-fuchsia-800 text-center text-2xl">
        {settings.educationLabel}
      </h2>
      <EducationalCard />
    </MainContainer>
  );
}
