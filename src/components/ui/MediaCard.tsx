import { Link } from "react-router";
import { type SocialMedia } from "../../data/user";

interface MediaCartProps {
  socialMedia: SocialMedia;
}

export default function MediaCard({ socialMedia }: MediaCartProps) {
  return (
    <li>
      <Link
        className={`flex cursor-pointer items-center gap-1.5 shadow-md shadow-neutral-950 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 ${socialMedia.bgColor} rounded-md px-2 py-1 sm:py-2 md:px-2.5 lg:px-3 lg:py-2.5`}
        key={socialMedia.name}
        to={socialMedia.profileURL}
        target="_blank"
      >
        <img
          className="h-5 w-5 rounded-md sm:h-6 sm:w-6 lg:h-7 lg:w-7"
          src={socialMedia.mediaIcon}
          alt={`${socialMedia.name} Icon`}
        />
        <span
          className={`text-[0.6rem] sm:text-sm md:text-base ${socialMedia.textColor} font-bold`}
        >
          {socialMedia.name}
        </span>
      </Link>
    </li>
  );
}
