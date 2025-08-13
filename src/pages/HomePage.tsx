import MainContainer from "../components/ui/MainContainer";
import RotatingText from "../components/ui/RotatingText";
import Title from "../components/ui/Title";
import { user } from "../data/user";

export default function HomePage() {
  return (
    <MainContainer>
      <Title>
        {user.name}
      </Title>
      <RotatingText />
    </MainContainer>
  );
}
