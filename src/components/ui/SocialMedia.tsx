import { Link } from "react-router";
import { user } from "../../data/user";

export default function SocialMedia() {
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-4.5 lg:gap-5">
      {user.media.map((socialMedia, index) => (
        <Link
          className={`shadow-neutral-950 shadow-md flex cursor-pointer items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 ${socialMedia.bgColor} rounded-md p-1 sm:py-2 md:px-2 lg:px-3`}
          key={index}
          to={socialMedia.profileURL}
          target="_blank"
        >
          <img
            className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 rounded-md"
            src={socialMedia.mediaIcon}
            alt={`${socialMedia.name} Icon`}
          />
          <span className={`text-xs sm:text-sm md:text-base ${socialMedia.textColor} font-bold`}>
            {socialMedia.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
