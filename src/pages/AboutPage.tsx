import MainContainer from "../components/ui/MainContainer";
import NextPageLink from "../components/ui/NextPageLink";
import profilePicture from "../assets/images/profile_picture2.jpeg";
import { useUserData } from "../data/user";

export default function AboutPage() {
  const user = useUserData();

  return (
    <MainContainer>
      <div className="h-16 w-16">
        <img
          src={profilePicture}
          alt={user.name}
          className="h-full w-full object-cover rounded-full"
        />
      </div>
      <NextPageLink path="/education">Education</NextPageLink>
    </MainContainer>
  );
}
