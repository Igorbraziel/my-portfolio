import { useDarkMode } from "../../hooks/useDarkMode";
import ButtonIcon from "./ButtonIcon";

import { createTheme, ThemeProvider } from "@mui/material";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const theme = createTheme({
  palette: {
    warning: { main: "#ffe204" },
  },
});

export default function DarkModeButton() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <ThemeProvider theme={theme}>
      <ButtonIcon type="toggle-icon" size="small" onClick={toggleDarkMode}>
        {isDark ? (
          <NightlightRoundIcon titleAccess="Moon Icon" />
        ) : (
          <WbSunnyIcon titleAccess="Sun Icon" color="warning" />
        )}
      </ButtonIcon>
    </ThemeProvider>
  );
}
