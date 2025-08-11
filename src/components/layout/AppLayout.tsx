import Snowfall from "../ui/Snowfall";
import Footer from "./Footer";
import { Outlet } from "react-router";
import Header from "./Header";
import { useDarkMode } from "../../hooks/useDarkMode";
import { CosmicBackground } from "../ui/CosmicBackground";

export default function AppLayout() {
  const { isDark } = useDarkMode();

  return (
    <div className="relative z-0 min-h-screen bg-slate-100 text-neutral-900 dark:bg-slate-900 dark:text-neutral-100">
      <Header />
      {isDark ? <CosmicBackground /> : <Snowfall />}
      <Outlet />
      <Footer />
    </div>
  );
}
