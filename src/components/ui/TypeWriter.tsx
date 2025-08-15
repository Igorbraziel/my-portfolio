import { motion } from "motion/react";
import useTypewriter from "../../hooks/useTypewriter";

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function Typewriter({
  text,
  speed = 100,
  className = "",
}: TypewriterProps) {
  const { displayedText } = useTypewriter(text, speed);

  return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{ whiteSpace: "pre-wrap", display: "inline-block" }}
        className={className}
      >
        {displayedText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        >
          |
        </motion.span>
      </motion.span>
  );
}
