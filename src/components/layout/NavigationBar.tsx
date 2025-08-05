import { NavLink } from "react-router";

import PortraitIcon from "@mui/icons-material/Portrait";

import { useDarkMode } from "../../hooks/useDarkMode";

import Button from "../ui/Button";
import LinkList from "../ui/LinkList";

export default function NavigationBar() {
  

  return (
    <nav className="flex w-full items-center justify-between">
      <LinkList />
    </nav>
  );
}
