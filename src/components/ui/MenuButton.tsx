import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#070c26",
    },
  },
});

interface MenuButtonProps {
  onClick?: () => void;
}

export default function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <ThemeProvider theme={theme}>
      <button
        onClick={onClick}
        className="cursor-pointer rounded-full bg-zinc-300 p-1.5 sm:p-2 dark:bg-zinc-200"
      >
        <MenuIcon color="primary" />
      </button>
    </ThemeProvider>
  );
}
