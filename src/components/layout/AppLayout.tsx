import Snowfall from "../ui/Snowfall";
import Footer from "./Footer";
import { Outlet } from "react-router";
import Header from "./Header";
import { useDarkMode } from "../../hooks/useDarkMode";
import { CosmicBackground } from "../ui/CosmicBackground";
import useCountryCode from "../../hooks/useCountryCode";

export default function AppLayout() {
  const { isDark } = useDarkMode();
  const {countryCode, switchLanguage} = useCountryCode();

  return (
    <div className="flex flex-col relative z-0 min-h-screen bg-slate-100 text-neutral-900 dark:bg-slate-900 dark:text-neutral-100">
      <Header />
      {isDark ? <CosmicBackground /> : <Snowfall />}
      <Outlet />
      <Footer countryCode={countryCode} setCountryCode={switchLanguage}/>
    </div>
  );
}
 