import type React from "react";
import { motion } from "motion/react";

interface ButtonProps {
  type: "confirm" | "warning";
  size: "small" | "medium" | "large";
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({ type, size, onClick, children }: ButtonProps) {
  let typeStyle;
  switch (type) {
    case "confirm":
      typeStyle = "bg-green-600 text-green-50 hover:bg-green-700 border-emerald-950 shadow-lime-200"
      break;
    case "warning":
      typeStyle = "font-extrabold bg-red-600 text-red-50 hover:bg-red-700 border-orange-700 shadow-rose-200"
      break;
    default:
      throw new Error("Type must to be 'confirm' or 'warning'");
  }

  let sizeStyle;

  switch (size) {
    case "small":
      sizeStyle = "text-xs md:text-sm lg:text-base px-1 py-1.5 sm:px-1.5 sm:py-2 md:p-2 lg:py-3";
      break;
    case "medium":
      sizeStyle = "text-sm md:text-base lg:text-lg px-2 py-2.5 sm:px-2.5 sm:py-3 md:px-3.5 lg:py-4";
      break;
    case "large":
      sizeStyle = "text-base md:text-lg lg:text-xl px-4 py-4.5 sm:px-5 md:py-5 md:px-6 lg:px-6.5";
      break;
    default:
      throw new Error("Size must to be 'small', 'medium' or 'large'");
  }

  return (
    <motion.button
      className={`${typeStyle} ${sizeStyle} cursor-pointer rounded-sm border-2 shadow`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.button>
  );
}
