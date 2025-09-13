import type React from "react";

export interface TagProps {
  as?: keyof HTMLElementTagNameMap;
  baseColor: "indigo" | "fuchsia" | "purple" | "violet" | "teal";
  className?: string;
  children: React.ReactNode;
}

export default function Tag({
  as = "span",
  baseColor,
  className = "",
  children,
}: TagProps) {
  let colorStyle = "";

  switch (baseColor) {
    case "indigo":
      colorStyle = `dark:text-indigo-50 text-gray-950 bg-indigo-300/60 dark:bg-indigo-900/10 border-indigo-400 dark:border-indigo-950`;
      break;
    case "fuchsia":
      colorStyle = `dark:text-fuchsia-50 text-gray-950 bg-fuchsia-300/60 dark:bg-fuchsia-900/10 border-fuchsia-400 dark:border-fuchsia-950`;
      break;
    case "purple":
      colorStyle = `dark:text-purple-50 text-gray-950 bg-purple-300/60 dark:bg-purple-900/10 border-purple-400 dark:border-purple-950`;
      break;
    case "violet":
      colorStyle = `dark:text-violet-50 text-gray-950 bg-violet-300/60 dark:bg-violet-900/10 border-violet-400 dark:border-violet-950`;
      break;
    case "teal":
      colorStyle = `dark:text-teal-50 text-gray-950 bg-teal-600/60 dark:bg-teal-900/10 border-teal-700 dark:border-teal-950`;
      break;
    default:
      throw new Error("Color not defined");
  }

  const Component = as;

  return (
    <Component
      className={`rounded-xl border-2 font-bold whitespace-nowrap ${colorStyle} ${className}`}
    >
      {children}
    </Component>
  );
}
