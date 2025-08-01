import type { PropsWithChildren } from "react";
import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="dark:bg-black text-gray-400">
      <NavigationBar />
      <Outlet />
    </div>
  );
}
