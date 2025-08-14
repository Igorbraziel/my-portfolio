import { NavLink } from "react-router";
import { useLinksData } from "../../data/links";
import ButtonIcon from "./ButtonIcon";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function LinkList() {
  const largeBreakpoint = useMediaQuery("(min-width: 1024px)");
  const links = useLinksData()

  return (
    <ul className="flex px-2 py-3 sm:gap-1.5 md:gap-2 lg:gap-3 xl:gap-4">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink to={link.path} className="relative dark:after:bg-indigo-200">
            <ButtonIcon type="link" label={link.label} size="small">
              {<link.icon fontSize={largeBreakpoint ? "medium" : "small"} />}
            </ButtonIcon>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
