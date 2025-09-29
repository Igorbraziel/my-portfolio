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
      <motion.div
        className="flex w-8 justify-around gap-1 sm:w-12.5 sm:gap-2 lg:w-13"
        variants={containerVariants}
        initial="start"
        animate="end"
      >
        <motion.span
          className="block h-2 w-2 rounded-[50%] bg-blue-200 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3 dark:bg-blue-950"
          variants={dotVariants}
          transition={dotTransition}
        />
        <motion.span
          className="block h-2 w-2 rounded-[50%] bg-blue-200 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3 dark:bg-blue-950"
          variants={dotVariants}
          transition={dotTransition}
        />
        <motion.span
          className="block h-2 w-2 rounded-[50%] bg-blue-200 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3 dark:bg-blue-950"
          variants={dotVariants}
          transition={dotTransition}
        />
      </motion.div>
    </div>
  );
}
