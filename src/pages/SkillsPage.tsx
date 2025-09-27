import { capitalize } from "@mui/material";
import MainContainer from "../components/ui/MainContainer";
import NextPageLink from "../components/ui/NextPageLink";
import Title from "../components/ui/Title";
import { useSkillsData } from "../data/skills";
import { useLinksData } from "../data/links";
import Typewriter from "../components/ui/TypeWriter";
import CompetenciesList from "../components/ui/features/skills/CompetenciesList";
import SkillsScrollList from "../components/ui/features/skills/SkillsScrollList";

export default function SkillsPage() {
  const { skillsLabels } = useSkillsData();
  const links = useLinksData();

  return (
    <MainContainer>
      <Title as="h1">{skillsLabels.skillsText}</Title>
      <SkillsScrollList />
      <Title as="h2" className="!mt-8">
        {skillsLabels.coreCompetenciesText}
      </Title>
      <Typewriter
        text={skillsLabels.competenciesResume}
        speed={50}
        className="text-center text-sm font-semibold tracking-wider sm:text-base lg:text-lg xl:text-xl"
      />
      <CompetenciesList />
      <NextPageLink path="/experience">
        {capitalize(links.at(3)?.label as string) || "Next"}
      </NextPageLink>
    </MainContainer>
  );
}
