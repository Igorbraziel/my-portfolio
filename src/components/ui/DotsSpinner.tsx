import { motion, type Transition } from "motion/react";

const containerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const dotVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const dotTransition: Transition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
};

interface DotsSpinnerProps {
  size?: "small" | "large";
}

export default function DotsSpinner({ size = "small" }: DotsSpinnerProps) {
  let containerStyle, dotStyle;

  switch (size) {
    case "small":
      containerStyle =
        "flex w-8 justify-around gap-1 sm:w-12.5 sm:gap-2 lg:w-13";
      dotStyle =
        "block h-2 w-2 rounded-[50%] bg-blue-200 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3 dark:bg-blue-950";
      break;
    case "large":
      containerStyle =
        "flex w-40 justify-around gap-5";
      dotStyle =
        "block h-10 w-10 rounded-[50%] bg-blue-200 dark:bg-blue-950";
      break;
    default:
      throw new Error("The DotsSpinner size must to be 'small' or 'large'");
  }

  return (
    <div role="status" className="pt-2.5">
      <motion.div
        className={containerStyle}
        variants={containerVariants}
        initial="start"
        animate="end"
      >
        <motion.span
          className={dotStyle}
          variants={dotVariants}
          transition={dotTransition}
        />
        <motion.span
          className={dotStyle}
          variants={dotVariants}
          transition={dotTransition}
        />
        <motion.span
          className={dotStyle}
          variants={dotVariants}
          transition={dotTransition}
        />
      </motion.div>
    </div>
  );
}
