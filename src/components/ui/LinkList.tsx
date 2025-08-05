import { NavLink } from "react-router";
import { links } from "../../data/links";
import ButtonIcon from "./ButtonIcon";

export default function LinkList() {
  return (
    <ul className="flex px-2 py-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink to={link.path} className="relative dark:after:bg-indigo-200">
            <ButtonIcon
              type="link"
              label={link.label}
              size="small"
            >
              {<link.icon />}
            </ButtonIcon>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
