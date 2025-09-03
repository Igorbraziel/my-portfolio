import MainContainer from "../components/ui/MainContainer";
import NextPageLink from "../components/ui/NextPageLink";
import profilePicture from "../assets/images/profile_picture2.jpeg";
import { useUserData } from "../data/user";
import RotatingText from "../components/ui/RotatingText";
import Button from "../components/ui/Button";
import useMediaQuery from "../hooks/useMediaQuery";
import Typewriter from "../components/ui/TypeWriter";

export default function AboutPage() {
  const user = useUserData();

  const isLaptop = useMediaQuery("(min-width: 768px)");

  return (
    <MainContainer>
      <div className="my-4 flex flex-1 flex-col items-center justify-center space-y-4">
        <div className="mb-3 h-40 w-40">
          <img
            src={profilePicture}
            alt={user.name}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <div className="text-center">
          <h2 className="font-title text-3xl uppercase">{user.name}</h2>
          <RotatingText textList={user.subtitles} />
        </div>
        <div className="flex-col justify-between gap-5 sm:flex-row sm:gap-8 flex">
          <a href="/IgorReisBraziel_FullStack.pdf" download className="flex-1 sm:flex-auto">
            <Button type="normal" size={isLaptop ? "large" : "medium"}>
              Download Resume
            </Button>
          </a>
          <a href="https://drive.google.com/file/d/1YOxVL0IN5_mobAu7BO9D-eDZd94hjXW5/view?usp=drive_link" target="_blank" className="flex-1 sm:flex-auto">
            <Button type="normal" size={isLaptop ? "large" : "medium"}>
              View Resume
            </Button>
          </a>
        </div>
      </div>
      <section className="my-4 space-y-2 text-neutral-950 dark:text-neutral-50">
        <h3 className="text-3xl font-black text-slate-800 dark:text-slate-400">
          About Me
        </h3>
        <p className="text-base font-medium">
          <Typewriter text={user.about} speed={30} />
        </p>
      </section>
      <NextPageLink path="/education">Education</NextPageLink>
    </MainContainer>
  );
}
