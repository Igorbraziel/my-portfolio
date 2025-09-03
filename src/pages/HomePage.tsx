import HomePageContent from "../components/ui/HomePageContent";
import MainContainer from "../components/ui/MainContainer";
import NextPageLink from "../components/ui/NextPageLink";
import RotatingText from "../components/ui/RotatingText";
import Title from "../components/ui/Title";
import { useUserData } from "../data/user";

export default function HomePage() {
  const user = useUserData();

  return (
    <MainContainer>
      <Title>
        {user.name}
      </Title>
      <RotatingText textList={user.subtitles}/>
      <HomePageContent />
      <NextPageLink path="/about">
        About
      </NextPageLink>
    </MainContainer>
  );
}
