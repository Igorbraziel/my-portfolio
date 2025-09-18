import MainContainer from "../components/ui/MainContainer";
import Title from "../components/ui/Title";
import { useSkillsData } from "../data/skills";

export default function SkillsPage() {
  const skills = useSkillsData()

  return <MainContainer>
    <Title className="bg-red">{skills.skillsText}</Title>
  </MainContainer>;
}
