import { useUserData } from "../../data/user";
import MediaCard from "./MediaCard";

export default function SocialMedia() {
  const user = useUserData();

  return (
    <ul className="flex items-center justify-center gap-3.5 sm:gap-6 md:gap-6.5 lg:gap-8 xl:gap-10">
      {user.media.map((socialMedia, index) => (
        <MediaCard key={index} socialMedia={socialMedia} />
      ))}
    </ul>
  );
}
