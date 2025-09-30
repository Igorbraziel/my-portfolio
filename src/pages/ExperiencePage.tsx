import ExperienceTimeline from "../components/ui/features/experience/ExperienceTimeline";
import MainContainer from "../components/ui/MainContainer";
import NextPageLink from "../components/ui/NextPageLink";
import Title from "../components/ui/Title";
import { useLinksData } from "../data/links";
import { capitalize } from "../utils/capitalize";

export default function ExperiencePage() {
  const links = useLinksData();

  return (
    <MainContainer>
      <Title as="h1">{links.at(3)?.label}</Title>
      <ExperienceTimeline />
      <NextPageLink path="/projects">
        {capitalize(links.at(4)?.label as string) || "Next"}
      </NextPageLink>
    </MainContainer>
  );
}
