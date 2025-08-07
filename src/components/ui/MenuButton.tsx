import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#070c26",
    },
  },
});

export default function MenuButton() {
  return (
    <ThemeProvider theme={theme}>
      <button className="rounded-full cursor-pointer bg-zinc-300 p-1.5 sm:p-2 dark:bg-zinc-200">
        <MenuIcon color="primary" />
      </button>
    </ThemeProvider>
  );
}
