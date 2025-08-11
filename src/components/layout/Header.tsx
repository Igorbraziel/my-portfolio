import useMediaQuery from "../../hooks/useMediaQuery";
import DarkModeButton from "../ui/DarkModeButton";
import Logo from "../ui/Logo";
import ModalMenu from "../ui/ModalMenu";
import NavigationBar from "./NavigationBar";

export default function Header() {
  const smallBreakpoint = useMediaQuery("(min-width: 640px)");
  return (
    <header className="flex w-full items-center justify-between bg-slate-200 px-4 py-3 sm:gap-4 xl:justify-evenly dark:bg-slate-800">
      {smallBreakpoint ? (
        <>
          <Logo />
          <NavigationBar />
        </>
      ) : (
        <>
          <ModalMenu />
          <Logo />
        </>
      )}
      <DarkModeButton />
    </header>
  );
}
