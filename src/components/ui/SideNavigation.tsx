import { Link } from "react-router";
import { links } from "../../data/links";

interface SideNavigationProps {
  onClose?: () => void;
}

export default function SideNavigation({ onClose }: SideNavigationProps) {
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
              className="flex gap-3 text-sm font-bold hover:bg-gray-300 dark:hover:bg-gray-800"
              key={link.label}
            >
              <span>{link.emoji}</span>
              <span className="uppercase hover:text-neutral-200 dark:hover:text-neutral-800">
                {link.label}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
