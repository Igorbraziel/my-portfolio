import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const testTitles = ["Full Stack", "Scientist", "Data Engineer"];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((previousIndex) => (previousIndex + 1) % testTitles.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-heading h-10 overflow-hidden text-lg font- text-neutral-800 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl dark:text-neutral-200">
      <AnimatePresence mode="wait">
        <motion.h2
          key={testTitles.at(index)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          {testTitles.at(index)}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}
