import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  if(!context) throw new Error("The Dark Mode Context was used outside of the Dark Mode Provider");
  
  return { isDark: context.isDark, toggleDarkMode: context.toggleDarkMode};
}