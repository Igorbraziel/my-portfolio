import type { PropsWithChildren } from "react";
import NavigationBar from "./NavigationBar";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="dark:bg-black text-gray-400">
      <NavigationBar />
      <span>{children} App Layout</span>
    </div>
  );
}
