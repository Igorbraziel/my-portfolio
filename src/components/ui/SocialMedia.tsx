import { user } from "../../data/user";
import MediaCard from "./MediaCard";

export default function SocialMedia() {
  return (
    <ul className="flex items-center justify-center gap-3 sm:gap-4 md:gap-4.5 lg:gap-5">
      {user.media.map((socialMedia, index) => (
        <MediaCard key={index} socialMedia={socialMedia} />
      ))}
    </ul>
  );
}
