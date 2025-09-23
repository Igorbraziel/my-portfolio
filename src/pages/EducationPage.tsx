import CertificatesList from "../components/ui/features/education/CertificatesList";
import EducationalCard from "../components/ui/features/education/EducationalCard";
import MainContainer from "../components/ui/MainContainer";
import NextPageLink from "../components/ui/NextPageLink";
import Title from "../components/ui/Title";
import { useLinksData } from "../data/links";
import { useSettingsData } from "../data/settings";
import { capitalize } from "../utils/capitalize";

export default function EducationPage() {
  const { settings } = useSettingsData();
  const links = useLinksData();

  return (
    <MainContainer>
      <Title as="h2">{settings.educationLabel}</Title>
      <EducationalCard />
      <div className="my-3 md:my-4 lg:my-6 xl:my-7" aria-hidden></div>
      <Title as="h2">{settings.certificatesText}</Title>
      <CertificatesList />
      <NextPageLink path="/skills">
        {capitalize(links.at(2)?.label as string) || "Next"}
      </NextPageLink>
    </MainContainer>
  );
}
