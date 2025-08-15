import { useCycle, motion } from "motion/react";
import type { PropsWithChildren } from "react";

interface DynamicBackgroundProps {
  colors: string[];
  className?: string;
}

export default function DynamicBackground({
  colors,
  className,
  children,
}: PropsWithChildren<DynamicBackgroundProps>) {
  const [bg, cycleBg] = useCycle(...colors);

  return (
    <motion.div
      animate={{ background: bg }}
      transition={{ duration: 2, ease: "linear" }}
      onAnimationComplete={() => cycleBg()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
