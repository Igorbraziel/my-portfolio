import { createTheme, ThemeProvider } from "@mui/material";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import { useDarkMode } from "../../hooks/useDarkMode";

import ButtonIcon from "../ui/ButtonIcon";
import Logo from "../ui/Logo";
import UserInformation from "../ui/UserInformation";

const theme = createTheme({
  palette: {
    warning: { main: "#ffe204" },
  },
});

export default function Header() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <ThemeProvider theme={theme}>
      <header className="lg:mg-6 xl:mg-7 mx-2 mb-2 flex items-center gap-1 justify-between rounded-4xl border border-gray-300 bg-slate-200 px-4 py-3 shadow-xl sm:mx-3 sm:mb-3 sm:px-5 sm:py-4 md:mb-5 md:ml-4 md:max-h-70 md:flex-col md:justify-start md:gap-3 lg:mb-6 lg:flex-row lg:justify-between xl:mb-7 dark:bg-slate-800">
        <Logo />
        <div>
          <UserInformation />
        </div>
        <ButtonIcon type="toggle-icon" size="small" onClick={toggleDarkMode}>
          {isDark ? (
            <NightlightRoundIcon titleAccess="Moon Icon" />
          ) : (
            <WbSunnyIcon titleAccess="Sun Icon" color="warning" />
          )}
        </ButtonIcon>
      </header>
    </ThemeProvider>
  );
}
