import MainContainer from "../components/ui/MainContainer";
import ProjectsList from "../components/ui/features/projects/ProjectsList";
import Title from "../components/ui/Title";
import { useProjectsData } from "../data/projects";
import NextPageLink from "../components/ui/NextPageLink";
import { useLinksData } from "../data/links";
import { capitalize } from "../utils/capitalize";

export default function ProjectsPage() {
  const { projectsLabels } = useProjectsData();
  const links = useLinksData()

  return (
    <MainContainer>
      <Title as="h1">{projectsLabels.projectsText}</Title>
      <ProjectsList />
      <NextPageLink path="/contact">
        {capitalize(links.at(4)?.label as string) || "Next"}
      </NextPageLink>
    </MainContainer>
  );
}
