import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface RotatingTextProps {
  textList: string[];
}

export default function RotatingText({ textList }: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((previousIndex) => (previousIndex + 1) % textList.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [textList]);

  return (
    <div className="font-heading h-10 overflow-hidden text-lg text-neutral-600 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl dark:text-neutral-200">
      <AnimatePresence mode="wait">
        <motion.h2
          key={textList.at(index)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          {textList.at(index)}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}
