import profilePicture from "../../assets/images/profile_picture.jpg";
import { useDarkMode } from "../../hooks/useDarkMode";
import ButtonIcon from "../ui/ButtonIcon";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import { createTheme, ThemeProvider } from "@mui/material";
import { user } from "../../data/user";

const theme = createTheme({
  palette: {
    warning: { main: "#ffe204" },
  },
});

export default function Header() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <ThemeProvider theme={theme}>
      <div className="lg:mg-6 xl:mg-7 mx-2 mb-2 flex items-center justify-between rounded-4xl border border-gray-300 bg-slate-200 px-4 py-3 shadow-xl sm:mx-3 sm:mb-3 sm:px-5 sm:py-4 md:mx-4 md:mb-5 md:justify-evenly lg:mb-6 xl:mb-7 dark:bg-slate-800">
        <img
          className="h-15 w-15 rounded-full object-cover object-left sm:h-20 sm:w-20 md:h-25 md:w-25 lg:h-30 lg:w-30"
          src={profilePicture}
          alt="profile picture"
        />
        <header>
          <h2 className="bold text-sm sm:text-base md:text-lg lg:text-xl">
            {user.name}
          </h2>
          <h3 className="text-[10px] font-light italic sm:text-xs md:text-sm lg:text-base xl:text-lg">
            {user.description}
          </h3>
        </header>
        <ButtonIcon size="small" onClick={toggleDarkMode}>
          {isDark ? (
            <NightlightRoundIcon titleAccess="Moon Icon" />
          ) : (
            <WbSunnyIcon titleAccess="Sun Icon" color="warning" />
          )}
        </ButtonIcon>
      </div>
    </ThemeProvider>
  );
}
