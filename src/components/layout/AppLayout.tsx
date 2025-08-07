import useMediaQuery from "../../hooks/useMediaQuery";
import DarkModeButton from "../ui/DarkModeButton";
import Logo from "../ui/Logo";
import MenuButton from "../ui/MenuButton";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router";

export default function AppLayout() {
  const smallBreakpoint = useMediaQuery("(min-width: 640px)");

  return (
    <div className="min-h-screen bg-slate-100 text-neutral-900 dark:bg-slate-900 dark:text-neutral-100">
      <header className="xl:justify-evenly flex w-full sm:gap-4 items-center justify-between bg-slate-200 px-4 py-3 dark:bg-slate-800">
        {smallBreakpoint ? (
          <>
            <Logo />
            <NavigationBar />
          </>
        ) : (
          <>
            <MenuButton />
            <Logo />
          </>
        )}
        <DarkModeButton />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}
