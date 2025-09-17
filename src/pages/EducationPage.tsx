import CertificatesList from "../components/ui/CertificatesList";
import EducationalCard from "../components/ui/EducationalCard";
import MainContainer from "../components/ui/MainContainer";
import NextPageLink from "../components/ui/NextPageLink";
import { useLinksData } from "../data/links";
import { useSettingsData } from "../data/settings";
import { capitalize } from "../utils/capitalize";

export default function EducationPage() {
  const settings = useSettingsData();
  const links = useLinksData();

  return (
    <MainContainer>
      <h2 className="font-title mt-2 mb-2 bg-gradient-to-r from-violet-900 via-blue-900 to-fuchsia-900 bg-clip-text text-center text-2xl font-bold text-transparent uppercase sm:text-3xl md:text-4xl lg:mb-4 lg:text-5xl dark:from-violet-200 dark:via-blue-200 dark:to-fuchsia-200">
        {settings.educationLabel}
      </h2>
      <EducationalCard />
      <h2 className="sm:mt-8 md:mt-9 lg:mt-14 font-title mt-6 sm:mb-4 md:mb-6 lg:mb-8 mb-2 bg-gradient-to-r from-violet-950 via-blue-950 to-fuchsia-950 bg-clip-text text-center text-2xl font-bold text-transparent uppercase sm:text-3xl md:text-4xl lg:mb-4 lg:text-5xl dark:from-violet-100 dark:via-blue-100 dark:to-fuchsia-100">
        {settings.certificatesText}
      </h2>
      <CertificatesList />
      <NextPageLink path="/skills">
        {capitalize(links.at(2)?.label as string) || "Next"}
      </NextPageLink>
    </MainContainer>
  );
}
