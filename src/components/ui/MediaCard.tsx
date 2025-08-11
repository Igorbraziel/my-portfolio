import { Link } from "react-router";
import { type SocialMedia } from "../../data/user";

import { motion } from "motion/react";

interface MediaCartProps {
  socialMedia: SocialMedia;
}

export default function MediaCard({ socialMedia }: MediaCartProps) {
  return (
    <motion.li
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.99 }}
    >
      <Link
        className={`flex cursor-pointer items-center gap-1.5 shadow-md shadow-neutral-950 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-3.5 ${socialMedia.bgColor} rounded-md px-2 py-1 sm:py-1.5 md:px-2.5 lg:py-2`}
        key={socialMedia.name}
        to={socialMedia.profileURL}
        target="_blank"
      >
        <img
          className="h-5 w-5 rounded-md md:h-6 md:w-6"
          src={socialMedia.mediaIcon}
          alt={`${socialMedia.name} Icon`}
        />
        <span
          className={`text-[0.6rem] not-italic md:text-xs ${socialMedia.textColor} font-bold`}
        >
          {socialMedia.name}
        </span>
      </Link>
    </motion.li>
  );
}
