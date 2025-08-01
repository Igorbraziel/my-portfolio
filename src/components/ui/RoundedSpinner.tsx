import { motion } from "motion/react";

export default function RoundedSpinner() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <motion.div
        className="h-9 w-9 rounded-full border-4 border-blue-800 border-t-transparent sm:h-12 sm:w-12 lg:h-18 lg:w-18 dark:border-blue-950"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1,
        }}
      />
    </div>
  );
}
