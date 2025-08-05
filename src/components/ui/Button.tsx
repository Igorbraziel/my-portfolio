import type React from "react";

interface ButtonProps {
  type: string;
  size: string;
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({ type, size, onClick, children}: ButtonProps){
  let typeStyle;
  switch(type){
    case "primary":
    
      break
    case "secondary":
      break
    default:
  }

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

  return <button className="px-2 py-3 bg-sky-800 border rounded-sm border-sky-900 hover:bg-sky-400 cursor-pointer" onClick={onClick}>{children}</button>
}