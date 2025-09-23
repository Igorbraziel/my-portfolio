import { motion } from "motion/react";

const GradientBackground = () => {
  return (
    <motion.div
      className="fixed inset-0 top-0 left-0 -z-10 h-screen w-screen"
      style={{
        background:
          "linear-gradient(135deg, oklch(83.3% 0.145 321.434), oklch(92.9% 0.013 255.508),  oklch(60.6% 0.25 292.717))",
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
