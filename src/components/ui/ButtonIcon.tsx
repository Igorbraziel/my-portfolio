import { type PropsWithChildren } from "react";

interface ButtonIconProps {
  size: string;
  label?: string;
  onClick: () => void;
}

export default function ButtonIcon({
  size,
  label,
  onClick,
  children,
}: PropsWithChildren<ButtonIconProps>) {
  let sizeStyle;

  switch (size) {
    case "small":
      sizeStyle = "p-2 gap-1 sm:p-3 md:p-4 lg:p-5";
      break;
    case "medium":
      sizeStyle = "p-3 gap-2 sm:p-4 md:p-5 lg:p-6";
      break;
    case "large":
      sizeStyle = "p-4 gap-3 sm:p-5 md:p-6 lg:p-7";
      break;
    default:
      throw new Error("Size must to be 'small', 'medium' or 'large'");
  }

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center ${sizeStyle} rounded-xl bg-yellow-50 dark:bg-slate-950`}
    >
      {label}
      {children}
    </button>
  );
}
