import DarkModeButton from "../ui/DarkModeButton";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-100 text-neutral-900 sm:pt-4 lg:pt-6 xl:pt-7 dark:bg-slate-900 dark:text-neutral-100">
      <header className="flex w-full items-center justify-between bg-slate-200 px-4">
        <NavigationBar />
        <DarkModeButton />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}
