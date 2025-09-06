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
        className={`flex cursor-pointer items-center gap-1 shadow-md shadow-neutral-950 sm:gap-1.5 ${socialMedia.bgStyle} rounded-md px-2 py-1 sm:py-1.5 md:px-2.5 lg:py-2`}
        key={socialMedia.name}
        to={socialMedia.profileURL}
        target="_blank"
      >
        <socialMedia.mediaIcon className="h-5 w-5 rounded-md sm:h-5.5 sm:w-5.5 lg:h-6 lg:w-6 xl:h-6.5 xl:w-6.5" />
        <span
          className={`text-xs not-italic sm:text-sm lg:text-base ${socialMedia.textStyle} font-bold`}
        >
          {socialMedia.name}
        </span>
      </Link>
    </motion.li>
  );
}
