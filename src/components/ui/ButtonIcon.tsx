import { type PropsWithChildren } from "react";
import { motion } from "motion/react";

interface ButtonIconProps {
  size: string;
  type?: "link" | "toggle-icon";
  label?: string;
  onClick?: () => void;
  style?: string;
}

export default function ButtonIcon({
  size,
  label,
  onClick,
  type,
  children,
  style,
}: PropsWithChildren<ButtonIconProps>) {
  let sizeStyle;

  switch (size) {
    case "small":
      sizeStyle = "text-[10px] p-2 gap-1 sm:p-3 md:p-4 lg:p-5";
      break;
    case "medium":
      sizeStyle = "text-xs p-3 gap-2 sm:p-4 md:p-5 lg:p-6";
      break;
    case "large":
      sizeStyle = "text-base p-4 gap-3 sm:p-5 md:p-6 lg:p-7";
      break;
    default:
      throw new Error("Size must to be 'small', 'medium' or 'large'");
  }

  return (
    <motion.button
      onClick={onClick}
      className={`flex cursor-pointer flex-col items-center justify-center uppercase ${sizeStyle} ${type === "link" ? "hover:bg-gray-200 md:text-xs lg:text-sm xl:text-base hover:dark:bg-gray-700" : type === "toggle-icon" ? "rounded-xl bg-yellow-50 dark:bg-slate-950" : style ? style : ""}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {label}
    </motion.button>
  );
}
