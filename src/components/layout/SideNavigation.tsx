import { Link } from "react-router";
import { useLinksData } from "../../data/links";

interface SideNavigationProps {
  onClose?: () => void;
}

export default function SideNavigation({ onClose }: SideNavigationProps) {
  const links = useLinksData();

  return (
    <nav className="mt-2">
      <ul>
        {links.map((link, index) => (
          <Link
            className="cursor-pointer"
            to={link.path}
            key={index}
            onClick={onClose}
          >
            <li
              className="flex gap-3 text-sm font-bold hover:text-neutral-600 hover:underline hover:dark:text-neutral-400"
              key={link.label}
            >
              {<link.icon fontSize="small" />}
              <span className="uppercase">{link.label}</span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
