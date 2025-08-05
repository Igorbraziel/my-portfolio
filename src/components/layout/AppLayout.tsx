import Header from "./Header";
import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div className="pt-3 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-7 dark:bg-slate-900 bg-slate-100 text-neutral-900 dark:text-neutral-100 min-h-screen">
      <Header />
      <NavigationBar />
      <Outlet />
    </div>
  );
}
