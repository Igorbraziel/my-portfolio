import MainContainer from "../components/ui/MainContainer";
import NextPageLink from "../components/ui/NextPageLink";
import profilePicture from "../assets/images/profile_picture2.jpeg";
import { useUserData } from "../data/user";
import RotatingText from "../components/ui/RotatingText";
import Button from "../components/ui/Button";
import useMediaQuery from "../hooks/useMediaQuery";
import Typewriter from "../components/ui/TypeWriter";
import { useSettingsData } from "../data/settings";
import { useLinksData } from "../data/links";
import { capitalize } from "../utils/capitalize";
import RoundedPicture from "../components/ui/RoundedPicture";

export default function HomePage() {
  const user = useUserData();
  const links = useLinksData();
  const { settings } = useSettingsData();
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isLaptop = useMediaQuery("(min-width: 1024px)");

  return (
    <MainContainer>
      <div className="my-4 flex flex-1 flex-col items-center justify-center space-y-4 sm:space-y-5 md:my-5 lg:my-6">
        <RoundedPicture src={profilePicture} alt={user.name} />
        <div className="text-center md:mb-8 lg:mb-10 xl:mb-12">
          <h2 className="font-title text-3xl font-bold uppercase sm:text-4xl lg:text-5xl">
            {user.name}
          </h2>
          <RotatingText textList={user.subtitles} />
        </div>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:gap-8 lg:gap-12 xl:gap-14">
          <a
            href="/IgorReisBraziel_FullStack.pdf"
            download
            className="flex-1 sm:flex-auto"
          >
            <Button
              extraClassNames="w-full"
              type="normal"
              size={isTablet ? "large" : isLaptop ? "extra-large" : "medium"}
            >
              {settings.uploadButtonText}
            </Button>
          </a>
          <a
            href="https://drive.google.com/file/d/1YOxVL0IN5_mobAu7BO9D-eDZd94hjXW5/view?usp=drive_link"
            target="_blank"
            className="flex-1 sm:flex-auto"
          >
            <Button
              extraClassNames="w-full"
              type="normal"
              size={isTablet ? "large" : isLaptop ? "extra-large" : "medium"}
            >
              {settings.viewButtonText}
            </Button>
          </a>
        </div>
      </div>
      <section className="my-4 space-y-2 text-neutral-950 dark:text-neutral-50">
        <h3 className="text-2xl font-black text-slate-800 sm:text-3xl lg:text-4xl dark:text-slate-400">
          {settings.about}
        </h3>
        <p className="text-base font-medium md:text-lg lg:text-xl xl:text-2xl">
          <Typewriter text={user.about} speed={30} />
        </p>
      </section>
      <NextPageLink path="/education">
        {capitalize(links.at(1)?.label as string) || "Next"}
      </NextPageLink>
    </MainContainer>
  );
}
