import React, { useCallback, useEffect } from "react";
import {
  motion,
  useAnimationControls,
} from "framer-motion";

type InfiniteScrollListProps = {
  items: React.ReactNode[];
  duration?: number;
  unorderedListClassName?: string;
  listItemClassName?: string;
};

export default function InfiniteScrollList({
  items,
  duration = 20,
  unorderedListClassName = "",
  listItemClassName = "",
}: InfiniteScrollListProps) {
  const controls = useAnimationControls();
  const gapStyle = "gap-3 xs:gap-4 sm:gap-5 lg:gap-6";

  const startAnimation = useCallback(
    (fromX = "0%") => {
      controls.start({
        x: [fromX, "-100%"],
        transition: {
          repeat: Infinity,
          duration,
          ease: "linear",
          repeatType: "loop",
        },
      });
    },
    [controls, duration],
  );

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  return (
    <div className={`flex overflow-hidden select-none`}>
      <motion.ul
        animate={controls}
        className={`xs:pr-2 flex min-w-full shrink-0 list-none items-center justify-between pr-1.5 sm:pr-2.5 lg:pr-3 ${gapStyle} ${unorderedListClassName}`}
      >
        {items.map((item, index) => (
          <motion.li
            whileHover={{ scale: 1.05 }}
            className={`${listItemClassName}`}
            key={index}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
      <motion.ul
        aria-hidden={true}
        animate={controls}
        className={`xs:pl-2 flex min-w-full shrink-0 list-none items-center justify-between pl-1.5 sm:pl-2.5 lg:pl-3 ${gapStyle} ${unorderedListClassName}`}
      >
        {items.map((item, index) => (
          <motion.li
            whileHover={{ scale: 1.05 }}
            className={`${listItemClassName}`}
            key={index}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
