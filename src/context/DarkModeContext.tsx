import { useEffect, type Dispatch, type PropsWithChildren } from "react";
import { createContext } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

interface DarkModeObject {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<null | DarkModeObject>(null);

function DarkModeProvider({ children }: PropsWithChildren) {
  const isDarkLocalState = useLocalStorageState(true, "isDark");
  const [isDark, setIsDark] = [
    isDarkLocalState.at(0) as boolean,
    isDarkLocalState.at(1) as Dispatch<unknown>,
  ];

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [isDark]);

  function toggleDarkMode() {
    setIsDark((isDark: boolean) => {
      return !isDark;
    });
  }

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export { DarkModeProvider, DarkModeContext };
