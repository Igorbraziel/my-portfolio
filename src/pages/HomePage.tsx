import MainContainer from "../components/ui/MainContainer";
import RotatingText from "../components/ui/RotatingText";
import Title from "../components/ui/Title";
import { useUserData } from "../data/user";

export default function HomePage() {
  const user = useUserData()

  return (
    <MainContainer>
      <Title>
        {user.name}
      </Title>
      <RotatingText />
    </MainContainer>
  );
}
