import { Link } from "react-router";
import { user } from "../../data/user";

export default function SocialMedia() {
  return (
    <div className="flex items-center justify-center gap-3">
      {user.media.map((socialMedia, index) => (
        <Link
          className={`flex items-center gap-1 ${socialMedia.bgColor} rounded-md p-1`}
          key={index}
          to={socialMedia.profileURL}
          target="_blank"
        >
          <img
            className="h-5 w-5 rounded-md"
            src={socialMedia.mediaIcon}
            alt={`${socialMedia.name} Icon`}
          />
          <span className={`${socialMedia.textColor} font-bold`}>
            {socialMedia.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
