import MainContainer from "../components/ui/MainContainer";
import NextPageLink from "../components/ui/NextPageLink";
import RoundedPicture from "../components/ui/RoundedPicture";

import UserInfo from "../components/ui/features/user/UserInfo";

import profilePicture from "../assets/images/profile_picture2.jpeg";

import { useUserData } from "../data/user";
import { useLinksData } from "../data/links";

import { capitalize } from "../utils/capitalize";
import UserButtons from "../components/ui/features/user/UserButtons";
import UserSection from "../components/ui/features/user/UserSection";

export default function HomePage() {
  const user = useUserData();
  const links = useLinksData();

  return (
    <MainContainer>
      <div className="my-4 flex flex-1 flex-col items-center justify-center space-y-4 sm:space-y-5 md:my-5 lg:my-6">
        <RoundedPicture src={profilePicture} alt={user.name} />
        <UserInfo />
        <UserButtons />
      </div>
      <UserSection />
      <NextPageLink path="/education">
        {capitalize(links.at(1)?.label as string) || "Next"}
      </NextPageLink>
    </MainContainer>
  );
}
