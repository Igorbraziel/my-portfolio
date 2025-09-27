import { AnimatePresence } from "motion/react";
import { useState } from "react";

import { motion } from "motion/react";
import { useSettingsData } from "../../data/settings";

interface CopyTextProps {
  text: string;
}

export default function CopyText({ text }: CopyTextProps) {
  const [isCopied, setIsCopied] = useState(false);
  const {
    settings: { copiedText },
  } = useSettingsData();

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      // Hide after 2s
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div
      onClick={() => handleCopy(text)}
      className="relative w-fit cursor-copy transition hover:text-blue-900 hover:dark:text-blue-600 hover:font-semibold hover:underline"
    >
      {text}
      <AnimatePresence>
        {isCopied && (
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-md dark:bg-green-800 bg-green-600 px-2 py-1 text-[10px] text-white shadow-md sm:-top-7 sm:text-xs lg:-top-7.5 lg:text-sm"
          >
            {copiedText}!
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
