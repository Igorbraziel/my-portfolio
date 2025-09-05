import { motion } from "motion/react";

const GradientBackground = () => {
  return (
    <motion.div
      className="fixed inset-0 -z-10 top-0 left-0 h-screen w-screen"
      style={{
        background: "linear-gradient(135deg, oklch(89.9% 0.061 343.231), oklch(93.2% 0.032 255.585), oklch(93% 0.034 272.788), oklch(70.2% 0.183 293.541))",
        backgroundSize: "100% 100%",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 30, // slow for elegance
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default GradientBackground;
