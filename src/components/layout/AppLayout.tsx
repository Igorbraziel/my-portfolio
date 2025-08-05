import Header from "./Header";
import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-100 pt-3 text-neutral-900 sm:pt-4 md:grid md:grid-cols-2 md:grid-rows-[18rem_1fr] md:pt-5 lg:pt-6 xl:pt-7 dark:bg-slate-900 dark:text-neutral-100">
      <Header />
      <NavigationBar />
      <Outlet />
    </div>
  );
}
