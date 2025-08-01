import { useEffect, useState, type PropsWithChildren } from "react";
import { createContext } from "react";

interface DarkModeObject {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<null | DarkModeObject>(null);

function DarkModeProvider({ children }: PropsWithChildren) {
  const [isDark, setIsDark] = useState(
    window.matchMedia("prefers-color-scheme: dark").matches
  );

  useEffect(() => {
    if(isDark){
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.setAttribute("data-theme", "light")
    }
  }, [isDark])

  function toggleDarkMode(){
    setIsDark(isDark => !isDark)
  }

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export { DarkModeProvider, DarkModeContext };
