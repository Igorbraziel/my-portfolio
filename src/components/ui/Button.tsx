import type React from "react";
import { motion } from "motion/react";

interface ButtonProps {
  type: "confirm" | "warning" | "normal" | "submit";
  size: "small" | "medium" | "large" | "extra-large" | "extra-small";
  onClick?: () => void;
  children: React.ReactNode;
  extraClassNames?: string;
  disabled?: boolean;
}

export default function Button({
  type,
  size,
  onClick,
  children,
  extraClassNames,
  disabled = false,
}: ButtonProps) {
  let typeStyle;
  switch (type) {
    case "confirm":
      typeStyle =
        "bg-green-600 text-green-50 hover:bg-green-700 border-emerald-950 shadow-lime-200";
      break;
    case "warning":
      typeStyle =
        "font-extrabold bg-red-600 text-red-50 hover:bg-red-700 border-orange-700 shadow-rose-200";
      break;
    case "normal":
      typeStyle =
        "bg-stone-900 hover:bg-stone-700 border-stone-600 hover:border-slate-500 dark:bg-stone-300 dark:hover:bg-stone-400 dark:border-stone-600 dark:hover:border-slate-700 dark:text-stone-950 text-stone-50 font-bold";
      break;
    case "submit":
      typeStyle =
        "bg-stone-900 hover:bg-stone-700 border-stone-600 hover:border-slate-500 dark:bg-stone-300 dark:hover:bg-stone-400 dark:border-stone-600 dark:hover:border-slate-700 dark:text-stone-950 text-stone-50 font-bold";
      break;
    default:
      throw new Error("Type must to be 'confirm' or 'warning' or 'normal'");
  }

  let sizeStyle;

  switch (size) {
    case "extra-small":
      sizeStyle =
        "text-[10px] md:text-xs lg:text-sm px-1.5 py-1 sm:px-2 sm:py-1.5 md:py-2 lg:px-2.5";
      break;
    case "small":
      sizeStyle =
        "text-sm md:text-sm lg:text-base px-1 py-1.5 sm:px-1.5 sm:py-2 md:p-2 lg:py-3";
      break;
    case "medium":
      sizeStyle =
        "text-base md:text-base lg:text-lg px-2 py-2.5 sm:px-2.5 sm:py-3 md:px-3.5 lg:py-4";
      break;
    case "large":
      sizeStyle =
        "text-lg md:text-lg lg:text-xl px-4 py-3 sm:px-3.5 md:py-3.5 md:px-4.5 lg:px-5";
      break;
    case "extra-large":
      sizeStyle =
        "text-xl md:text-2xl lg:text-3xl px-4.5 py-3.5 sm:px-4 md:py-4 md:px-5 lg:px-5.5";
      break;
    default:
      throw new Error("Size must to be 'small', 'medium' or 'large'");
  }

  return (
    <motion.button
      type={type == "submit" ? "submit" : "button"}
      className={`${typeStyle} ${sizeStyle} cursor-pointer rounded-sm border-4 ${extraClassNames}`}
      onClick={onClick}
      whileHover={type == "submit" ? "hover" : { scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
