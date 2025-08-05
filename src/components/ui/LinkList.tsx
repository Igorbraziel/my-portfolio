import { NavLink } from "react-router";
import { links } from "../../data/links";

export default function LinkList() {
  return (
    <ul className="flex px-2 py-3">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            className="bg-stone-200 px-1.5 py-2 text-xs capitalize ring ring-slate-800 hover:bg-stone-300 sm:p-3 sm:text-sm md:py-4 md:text-base lg:px-4 lg:py-5 lg:text-lg dark:bg-stone-800 dark:hover:bg-stone-900"
            to={link.path}
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
