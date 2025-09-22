import MainContainer from "../components/ui/MainContainer";
import ProjectsList from "../components/ui/ProjectsList";
import Title from "../components/ui/Title";
import { useProjectsData } from "../data/projects";

export default function ProjectsPage() {
  const { projectsLabels } = useProjectsData();

  return (
    <MainContainer>
      <Title as="h1">{projectsLabels.projectsText}</Title>
      <ProjectsList />
    </MainContainer>
  );
}
