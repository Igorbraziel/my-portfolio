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

export default function DotsSpinner() {
  return (
    <div role="status" className="pt-2.5">
      <span className="visually-hidden">Loading...</span>
      <motion.div
        className="flex h-10 w-10 justify-around gap-1.5 sm:h-15.5 sm:w-15.5 sm:gap-2 lg:h-20 lg:w-20"
        variants={containerVariants}
        initial="start"
        animate="end"
      >
        <motion.span
          className="block h-2 w-2 rounded-[50%] bg-blue-950 sm:h-3.5 sm:w-3.5 lg:h-5 lg:w-5 dark:bg-blue-800"
          variants={dotVariants}
          transition={dotTransition}
        />
        <motion.span
          className="block h-2 w-2 rounded-[50%] bg-blue-950 sm:h-3.5 sm:w-3.5 lg:h-5 lg:w-5 dark:bg-blue-800"
          variants={dotVariants}
          transition={dotTransition}
        />
        <motion.span
          className="block h-2 w-2 rounded-[50%] bg-blue-950 sm:h-3.5 sm:w-3.5 lg:h-5 lg:w-5 dark:bg-blue-800"
          variants={dotVariants}
          transition={dotTransition}
        />
      </motion.div>
    </div>
  );
}
